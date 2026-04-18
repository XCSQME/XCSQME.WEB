# 星辰社区 XCSQ — Web

全球顶级加密货币信号聚合平台（静态站点）。

- **技术栈**: HTML / CSS / JS, Tailwind CSS v4 (browser build), Lucide Icons, GSAP, Chart.js, Three.js (首页限定)
- **页面**: 7 个静态页面 (`index`, `about`, `kols`, `kol-detail`, `pricing`, `faq`, `news`)
- **部署**: Vercel 静态托管 / Nginx (Docker) / 任意静态文件服务器

## 目录结构

```
XCSQME.WEB/
├── index.html           # 首页
├── pages/               # 子页面
├── shared/              # 公共 CSS/JS/模板
├── assets/              # 图片（含 163 个 KOL 头像）
├── scripts/             # 本地数据抓取脚本（非发布内容）
├── robots.txt / sitemap.xml
├── vercel.json          # Vercel 配置
├── Dockerfile / nginx.conf
└── README_PERF.md       # 图片/性能手动优化待办
```

## 本地开发

任何静态服务器都可以运行本项目。推荐：

```bash
# Python 3
python3 -m http.server 8080

# Node (npx)
npx --yes serve -l 8080 .
```

打开 <http://localhost:8080>。

> 注意：浏览器对相对路径很宽松，但通过 `file://` 打开会触发 CORS 问题，请使用本地 HTTP 服务器。

## 部署

### Vercel

```bash
vercel --prod
```

`vercel.json` 已配置静态资源路由，无需改动。

### Docker (Nginx)

```bash
docker build -t xcsqme-web .
docker run --rm -p 8080:80 xcsqme-web
```

Nginx 配置已启用 gzip、安全响应头和静态资源长缓存，参考 [`nginx.conf`](./nginx.conf)。

### 任意静态主机

直接将仓库内容上传到网站根目录即可（需要保留 `pages/`、`shared/`、`assets/` 目录结构）。

## 安全

- 所有页面设置了 **CSP meta** 策略，限制脚本/样式来源到 self + 可信 CDN
- 外链 CDN 资源建议启用 **SRI** (Subresource Integrity)：见各页面 `integrity=` 属性；若哈希为空请参考 [CDN 官方 SRI 工具](https://www.srihash.org/) 生成
- 内联 `onclick` 事件已逐步迁移到 `data-action` + 事件委托
- 动态 `innerHTML` 改用 DOM API，避免 XSS

## 性能

- 字体加载启用 `display=swap` + `preconnect`
- 图片全部加 `loading="lazy"` 属性
- Three.js 只在首页加载（粒子背景）
- CDN 资源添加 `defer` 属性避免阻塞渲染

手动优化待办清单见 [`README_PERF.md`](./README_PERF.md)。

## 贡献 / 开发约定

- 不要提交 `.DS_Store` / `*.log` / `*.bak` 等（`.gitignore` 已处理）
- 新增 CDN 资源请同步添加 `integrity` 和 `crossorigin="anonymous"`
- 修改 HTML 请手动确认 `<html>` / `<body>` 闭合完整
- JS 改动可用 `node --check shared/scripts.js` 做语法检查

## License

Copyright © 星辰社区 XCSQ. All rights reserved.
