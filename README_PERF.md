# 性能优化 — 手动待办

以下项目需要在本地手动执行，以避免破坏现有资源。

## 1. 图片压缩 / 格式转换

### Logo

- `assets/logo-xcsq.jpg` (173 KB) → 建议转为 WebP 并压缩至 40–50 KB
- 可以保留原 JPG 作为 `<picture>` 的 `<source>` 回退

```bash
# 示例：用 cwebp
cwebp -q 82 assets/logo-xcsq.jpg -o assets/logo-xcsq.webp
```

HTML 中可替换为：

```html
<picture>
  <source srcset="assets/logo-xcsq.webp" type="image/webp">
  <img src="assets/logo-xcsq.jpg" alt="星辰社区" width="40" height="40">
</picture>
```

### KOL 头像（163 个, ~2.4 MB）

- 大多数已经是 `.webp`，但有部分 `.png` / `.jpg`
- 建议统一为 WebP，宽度 ≤ 200px，`-q 80`
- 考虑提供 `srcset` 支持视网膜屏

```bash
for f in assets/avatars/*.png assets/avatars/*.jpg; do
  [ -f "$f" ] || continue
  cwebp -q 80 -resize 200 0 "$f" -o "${f%.*}.webp"
done
```

## 2. 外部图片改本地

`pages/news.html` 大量使用 Unsplash 热链接图片。考虑：

- 下载至 `assets/news/` 并本地引用
- 或使用 Vercel Image Optimization / Cloudinary 代理

## 3. 字体子集化

Google Fonts 当前加载 4 种字体 × 多字重。建议：

- 使用 [pyftsubset](https://fonttools.readthedocs.io/) 或 [Subset Webfonts](https://everythingfonts.com/subsetter) 生成中文常用字符子集
- 或改用 `unicode-range` 拆分

## 4. SRI 哈希（TODO）

以下 CDN URL 目前 `integrity` 为占位（需联网计算）：

```
https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4
https://unpkg.com/lucide@0.460.0
https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js
https://cdn.jsdelivr.net/npm/chart.js@4.4.7
```

使用 <https://www.srihash.org/> 生成 SHA-384，然后填入各页面 `integrity="sha384-..."`。

## 5. 待做压缩的资源清单

运行以下检查命令查看可优化文件：

```bash
# 大于 50KB 的图片
find assets -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -size +50k

# WebP 以外的图片格式
find assets -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \)
```

## 6. 其他

- 未压缩 HTML 总体积约 300 KB，可用 `html-minifier-terser` 处理
- 考虑增加 Service Worker 离线缓存（见优化方案 P2-22）
