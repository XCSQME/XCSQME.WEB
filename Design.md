# 星辰社区 (Star Community) - Design Specification

## 1. Overview

### 1.1 Project Summary
星辰社区 (Star Community / XCSQ) is a Web3 cryptocurrency signal aggregation community platform that consolidates signals from 200+ top-tier KOLs (Key Opinion Leaders) and analysts worldwide. The platform provides real-time signal forwarding, strategy copy-trading, and market analysis services for crypto traders.

### 1.2 Target Audience
- **Primary**: Chinese-speaking cryptocurrency traders and investors
- **Secondary**: International crypto traders seeking quality signals
- **Experience Level**: Beginner to advanced traders
- **Age Range**: 25-45 years old
- **Geographic Focus**: Asia-Pacific region (China, Taiwan, Singapore, etc.)

### 1.3 Language
- **Primary**: Simplified Chinese (简体中文)
- **Secondary**: English for international sections

### 1.4 Website Type
- Multi-page static website with dynamic content
- Web3/crypto aesthetic with dark theme
- Interactive 3D elements and particle effects

---

## 2. Page Manifest

| Page ID | Page Name | File Name | Is Entry | SubAgent Notes |
|---------|-----------|-----------|----------|----------------|
| index | 首页 | index.html | Yes | Hero section, services, testimonials, CTA |
| about | 关于我们 | about.html | No | Mission, vision, advantages, team, contact |
| kols | KOL列表 | kols.html | No | 3D spiral showcase of all KOLs, filterable by category |
| kol-detail | KOL详情 | kol-detail.html | No | Individual KOL profile with stats, signals, bio |
| pricing | 订阅计划 | pricing.html | No | Membership pricing tiers with feature comparison |
| faq | 常见问题 | faq.html | No | FAQ accordion with search functionality |
| news | 最新动态 | news.html | No | Update logs, news articles with pagination |

---

## 3. Global Design System

### 3.1 Color Palette

#### Primary Colors
| Name | HEX | Usage |
|------|-----|-------|
| --color-bg-primary | #0a0a0f | Main background |
| --color-bg-secondary | #12121a | Card backgrounds |
| --color-bg-tertiary | #1a1a25 | Elevated surfaces |
| --color-accent-cyan | #00d4ff | Primary accent, links, highlights |
| --color-accent-purple | #a855f7 | Secondary accent, gradients |
| --color-accent-gold | #f59e0b | Premium/CTA elements |
| --color-accent-pink | #ec4899 | Tertiary accent, alerts |

#### Gradient Definitions
```css
--gradient-hero: linear-gradient(135deg, #00d4ff 0%, #a855f7 50%, #ec4899 100%);
--gradient-card: linear-gradient(145deg, rgba(0,212,255,0.1) 0%, rgba(168,85,247,0.1) 100%);
--gradient-glow: radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%);
--gradient-gold: linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%);
```

#### Text Colors
| Name | HEX | Usage |
|------|-----|-------|
| --color-text-primary | #ffffff | Headings, important text |
| --color-text-secondary | #a1a1aa | Body text, descriptions |
| --color-text-muted | #71717a | Captions, metadata |
| --color-text-accent | #00d4ff | Links, interactive text |

#### Semantic Colors
| Name | HEX | Usage |
|------|-----|-------|
| --color-success | #22c55e | Success states, profits |
| --color-warning | #f59e0b | Warnings, alerts |
| --color-error | #ef4444 | Errors, losses |
| --color-info | #3b82f6 | Information |

### 3.2 Typography

#### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Space Grotesk', 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
--font-chinese: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
```

#### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| H1 | 4rem (64px) | 700 | 1.1 | -0.02em | Hero titles |
| H2 | 3rem (48px) | 700 | 1.2 | -0.01em | Section titles |
| H3 | 2rem (32px) | 600 | 1.3 | 0 | Card titles |
| H4 | 1.5rem (24px) | 600 | 1.4 | 0 | Subsection titles |
| H5 | 1.25rem (20px) | 500 | 1.5 | 0 | Small headings |
| Body | 1rem (16px) | 400 | 1.6 | 0 | Body text |
| Small | 0.875rem (14px) | 400 | 1.5 | 0 | Captions |
| XSmall | 0.75rem (12px) | 400 | 1.4 | 0.01em | Labels, badges |

### 3.3 Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 0.25rem (4px) | Tight spacing |
| --space-2 | 0.5rem (8px) | Icon gaps |
| --space-3 | 0.75rem (12px) | Small gaps |
| --space-4 | 1rem (16px) | Standard spacing |
| --space-6 | 1.5rem (24px) | Card padding |
| --space-8 | 2rem (32px) | Section gaps |
| --space-12 | 3rem (48px) | Large sections |
| --space-16 | 4rem (64px) | Section padding |
| --space-20 | 5rem (80px) | Hero padding |
| --space-24 | 6rem (96px) | Major sections |

### 3.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| --radius-sm | 0.375rem (6px) | Small elements |
| --radius-md | 0.5rem (8px) | Buttons, inputs |
| --radius-lg | 0.75rem (12px) | Cards |
| --radius-xl | 1rem (16px) | Large cards |
| --radius-2xl | 1.5rem (24px) | Feature cards |
| --radius-full | 9999px | Pills, avatars |

### 3.5 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4);
--shadow-glow-cyan: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3);
--shadow-glow-purple: 0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3);
--shadow-glow-gold: 0 0 20px rgba(245, 158, 11, 0.5), 0 0 40px rgba(245, 158, 11, 0.3);
```

### 3.6 Glassmorphism Effects

```css
--glass-bg: rgba(18, 18, 26, 0.7);
--glass-border: 1px solid rgba(255, 255, 255, 0.1);
--glass-backdrop: blur(20px) saturate(180%);
--glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
```

### 3.7 Particle System Specifications

#### Starfield Background
```javascript
{
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
}
```

#### Constellation Lines
- Connect particles within 120px distance
- Line opacity: 0.15 (fades with distance)
- Line color: #00d4ff (cyan)
- Max connections per particle: 3

#### Interactive Behavior
- Particles gently float upward
- Mouse cursor creates repulsion field (150px radius)
- Particles twinkle (opacity oscillation)
- Connection lines pulse subtly

### 3.8 Animation Specifications

#### Timing Functions
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

#### Duration Scale
| Name | Value | Usage |
|------|-------|-------|
| --duration-fast | 150ms | Micro-interactions |
| --duration-normal | 300ms | Standard transitions |
| --duration-slow | 500ms | Complex animations |
| --duration-slower | 800ms | Entrance animations |

#### Standard Animations

**Fade In Up**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Duration: 600ms, Easing: --ease-out-expo */
```

**Glow Pulse**
```css
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.8);
  }
}
/* Duration: 2000ms, Easing: ease-in-out, Infinite */
```

**Float**
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
/* Duration: 3000ms, Easing: ease-in-out, Infinite */
```

**Gradient Shift**
```css
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
/* Duration: 8000ms, Easing: linear, Infinite, Background-size: 200% */
```

**Star Twinkle**
```css
@keyframes twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}
/* Duration: 2000-4000ms (random), Easing: ease-in-out, Infinite */
```

---

## 4. Page Specifications

### 4.1 Index Page (首页)

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────┐
│  Navigation (Fixed, Glassmorphism)                          │
├─────────────────────────────────────────────────────────────┤
│  Hero Section (Full viewport height)                        │
│  - Particle background                                        │
│  - Animated title with gradient text                        │
│  - Subtitle with typewriter effect                          │
│  - CTA buttons with glow effect                             │
│  - Floating crypto icons                                    │
├─────────────────────────────────────────────────────────────┤
│  Stats Section                                              │
│  - Animated counters (270+ KOLs, 24/7 monitoring, etc.)     │
├─────────────────────────────────────────────────────────────┤
│  Services Section                                           │
│  - 3 service cards with icons and hover effects             │
├─────────────────────────────────────────────────────────────┤
│  Featured KOLs Section                                      │
│  - Horizontal scroll carousel                               │
│  - KOL cards with avatar and stats                          │
├─────────────────────────────────────────────────────────────┤
│  Testimonials Section                                       │
│  - Quote cards with glassmorphism                           │
│  - Auto-rotating carousel                                   │
├─────────────────────────────────────────────────────────────┤
│  CTA Section                                                │
│  - Large call-to-action with gradient background            │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                     │
└─────────────────────────────────────────────────────────────┘
```

#### Section Specifications

**Hero Section**
- Height: 100vh (min-height: 700px)
- Background: Particle starfield + gradient overlay
- Title: "星辰社区" with gradient text animation
- Subtitle: "利用我们的信号获利" with typewriter effect
- Stats line: "加入全球 超过270个最佳加密货币 VIP 频道"
- CTAs: "开始探索" (primary), "加入返佣" (secondary)
- Floating elements: Bitcoin, Ethereum icons with float animation

**Stats Section**
- Background: Slightly lighter than main bg
- 4 stat items in grid
- Animated counter on scroll
- Stats: "270+ KOLs", "24/7 监控", "50K+ 会员", "99.9%  uptime"

**Services Section**
- 3 cards in row (responsive: stack on mobile)
- Icons: Target (数据监控), Magnet (策略跟单), Chart (市场分析)
- Card hover: lift + glow effect
- Glassmorphism background

**Featured KOLs Section**
- Horizontal scroll with snap points
- 6 featured KOL cards
- Each card: Avatar, name, specialty, win rate
- "查看全部" button linking to KOLs page

**Testimonials Section**
- 3-column grid (1 column on mobile)
- Quote cards with glassmorphism
- Avatar, name, quote text
- Star rating display

**CTA Section**
- Full-width gradient background
- Large heading: "准备好开始了吗？"
- Subtext and CTA button
- Particle effect overlay

#### Animations
| Element | Animation | Trigger | Duration | Easing |
|---------|-----------|---------|----------|--------|
| Hero title | Fade in up + gradient | Load | 800ms | ease-out-expo |
| Hero subtitle | Typewriter | After title | 2000ms | linear |
| CTA buttons | Fade in up | After subtitle | 500ms | ease-out-expo |
| Floating icons | Float | Continuous | 3000ms | ease-in-out |
| Stats counters | Count up | Scroll into view | 2000ms | ease-out-expo |
| Service cards | Fade in up staggered | Scroll into view | 600ms | ease-out-expo (stagger: 100ms) |
| KOL cards | Slide in from right | Scroll into view | 600ms | ease-out-expo |
| Testimonials | Fade in up staggered | Scroll into view | 600ms | ease-out-expo (stagger: 150ms) |

---

### 4.2 About Page (关于我们)

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────┐
│  Navigation                                                 │
├─────────────────────────────────────────────────────────────┤
│  Hero Section                                               │
│  - Page title with particle background                      │
├─────────────────────────────────────────────────────────────┤
│  Mission & Vision Section                                   │
│  - Two-column layout with text and illustration             │
├─────────────────────────────────────────────────────────────┤
│  Core Advantages Section                                    │
│  - 4 advantage cards with icons                             │
├─────────────────────────────────────────────────────────────┤
│  Team Section                                               │
│  - Team member cards with avatars                           │
├─────────────────────────────────────────────────────────────┤
│  Contact Section                                            │
│  - Contact form + social links                              │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                     │
└─────────────────────────────────────────────────────────────┘
```

#### Section Specifications

**Hero Section**
- Height: 50vh (min-height: 400px)
- Title: "关于星辰社区"
- Breadcrumb navigation

**Mission & Vision**
- Two-column: Text (60%) | Illustration (40%)
- Mission statement
- Vision for the future
- Animated illustration (Lottie or SVG)

**Core Advantages**
- 4 cards in 2x2 grid
- Icons: Shield (安全保障), Zap (实时信号), Users (社区力量), TrendingUp (高胜率)
- Each card: Icon, title, description

**Team Section**
- 4 team member cards
- Avatar, name, role, social links
- Hover: card lift + social icons appear

**Contact Section**
- Contact form: Name, Email, Message
- Social links: Twitter, Telegram, Discord
- Response time indicator

---

### 4.3 KOLs Page (KOL列表) - 3D Spiral Showcase

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────┐
│  Navigation                                                 │
├─────────────────────────────────────────────────────────────┤
│  Hero Section                                               │
│  - Title: "顶级KOL阵容"                                     │
│  - Filter tabs by category                                  │
├─────────────────────────────────────────────────────────────┤
│  3D Spiral Section (Full viewport)                          │
│  - Three.js canvas with spiral layout                       │
│  - KOL cards arranged in 3D helix                          │
│  - Scroll to rotate spiral                                  │
│  - Click to view details                                    │
├─────────────────────────────────────────────────────────────┤
│  Category List Section (Alternative view)                   │
│  - Grid view toggle                                         │
│  - Filterable by category                                   │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                     │
└─────────────────────────────────────────────────────────────┘
```

#### 3D Spiral Specifications

**Three.js Configuration**
```javascript
{
  camera: {
    fov: 60,
    near: 0.1,
    far: 1000,
    position: [0, 0, 500]
  },
  spiral: {
    radius: 300,
    height: 2000,
    cardCount: 60, // Displayed KOLs
    cardsPerRotation: 12,
    cardWidth: 180,
    cardHeight: 240,
    cardDepth: 10
  },
  animation: {
    rotationSpeed: 0.002,
    scrollSensitivity: 0.001,
    hoverScale: 1.1,
    transitionDuration: 500
  }
}
```

**KOL Card Design (3D)**
- Front: Avatar, name, specialty tag
- Back: Win rate, follower count, "查看详情" button
- Material: Glassmorphism with neon border
- Border color changes by category:
  - 华语二级市场: Cyan (#00d4ff)
  - 国外二级市场: Purple (#a855f7)
  - 一级链上: Gold (#f59e0b)
  - 辅助功能: Pink (#ec4899)

**Interaction**
- Scroll: Rotates spiral vertically
- Drag: Manual rotation
- Click: Opens KOL detail modal/page
- Hover: Card scales up, glow intensifies

#### Category Filter Tabs
| Tab | Color | Count |
|-----|-------|-------|
| 全部 | White | 60+ |
| 华语二级市场 | Cyan | 27 |
| 国外二级市场 | Purple | 15 |
| 一级链上 | Gold | 10 |
| 辅助功能 | Pink | 8 |

---

### 4.4 KOL Detail Page (KOL详情)

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────┐
│  Navigation                                                 │
├─────────────────────────────────────────────────────────────┤
│  Profile Header                                             │
│  - Large avatar                                             │
│  - Name, category badge                                     │
│  - Stats: Win rate, followers, signals sent                 │
│  - Social links                                             │
│  - Follow/Subscribe button                                  │
├─────────────────────────────────────────────────────────────┤
│  Bio Section                                                │
│  - Detailed description                                     │
│  - Trading style, specialties                               │
├─────────────────────────────────────────────────────────────┤
│  Performance Stats                                          │
│  - Charts: Monthly returns, win rate trend                  │
│  - Key metrics cards                                        │
├─────────────────────────────────────────────────────────────┤
│  Recent Signals                                             │
│  - Signal cards with results                                │
├─────────────────────────────────────────────────────────────┤
│  Related KOLs                                               │
│  - Similar KOLs carousel                                    │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                     │
└─────────────────────────────────────────────────────────────┘
```

#### Profile Header
- Avatar: 150px circle with glow border
- Name: 2rem, bold
- Category badge: Colored pill
- Stats row: 4 metrics with icons
- CTA button: "订阅此KOL" with gradient

#### Performance Charts
- Line chart: Monthly returns (6 months)
- Bar chart: Win rate by month
- Doughnut chart: Trade distribution
- Using Chart.js with dark theme

---

### 4.5 Pricing Page (订阅计划)

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────┐
│  Navigation                                                 │
├─────────────────────────────────────────────────────────────┤
│  Hero Section                                               │
│  - Title: "选择您的会员计划"                                │
│  - Subtitle with guarantee text                             │
├─────────────────────────────────────────────────────────────┤
│  Pricing Cards                                              │
│  - 3 tier cards with feature comparison                     │
│  - Monthly/Yearly toggle                                    │
├─────────────────────────────────────────────────────────────┤
│  Feature Comparison Table                                   │
│  - Detailed feature breakdown                               │
├─────────────────────────────────────────────────────────────┤
│  FAQ Section                                                │
│  - Common pricing questions                                 │
├─────────────────────────────────────────────────────────────┤
│  CTA Section                                                │
│  - Final call to action                                     │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                     │
└─────────────────────────────────────────────────────────────┘
```

#### Pricing Tiers

| Feature | 月度会员 | 季度会员 | 年度会员 |
|---------|----------|----------|----------|
| Price | ¥299/月 | ¥799/季 | ¥2499/年 |
| Savings | - | 11% | 30% |
| Badge | - | 热门 | 最佳价值 |
| All KOL Signals | ✓ | ✓ | ✓ |
| AI Monitoring | ✓ | ✓ | ✓ |
| Strategy Copy | ✓ | ✓ | ✓ |
| VIP Community | ✓ | ✓ | ✓ |
| Priority Support | - | ✓ | ✓ |
| 1-on-1 Consultation | - | - | ✓ |
| Custom Alerts | - | - | ✓ |

#### Card Design
- Glassmorphism background
- Gradient border (intensity by tier)
- "热门" and "最佳价值" badges with pulse animation
- Feature list with checkmarks
- CTA button with hover glow

---

### 4.6 FAQ Page (常见问题)

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────┐
│  Navigation                                                 │
├─────────────────────────────────────────────────────────────┤
│  Hero Section                                               │
│  - Title: "常见问题解答"                                    │
│  - Search bar                                               │
├─────────────────────────────────────────────────────────────┤
│  Category Tabs                                              │
│  - Filter by category                                       │
├─────────────────────────────────────────────────────────────┤
│  FAQ Accordion                                              │
│  - Expandable Q&A items                                     │
├─────────────────────────────────────────────────────────────┤
│  Contact CTA                                                │
│  - Still have questions?                                    │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                     │
└─────────────────────────────────────────────────────────────┘
```

#### FAQ Categories
1. 入门指南 (Getting Started)
2. 订阅与付款 (Subscription & Payment)
3. 信号与跟单 (Signals & Copy Trading)
4. 技术支持 (Technical Support)
5. 账户安全 (Account Security)

#### Accordion Design
- Question: 1.1rem, medium weight
- Answer: 1rem, secondary color
- Expand/collapse icon: Chevron with rotation animation
- Active state: Glow border

---

### 4.7 News Page (最新动态)

#### Layout Structure
```
┌─────────────────────────────────────────────────────────────┐
│  Navigation                                                 │
├─────────────────────────────────────────────────────────────┤
│  Hero Section                                               │
│  - Title: "最新动态"                                        │
│  - Filter by category                                       │
├─────────────────────────────────────────────────────────────┤
│  News Grid                                                  │
│  - Article cards in masonry/grid layout                     │
│  - Pagination or infinite scroll                            │
├─────────────────────────────────────────────────────────────┤
│  Newsletter CTA                                             │
│  - Subscribe to updates                                     │
├─────────────────────────────────────────────────────────────┤
│  Footer                                                     │
└─────────────────────────────────────────────────────────────┘
```

#### Article Card Design
- Thumbnail image (16:9)
- Category badge
- Title (2 lines max)
- Excerpt (3 lines)
- Date and read time
- Hover: Image zoom + card lift

#### Categories
- 平台更新 (Platform Updates)
- 市场分析 (Market Analysis)
- KOL动态 (KOL Updates)
- 活动公告 (Event Announcements)

---

## 5. Technical Requirements

### 5.1 CDN Libraries

```html
<!-- Tailwind CSS v4 -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>

<!-- Three.js for 3D effects -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- GSAP for animations -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Chart.js for data visualization -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+SC:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

### 5.2 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 5.3 Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### 5.4 Responsive Breakpoints
| Breakpoint | Width | Target |
|------------|-------|--------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

---

## 6. Image Requirements

### 6.1 Hero Background
- **Purpose**: Particle starfield background (generated via canvas)
- **Type**: Canvas animation
- **Notes**: Custom particle system, no image needed

### 6.2 Hero Illustration
- **Purpose**: Floating crypto icons decoration
- **Search Keywords**: "cryptocurrency 3D icons floating bitcoin ethereum neon glow dark background isometric"
- **Type**: PNG with transparency or SVG
- **Style**: 3D isometric, neon glow

### 6.3 About Page Illustration
- **Purpose**: Mission/vision section illustration
- **Search Keywords**: "blockchain network connected nodes glowing futuristic technology abstract digital illustration dark blue purple gradient"
- **Type**: SVG or PNG
- **Style**: Abstract tech, connected nodes

### 6.4 Team Avatars
- **Purpose**: Team member photos
- **Search Keywords**: "professional headshot portrait business person asian tech startup neutral background"
- **Type**: JPG
- **Style**: Professional, neutral background

### 6.5 KOL Avatars
- **Purpose**: KOL profile pictures
- **Search Keywords**: "crypto trader avatar profile picture abstract geometric neon colors blockchain identity"
- **Type**: PNG
- **Style**: Abstract geometric, neon accents
- **Count**: 60+ unique avatars needed

### 6.6 News Thumbnails
- **Purpose**: Article featured images
- **Search Keywords**: "cryptocurrency trading chart analysis dark theme blue purple neon stock market technical analysis"
- **Type**: JPG
- **Style**: Dark theme, charts, neon accents

### 6.7 Service Icons
- **Purpose**: Service section icons
- **Type**: Lucide icons (no images needed)
- **Icons**: target, magnet, bar-chart-3

### 6.8 Social Icons
- **Purpose**: Social media links
- **Type**: Lucide icons
- **Icons**: twitter, send (telegram), message-circle (discord)

---

## 7. Navigation Structure

### 7.1 Main Navigation

| Label | Link | Position | Icon | Active State |
|-------|------|----------|------|--------------|
| 首页 | /index.html | left | home | underline + glow |
| 关于我们 | /about.html | left | users | underline + glow |
| KOL列表 | /kols.html | left | star | underline + glow |
| 订阅计划 | /pricing.html | left | crown | underline + glow |
| 常见问题 | /faq.html | left | help-circle | underline + glow |
| 最新动态 | /news.html | left | newspaper | underline + glow |

### 7.2 Social Links (Header)
| Platform | Link | Icon |
|----------|------|------|
| Twitter/X | https://x.com/XCSQbtc | twitter |
| Telegram | https://t.me/xcsqme | send |

### 7.3 Footer Navigation

**Quick Links**
- 首页
- 关于我们
- KOL列表
- 订阅计划

**Support**
- 常见问题
- 联系我们
- 服务条款
- 隐私政策

**Community**
- Twitter/X
- Telegram
- Discord

### 7.4 Mobile Navigation
- Hamburger menu icon
- Full-screen overlay
- Vertical list with icons
- Slide-in animation from right

---

## 8. Component Library

### 8.1 Buttons

**Primary Button**
```css
background: linear-gradient(135deg, #00d4ff 0%, #a855f7 100%);
color: white;
padding: 0.875rem 2rem;
border-radius: 0.5rem;
font-weight: 600;
transition: all 0.3s ease;
box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
/* Hover: brightness(1.1), box-shadow intensify */
```

**Secondary Button**
```css
background: transparent;
border: 1px solid rgba(0, 212, 255, 0.5);
color: #00d4ff;
padding: 0.875rem 2rem;
border-radius: 0.5rem;
font-weight: 600;
/* Hover: background rgba(0, 212, 255, 0.1) */
```

**Ghost Button**
```css
background: transparent;
color: white;
padding: 0.5rem 1rem;
/* Hover: text color #00d4ff */
```

### 8.2 Cards

**Glass Card**
```css
background: rgba(18, 18, 26, 0.7);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 1rem;
padding: 1.5rem;
/* Hover: border-color rgba(0, 212, 255, 0.3), transform translateY(-4px) */
```

**Feature Card**
```css
/* Extends Glass Card */
border-left: 3px solid #00d4ff;
/* Icon: 48px, gradient background */
```

**Pricing Card**
```css
/* Extends Glass Card */
border: 2px solid transparent;
background-clip: padding-box;
position: relative;
/* Featured: border-image: linear-gradient(...) */
```

### 8.3 Badges

**Category Badge**
```css
padding: 0.25rem 0.75rem;
border-radius: 9999px;
font-size: 0.75rem;
font-weight: 500;
/* Colors vary by category */
```

**Status Badge**
```css
/* Online: green dot + pulse animation */
/* Premium: gold gradient */
/* New: pink with glow */
```

### 8.4 Form Elements

**Input Field**
```css
background: rgba(18, 18, 26, 0.8);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 0.5rem;
padding: 0.75rem 1rem;
color: white;
/* Focus: border-color #00d4ff, box-shadow glow */
```

**Search Input**
```css
/* Extends Input Field */
padding-left: 2.5rem;
/* Search icon: absolute left */
```

---

## 9. Micro-interactions

### 9.1 Hover States
| Element | Effect | Duration |
|---------|--------|----------|
| Buttons | Brightness + shadow | 200ms |
| Cards | Lift + border glow | 300ms |
| Links | Color shift + underline | 150ms |
| Icons | Scale + color | 200ms |
| Avatars | Ring glow | 300ms |

### 9.2 Focus States
- Outline: 2px solid #00d4ff
- Outline-offset: 2px
- Box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.2)

### 9.3 Loading States
- Skeleton screens with shimmer animation
- Spinner: Rotating gradient circle
- Progress bar: Animated gradient

### 9.4 Scroll Behaviors
- Smooth scroll: scroll-behavior: smooth
- Scroll-to-top button: Appears after 300px scroll
- Parallax: Background elements move at 0.5x speed

---

## 10. Accessibility

### 10.1 Color Contrast
- All text meets WCAG AA (4.5:1 for normal, 3:1 for large)
- Interactive elements have visible focus states

### 10.2 Keyboard Navigation
- All interactive elements keyboard accessible
- Tab order follows visual order
- Skip link for main content

### 10.3 Screen Readers
- Semantic HTML structure
- ARIA labels for icons and interactive elements
- Alt text for images

### 10.4 Motion Preferences
- Respect prefers-reduced-motion
- Disable particle animations for reduced motion
- Provide static alternatives

---

## 11. KOL Data Structure

### 11.1 KOL Categories

**华语二级市场现货合约 (27 KOLs)**
1. Alertの会所 - 擅长山寨主流币美股，11月初MMT爆赚16万刀
2. Ye.koi - 目前华语二级顶流
3. 风寻 - 新币投研王者
4. 颜驰 - 天花版顶级交易员
5. 提阿非罗 - 台湾博主，社群优质内容很多
6. 比特币飞扬 - 擅长主流币，连盈记录高
7. 比特币陈哥 - 擅长主流币，分析市场行情透彻，策略简单易懂
8. 比特币峰哥 - 可能是油管上华语人气最高的博主了
9. 大镖客 - 9月份社区内投票选出的优质博主
10. 蛋糕爸爸 - 群友反馈打法稳健
11. 必到哥 - 新加坡KOL,大陆知名度不高
12. 币圈所长 - 神级刀交易员
13. 比特币军长 - 少见的会露脸的油管华语区博主
14. 加密大漂亮 - 擅长使用波浪理论
15. LILI王-MIA - 多位优秀交易员
16. Shu-Crypto - 擅长主流币，工会优秀交易员汇聚
17. 三马哥 - 主要为中长线波段交易
18. 舒琴 - 高胜率博主
19. 逍遥xtony - 会员群3000人，会员费赚麻
20. 洪七公 - 擅长主流币
21. 黄有梁 - 涵盖交易策略及期权，期权交易者
22. 打不死的交易员 - 擅长主流币及山寨
23. 帕尔-无极 - 擅长斐波那契战法
24. 币圈Kama - 社区内多位老师，花一份钱享受多种服务
25. 加密密克 - 主要擅长主流币
26. 诗魂 - 台湾KOL,每天会在油管发布行情分析视频
27. 三木交易员 - 币安广场博主，平时主做主流币

**国外二级市场现货合约 (15 KOLs)**
1. WWG交易员频道 - 国外知名交易员社区，多位明星交易员
2. Vivian交易团队 - T1+T2频道
3. Jayson Casper
4. Trading Arena斗兽场
5. Unity Academy
6. ChartChampions
7. The Lab - 精选国外现货/合约博主
8. Illusion X社区
9. Chroma社区
10. The Haven社区
11-15. 其他知名KOL及社区

**一级链上 (8 KOLs)**
1. 0xsun - 江湖人称链上皇
2. James - 冲狗大佬狠哥
3. 头部玩家 - 两个币圈共创社区，人人都可以在内发布内容交流
4. P总 - 撸毛界知名人物
5. 万岁 - 近期火热的土狗社区
6. 1000X GEM Crypto D - 一级链上目前最强大，人数最多的社区
7. 链智监控信号 - 包含10余个监控信号，社区AI总结
8. 清水哥 - 铭文与符文大师

**辅助性功能频道 (8 Channels)**
1. 星辰AI监控 - 市场、清算、RSI、资金、PUMP、推特、新闻
2. 吴说区块链
3. 华尔街见闻
4. 凉兮大元帅
5. 柳玉东波浪理论
6. 反指组
7. 大盘行情速递 - 了解最新币圈咨询
8. 博主胜率统计频道 - 对博主的订单进行跟踪，统计并公开

**最新AI资讯 (4 Features)**
1. 策略监控 - 各KOL策略库、实时持仓情况、盈利统计排名
2. 反指系统 - KOL自动跟单、AI量化、deepseek、QwenAI策略
3. AI-PHA - ALPHA空投提醒、稳定币监控、平台活动任务分析
4. 会员学习专区 - 博主内部学习资料及币圈知识付费内容

---

*End of Design Specification*
