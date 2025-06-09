---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 星辰社区
titleTemplate: 加密资产服务生态社区
hero:
  name: "星辰社区"
  text: "利用我们的信号获利"
  tagline: 加入全球 超过200个最佳加密货币 VIP 频道
  image:
    src: https://m2492468.695354.xyz/img/2024/12/31/12o3hp9.svg
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
    title: 数据监控
    details: 7×24 小时不间断地对市场动态进行全方位扫描.无论是因宏观经济政策调整、行业巨头发声，还是技术升级迭代引发，都逃不过敏锐的监控 “触角”，以确保用户能在第一时间掌握行情变化，抓住投资先机

  - icon: 🧲
    title: 策略跟单
    details: 策略跟单为众多投资者开辟了一条通往成功的新路径，只需在我们的平台上，轻松选定经验丰富、战绩斐然的资深交易员作为跟单对象。这些精英交易员凭借多年在加密货币市场摸爬滚打的深厚功底都能精准捕捉
  - icon: 🎨
    title: 市场分析
    details: 在加密货币的浩瀚海洋里，我们网站将凭借专业的分析团队，借助大数据、技术指标等工具，时刻紧盯行情脉搏，为您提供及时、精准的行情解读，助您在投资之路上乘风破浪。
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
    avatar: 'https://m2492468.695354.xyz/img/2025/04/14/1wolhe.jpg',
    name: '孤独恰瑞',
    title: '这社区我可太满意了，我会一直死忠你们',

  },
  {
    avatar: 'https://m2492468.695354.xyz/img/2025/04/14/j2tv69.jpg',
    name: '甜沫儿',
    title: '给我几个姐妹团成员都推荐了，你可要给她们优惠点哦哈哈',

  },
  {
    avatar: 'https://m2492468.695354.xyz/img/2025/04/14/1wozim.jpg',
    name: '歌者',
    title: '天啊，来了社区后才发现之前钱全白花了',

  },
  {
    avatar: 'https://m2492468.695354.xyz/img/2025/01/04/t6xih.png',
    name: '梭鱼',
    title: '我从来不知道加密货币市场上存在这样的服务，我对你们的服务非常满意',

  },
   {
    avatar: 'https://m2492468.695354.xyz/img/2025/01/04/t6zbp.jpg',
    name: '0x1985645',
    title: '已经加入了你们的社区半年了。服务很棒！说实话，起初我真的很害怕是骗局！还好你们不是，谢谢。你们的服务让我很满意！',

  },
   {
    avatar: 'https://m2492468.695354.xyz/img/2025/01/04/t79ul.png',
    name: '发喽密',
    title: '我现在已经订阅了永久会员，您和您的团队提供了最好的服务，希望能继续保持。',

  
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
    还有担忧吗？ – 以下是社区客户的真实评价
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  
</VPTeamPage>

