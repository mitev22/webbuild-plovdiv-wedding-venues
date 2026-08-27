#!/usr/bin/env python3
"""Harvest a venue's own photographs from their own website.

Two strategies, tried in order:
  1. WordPress REST media library  (/wp-json/wp/v2/media) -- complete and cheap
  2. crawl pages, scrape <img src|srcset>, og:image and CSS url(...)

Originals only: WordPress size suffixes (-1024x768) and TheGem gallery
derivatives are stripped so we keep the largest file, not a thumbnail.

    python3 tools/harvest_images.py <slug> <domain> [--out DIR] [--max-pages N]
"""
import argparse, json, os, re, sys, time
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urljoin, urlparse
import urllib.request, urllib.error

UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
IMG_EXT = re.compile(r'\.(jpe?g|png|webp)(?:$|\?)', re.I)
WP_SIZE = re.compile(r'-\d{2,4}x\d{2,4}(?=\.\w+$)')
THEME   = re.compile(r'-thegem-[a-z0-9-]+(?=\.\w+$)')
SCALED  = re.compile(r'-scaled(?=\.\w+$)')


def get(url, timeout=25):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def get_text(url):
    try:
        return get(url).decode("utf-8", "replace")
    except Exception:
        return ""


def canon(u):
    """Collapse a derivative URL onto its original."""
    u = u.split("?")[0]
    return SCALED.sub("", THEME.sub("", WP_SIZE.sub("", u)))


def wp_media(base):
    """Enumerate the WordPress media library. Returns [] if not WordPress."""
    urls, page = [], 1
    while page <= 12:
        raw = get_text(f"{base}/wp-json/wp/v2/media?per_page=100&page={page}"
                       "&_fields=source_url,mime_type")
        if not raw.startswith("["):
            break
        try:
            items = json.loads(raw)
        except json.JSONDecodeError:
            break
        if not items:
            break
        urls += [i["source_url"] for i in items
                 if str(i.get("mime_type", "")).startswith("image/")]
        if len(items) < 100:
            break
        page += 1
    return urls


def discover_pages(base, limit):
    """Sitemap first, then a shallow homepage link crawl."""
    pages, seen = [base + "/"], {base + "/"}
    host = urlparse(base).netloc

    def add(u):
        u = u.split("#")[0].rstrip("/") + "/"
        if u not in seen and urlparse(u).netloc == host and len(pages) < limit:
            seen.add(u); pages.append(u)

    for sm in ("/wp-sitemap.xml", "/sitemap_index.xml", "/sitemap.xml"):
        x = get_text(base + sm)
        for loc in re.findall(r"<loc>([^<]+)</loc>", x):
            if loc.endswith(".xml"):
                for l2 in re.findall(r"<loc>([^<]+)</loc>", get_text(loc)):
                    add(l2)
            else:
                add(loc)
        if len(pages) > 1:
            break

    if len(pages) == 1:                      # no sitemap -> crawl the nav
        for href in re.findall(r'href=["\']([^"\']+)["\']', get_text(base + "/")):
            if not href.startswith(("mailto:", "tel:", "javascript:")):
                add(urljoin(base + "/", href))
    return pages[:limit]


def scrape(html, page_url):
    out = set()
    for m in re.finditer(r'(?:src|data-src|data-lazy-src|content)=["\']([^"\']+)["\']', html):
        if IMG_EXT.search(m.group(1)):
            out.add(urljoin(page_url, m.group(1)))
    for m in re.finditer(r'(?:srcset|data-srcset)=["\']([^"\']+)["\']', html):
        for part in m.group(1).split(","):
            u = part.strip().split(" ")[0]
            if u and IMG_EXT.search(u):
                out.add(urljoin(page_url, u))
    for m in re.finditer(r'url\((["\']?)([^)"\']+)\1\)', html):
        if IMG_EXT.search(m.group(2)):
            out.add(urljoin(page_url, m.group(2)))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("slug"); ap.add_argument("domain")
    ap.add_argument("--out", default="_harvest")
    ap.add_argument("--max-pages", type=int, default=40)
    a = ap.parse_args()

    base = a.domain if a.domain.startswith("http") else "https://" + a.domain
    base = base.rstrip("/")
    dest = os.path.join(a.out, a.slug)
    os.makedirs(dest, exist_ok=True)

    urls = set(map(canon, wp_media(base)))
    via = "wp-json" if urls else ""
    print(f"[{a.slug}] wp media library: {len(urls)}")

    pages = discover_pages(base, a.max_pages)
    print(f"[{a.slug}] crawling {len(pages)} pages")
    page_map = {}
    for p in pages:
        html = get_text(p)
        if not html:
            continue
        found = {canon(u) for u in scrape(html, p)
                 if urlparse(u).netloc == urlparse(base).netloc}
        page_map[p] = sorted(found)
        urls |= found
    via = (via + "+crawl").strip("+")
    print(f"[{a.slug}] {len(urls)} unique image URLs ({via})")

    def fetch(u):
        rel = urlparse(u).path.lstrip("/")
        path = os.path.join(dest, rel)
        if os.path.exists(path) and os.path.getsize(path) > 2048:
            return True
        os.makedirs(os.path.dirname(path), exist_ok=True)
        for attempt in range(2):
            try:
                data = get(u)
                if len(data) < 2048:          # icon / spacer / error page
                    return False
                with open(path, "wb") as f:
                    f.write(data)
                return True
            except Exception:
                time.sleep(0.4)
        return False

    with ThreadPoolExecutor(max_workers=8) as ex:
        ok = sum(ex.map(fetch, sorted(urls)))
    print(f"[{a.slug}] downloaded {ok}/{len(urls)} -> {dest}")

    json.dump({"slug": a.slug, "site": base, "via": via,
               "urls": sorted(urls), "pages": page_map},
              open(os.path.join(dest, "_harvest.json"), "w"),
              ensure_ascii=False, indent=1)
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
