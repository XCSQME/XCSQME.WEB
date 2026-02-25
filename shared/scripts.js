/**
 * 星辰社区 (Star Community) - Shared JavaScript
 * ==============================================
 * Utilities, Particle System, and Interactive Features
 */

// ========================================
// 1. LUCIDE ICONS INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Initialize all modules
  initNavigation();
  initParticleSystem();
  initScrollReveal();
  initSmoothScroll();
  initHeaderScroll();
  initBackToTop();
});

// ========================================
// 2. NAVIGATION MODULE
// ========================================
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const menuIcon = document.getElementById('menu-icon');

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      if (mobileMenuOverlay) mobileMenuOverlay.classList.add('open');
      if (menuIcon) menuIcon.setAttribute('data-lucide', 'x');
      document.body.style.overflow = 'hidden';
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  }

  // Mobile menu close
  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('open');
    if (menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
    document.body.style.overflow = '';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close menu on link click
  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Highlight current nav item
  highlightCurrentNavItem();
}

function highlightCurrentNavItem() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop().replace('.html', '') || 'index';
  
  // Desktop nav links
  const navLinks = document.querySelectorAll('.nav-link[data-nav]');
  navLinks.forEach(link => {
    const navPage = link.getAttribute('data-nav');
    if (navPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Mobile nav links
  const mobileNavLinks = document.querySelectorAll('#mobile-menu a[data-nav]');
  mobileNavLinks.forEach(link => {
    const navPage = link.getAttribute('data-nav');
    if (navPage === currentPage) {
      link.classList.add('bg-white/10');
    } else {
      link.classList.remove('bg-white/10');
    }
  });
}

// ========================================
// 3. PARTICLE SYSTEM (CANVAS-BASED)
// ========================================
function initParticleSystem() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Check if canvas container exists, if not create one
  let canvas = document.getElementById('particle-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    document.body.insertBefore(canvas, document.body.firstChild);
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Configuration from Design.md
  const config = {
    particleCount: 150,
    particleSize: { min: 1, max: 3 },
    particleColor: ['#ffffff', '#00d4ff', '#a855f7'],
    particleOpacity: { min: 0.3, max: 0.8 },
    connectionDistance: 120,
    connectionOpacity: 0.15,
    connectionColor: '#00d4ff',
    mouseInteractionRadius: 150,
    mouseRepelForce: 0.5,
    movementSpeed: 0.3,
    twinkleSpeed: 0.02
  };

  let particles = [];
  let mouse = { x: null, y: null };
  let animationId = null;
  let isActive = true;

  // Resize canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Particle class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * (config.particleSize.max - config.particleSize.min) + config.particleSize.min;
      this.color = config.particleColor[Math.floor(Math.random() * config.particleColor.length)];
      this.baseOpacity = Math.random() * (config.particleOpacity.max - config.particleOpacity.min) + config.particleOpacity.min;
      this.opacity = this.baseOpacity;
      this.vx = (Math.random() - 0.5) * config.movementSpeed;
      this.vy = (Math.random() - 0.5) * config.movementSpeed - 0.1; // Slight upward drift
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.twinkleSpeed = config.twinkleSpeed * (0.5 + Math.random());
    }

    update() {
      // Twinkle effect
      this.twinklePhase += this.twinkleSpeed;
      this.opacity = this.baseOpacity + Math.sin(this.twinklePhase) * 0.2;
      this.opacity = Math.max(0.1, Math.min(1, this.opacity));

      // Mouse interaction (repulsion)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.mouseInteractionRadius) {
          const force = (config.mouseInteractionRadius - distance) / config.mouseInteractionRadius;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force * config.mouseRepelForce * 0.1;
          this.vy += Math.sin(angle) * force * config.mouseRepelForce * 0.1;
        }
      }

      // Apply velocity with damping
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= 0.99;
      this.vy *= 0.99;

      // Add slight random movement
      this.vx += (Math.random() - 0.5) * 0.01;
      this.vy += (Math.random() - 0.5) * 0.01;

      // Wrap around edges
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  // Initialize particles
  function initParticles() {
    particles = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  // Draw connections between particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.connectionDistance && connections < 3) {
          const opacity = (1 - distance / config.connectionDistance) * config.connectionOpacity;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = config.connectionColor;
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
          connections++;
        }
      }
    }
  }

  // Animation loop
  function animate() {
    if (!isActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    drawConnections();

    animationId = requestAnimationFrame(animate);
  }

  // Mouse event handlers
  function handleMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function handleMouseLeave() {
    mouse.x = null;
    mouse.y = null;
  }

  // Visibility change handler
  function handleVisibilityChange() {
    if (document.hidden) {
      isActive = false;
      if (animationId) cancelAnimationFrame(animationId);
    } else {
      isActive = true;
      animate();
    }
  }

  // Initialize
  resizeCanvas();
  initParticles();
  animate();

  // Event listeners
  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseleave', handleMouseLeave);
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    isActive = false;
    if (animationId) cancelAnimationFrame(animationId);
  });
}

// ========================================
// 4. SCROLL REVEAL ANIMATIONS
// ========================================
function initScrollReveal() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // Show all elements immediately
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('active');
    });
    return;
  }

  const revealElements = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add delay if specified
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => {
          entry.target.classList.add('active');
        }, delay);
        
        // Unobserve after revealing
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

// Utility function to add reveal animation to elements
function addRevealAnimation(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    el.classList.add('reveal');
    if (options.stagger) {
      el.dataset.revealDelay = index * options.stagger;
    }
    if (options.delay) {
      el.dataset.revealDelay = options.delay;
    }
  });
}

// ========================================
// 5. SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        const navHeight = document.getElementById('main-nav')?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// 6. HEADER SCROLL EFFECT
// ========================================
function initHeaderScroll() {
  const header = document.getElementById('main-nav');
  if (!header) return;

  let lastScrollY = 0;
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  updateHeader();
}

// ========================================
// 7. BACK TO TOP BUTTON
// ========================================
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  // Show/hide button based on scroll position
  function toggleButton() {
    if (window.scrollY > 300) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  }

  window.addEventListener('scroll', toggleButton, { passive: true });

  // Scroll to top on click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initial state
  backToTopBtn.style.opacity = '0';
  backToTopBtn.style.visibility = 'hidden';
  backToTopBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
}

// ========================================
// 8. UTILITY FUNCTIONS
// ========================================

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Animate number counter
function animateCounter(element, target, duration = 2000, suffix = '') {
  const start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out expo
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeProgress);
    
    element.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

// Intersection Observer for counters
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.counter);
        const suffix = entry.target.dataset.suffix || '';
        const duration = parseInt(entry.target.dataset.duration) || 2000;
        animateCounter(entry.target, target, duration, suffix);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// Typewriter effect
function typewriterEffect(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Copy to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
}

// Show toast notification
function showToast(message, type = 'info', duration = 3000) {
  // Remove existing toasts
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();

  // Create toast element
  const toast = document.createElement('div');
  toast.className = `toast-notification fixed bottom-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium transform translate-y-full opacity-0 transition-all duration-300`;
  
  // Set color based on type
  const colors = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  };
  toast.classList.add(colors[type] || colors.info);
  
  toast.innerHTML = `
    <div class="flex items-center gap-2">
      <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : 'info'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-full', 'opacity-0');
  });

  // Remove after duration
  setTimeout(() => {
    toast.classList.add('translate-y-full', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ========================================
// 9. GSAP ANIMATIONS (if GSAP is loaded)
// ========================================
function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Fade in up animation
  gsap.utils.toArray('.gsap-fade-in-up').forEach(element => {
    gsap.from(element, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Stagger children animation
  gsap.utils.toArray('.gsap-stagger').forEach(container => {
    gsap.from(container.children, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// ========================================
// 10. EXPORTS FOR EXTERNAL USE
// ========================================
window.XCSQ = {
  // Animation utilities
  addRevealAnimation,
  animateCounter,
  typewriterEffect,
  
  // Utility functions
  debounce,
  throttle,
  copyToClipboard,
  showToast,
  
  // Re-initialize functions
  initIcons: () => { if (typeof lucide !== 'undefined') lucide.createIcons(); },
  initNavigation,
  initParticleSystem,
  initScrollReveal,
  initCounterAnimation,
  initGSAPAnimations
};
