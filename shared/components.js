/**
 * 星辰社区 - 公共组件加载器
 * 自动注入 nav + footer，根据页面位置计算相对路径
 */

(function() {
  // 检测当前页面是在根目录还是 pages/ 子目录
  const path = window.location.pathname;
  const inPages = path.includes('/pages/') || path.includes('/pages\\');
  const prefix = inPages ? '..' : '.';
  const pagesPrefix = inPages ? '.' : './pages';

  // 当前页面名（用于 nav active 状态）
  const currentPage = path.split('/').pop().replace('.html', '') || 'index';

  function navActiveClass(page) {
    return currentPage === page ? 'active' : '';
  }

  function mobileActiveClass(page) {
    return currentPage === page ? 'bg-white/10' : 'hover:bg-white/10';
  }

  // ========== Navigation ==========
  function renderNav() {
    return `
  <header id="main-nav" class="nav-header">
    <div class="container">
      <nav class="flex items-center justify-between py-4">
        <a href="${prefix}/index.html" class="flex items-center gap-2">
          <img src="${prefix}/assets/logo-xcsq.jpg" alt="星辰社区" class="w-10 h-10 rounded-full object-cover">
          <span class="text-xl font-bold text-white">星辰社区</span>
        </a>

        <div class="hidden lg:flex items-center gap-1">
          <a href="${prefix}/index.html" class="nav-link ${navActiveClass('index')}" data-nav="index">
            <i data-lucide="home" class="w-4 h-4"></i><span>首页</span>
          </a>
          <a href="${pagesPrefix}/about.html" class="nav-link ${navActiveClass('about')}" data-nav="about">
            <i data-lucide="users" class="w-4 h-4"></i><span>关于我们</span>
          </a>
          <a href="${pagesPrefix}/kols.html" class="nav-link ${navActiveClass('kols')}" data-nav="kols">
            <i data-lucide="star" class="w-4 h-4"></i><span>KOL列表</span>
          </a>
          <a href="${pagesPrefix}/pricing.html" class="nav-link ${navActiveClass('pricing')}" data-nav="pricing">
            <i data-lucide="crown" class="w-4 h-4"></i><span>订阅计划</span>
          </a>
          <a href="${pagesPrefix}/faq.html" class="nav-link ${navActiveClass('faq')}" data-nav="faq">
            <i data-lucide="help-circle" class="w-4 h-4"></i><span>常见问题</span>
          </a>
          <a href="${pagesPrefix}/news.html" class="nav-link ${navActiveClass('news')}" data-nav="news">
            <i data-lucide="newspaper" class="w-4 h-4"></i><span>最新动态</span>
          </a>
        </div>

        <div class="hidden lg:flex items-center gap-4">
          <a href="https://x.com/XCSQbtc" target="_blank" class="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://t.me/xcsqme" target="_blank" class="social-icon">
            <i data-lucide="send" class="w-5 h-5"></i>
          </a>
          <a href="${pagesPrefix}/pricing.html" class="btn btn-primary text-sm py-2 px-4">立即加入</a>
        </div>

        <button id="mobile-menu-btn" class="lg:hidden p-2 text-white">
          <i data-lucide="menu" class="w-6 h-6" id="menu-icon"></i>
        </button>
      </nav>
    </div>
  </header>

  <div id="mobile-menu-overlay" class="mobile-menu-overlay"></div>

  <div id="mobile-menu" class="mobile-menu">
    <div class="flex justify-between items-center mb-8">
      <span class="text-xl font-bold">菜单</span>
      <button id="mobile-menu-close" class="p-2">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>
    </div>
    <nav class="flex flex-col gap-4">
      <a href="${prefix}/index.html" class="flex items-center gap-3 p-3 rounded-lg ${mobileActiveClass('index')}" data-nav="index">
        <i data-lucide="home" class="w-5 h-5"></i><span>首页</span>
      </a>
      <a href="${pagesPrefix}/about.html" class="flex items-center gap-3 p-3 rounded-lg ${mobileActiveClass('about')}" data-nav="about">
        <i data-lucide="users" class="w-5 h-5"></i><span>关于我们</span>
      </a>
      <a href="${pagesPrefix}/kols.html" class="flex items-center gap-3 p-3 rounded-lg ${mobileActiveClass('kols')}" data-nav="kols">
        <i data-lucide="star" class="w-5 h-5"></i><span>KOL列表</span>
      </a>
      <a href="${pagesPrefix}/pricing.html" class="flex items-center gap-3 p-3 rounded-lg ${mobileActiveClass('pricing')}" data-nav="pricing">
        <i data-lucide="crown" class="w-5 h-5"></i><span>订阅计划</span>
      </a>
      <a href="${pagesPrefix}/faq.html" class="flex items-center gap-3 p-3 rounded-lg ${mobileActiveClass('faq')}" data-nav="faq">
        <i data-lucide="help-circle" class="w-5 h-5"></i><span>常见问题</span>
      </a>
      <a href="${pagesPrefix}/news.html" class="flex items-center gap-3 p-3 rounded-lg ${mobileActiveClass('news')}" data-nav="news">
        <i data-lucide="newspaper" class="w-5 h-5"></i><span>最新动态</span>
      </a>
    </nav>
    <div class="mt-8 pt-8 border-t border-white/10">
      <div class="flex gap-4">
        <a href="https://x.com/XCSQbtc" target="_blank" class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://t.me/xcsqme" target="_blank" class="social-icon">
          <i data-lucide="send" class="w-5 h-5"></i>
        </a>
      </div>
    </div>
  </div>`;
  }

  // ========== Footer ==========
  function renderFooter() {
    return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid" style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px;">
        <!-- Brand -->
        <div>
          <a href="${prefix}/index.html" class="flex items-center gap-2 mb-4">
            <img src="${prefix}/assets/logo-xcsq.jpg" alt="星辰社区" class="w-10 h-10 rounded-full object-cover">
            <span class="text-xl font-bold text-white">星辰社区</span>
          </a>
          <p style="color: #E5E7EB; font-size: 0.875rem; line-height: 1.7; margin-bottom: 1.5rem;">
            全球顶级加密货币信号聚合社区，汇集270+顶尖KOL，24/7实时监控。
          </p>
          <div class="flex gap-3">
            <a href="https://x.com/XCSQbtc" target="_blank" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://t.me/xcsqme" target="_blank" class="social-icon">
              <i data-lucide="send" class="w-4 h-4"></i>
            </a>
            <a href="https://discord.gg/xcsqme" target="_blank" class="social-icon">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 style="color: #D4AF37; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">快速链接</h4>
          <ul style="display:flex;flex-direction:column;gap:0.625rem;">
            <li><a href="${prefix}/index.html" class="footer-link" style="font-size:0.875rem;">首页</a></li>
            <li><a href="${pagesPrefix}/about.html" class="footer-link" style="font-size:0.875rem;">关于我们</a></li>
            <li><a href="${pagesPrefix}/kols.html" class="footer-link" style="font-size:0.875rem;">KOL列表</a></li>
            <li><a href="${pagesPrefix}/pricing.html" class="footer-link" style="font-size:0.875rem;">订阅计划</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 style="color: #D4AF37; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">支持</h4>
          <ul style="display:flex;flex-direction:column;gap:0.625rem;">
            <li><a href="${pagesPrefix}/faq.html" class="footer-link" style="font-size:0.875rem;">常见问题</a></li>
            <li><a href="${pagesPrefix}/about.html#contact" class="footer-link" style="font-size:0.875rem;">联系我们</a></li>
            <li><a href="${pagesPrefix}/news.html" class="footer-link" style="font-size:0.875rem;">最新动态</a></li>
          </ul>
        </div>

        <!-- Community -->
        <div>
          <h4 style="color: #D4AF37; font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;">社区</h4>
          <ul style="display:flex;flex-direction:column;gap:0.625rem;">
            <li><a href="https://t.me/xcsqme" target="_blank" class="footer-link" style="font-size:0.875rem;">Telegram</a></li>
            <li><a href="https://discord.gg/xcsqme" target="_blank" class="footer-link" style="font-size:0.875rem;">Discord</a></li>
            <li><a href="https://x.com/XCSQbtc" target="_blank" class="footer-link" style="font-size:0.875rem;">Twitter / X</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <p style="color: #E5E7EB; font-size: 0.8125rem;">&copy; 2024-2026 星辰社区 (Star Community). All rights reserved.</p>
        <p style="color: rgba(255,255,255,0.3); font-size: 0.75rem;">Built with ⭐ for the crypto community</p>
      </div>
    </div>
  </footer>

  <style>
    @media (max-width: 768px) {
      .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
    }
  </style>`;
  }

  // ========== Inject Components ==========
  function inject() {
    // Nav: 替换 <div id="xcsq-nav"></div> 或 <header id="main-nav">...</header>
    const navSlot = document.getElementById('xcsq-nav');
    if (navSlot) {
      navSlot.outerHTML = renderNav();
    }

    // Footer: 替换 <div id="xcsq-footer"></div> 或已有 <footer>
    const footerSlot = document.getElementById('xcsq-footer');
    if (footerSlot) {
      footerSlot.outerHTML = renderFooter();
    }

    // 重新初始化 Lucide 图标
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // DOM ready 时注入
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
