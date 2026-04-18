# XCSQME.WEB - Static Site (Nginx)
# Build:  docker build -t xcsqme-web .
# Run:    docker run --rm -p 8080:80 xcsqme-web
FROM nginx:1.27-alpine

# Security: run as non-root where possible
LABEL maintainer="XCSQ <contact@xcsqme.com>"
LABEL org.opencontainers.image.source="https://github.com/XCSQME/XCSQME.WEB"
LABEL org.opencontainers.image.description="星辰社区 XCSQ - 加密货币信号聚合平台 (static)"

# Remove default content
RUN rm -rf /usr/share/nginx/html/*

# Copy site
COPY index.html /usr/share/nginx/html/index.html
COPY robots.txt /usr/share/nginx/html/robots.txt
COPY sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY pages/ /usr/share/nginx/html/pages/
COPY shared/ /usr/share/nginx/html/shared/
COPY assets/ /usr/share/nginx/html/assets/

# Custom nginx config with security headers + gzip + cache
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
