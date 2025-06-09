---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 星辰社区 XCSQ
titleTemplate: 全球领先的加密货币信号聚合平台
hero:
  name: "星辰社区"
  text: "利用我们的信号获利"
  tagline: 聚合全球200+顶级KOL，为您的投资决策保驾护航
  image:
    src: https://m2492468.695354.xyz/img/2025/01/20/51opfx.jpg
    alt: 星辰社区
  actions:
    - theme: brand
      text: 开始探索🚀
      link: /listhome/start
    - theme: alt
      text: 加入返佣
      link: /返佣doc/返佣表单

features:
  - icon: 🎯
    title: 智能监控
    details: 7×24小时不间断市场监控，整合宏观经济、行业动态、技术指标等多维度数据。通过AI算法实时分析市场变化，确保您第一时间获取关键信息，把握每一个投资机会。

  - icon: 🧲
    title: 精英策略
    details: 精选全球顶级交易员和分析师，经过严格筛选和长期验证。每位信号源都有详细的历史表现记录，帮助您选择最适合的策略。跟随专业人士的脚步，让投资变得更加简单高效。
  - icon: 🎨
    title: 深度分析
    details: 专业分析团队结合大数据、技术指标、链上数据等多重维度，为您提供深度市场解读。从宏观趋势到微观机会，从技术分析到基本面研究，全方位助力您的投资决策。
---



---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection,
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://m2492468.695354.xyz/img/2025/01/04/t6xih.png',
    name: '梭鱼',
    title: '我从来不知道加密货币市场上存在这样的服务，我对你们的服务非常满意',

  },
   {
    avatar: 'https://m2492468.695354.xyz/img/2025/01/04/t6zbp.jpg',
    name: '0x1985645',
    title: '今天早上已经加入了你们的群组。服务很棒！说实话，我真的很害怕加入群组，因为很多都是骗局！你们不是，谢谢。你们的服务让我很满意！',

  },
   {
    avatar: 'https://m2492468.695354.xyz/img/2025/01/04/t79ul.png',
    name: '发喽密',
    title: '我现在已经订阅了您近 2 年，我只想说继续您的工作。您和您的团队提供了最好的服务。',

  
  },
]

const partners = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ],
  },
  {
    avatar: 'https://www.github.com/kiaking.png',
    name: 'Kia King Ishii',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/kiaking' },
      { icon: 'twitter', link: 'https://twitter.com/KiaKing85' },
    ],
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>客户证言</template>
    <template #lead>
    不要轻信我们的话 – 以下是星辰社区客户的评价
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  
</VPTeamPage>

