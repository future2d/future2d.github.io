import { defineConfig } from 'vitepress'
import { markdown as zhMarkdown } from '../zh/config.ts'

const docsSidebar = [
  {
    text: 'Documentation',
    items: [
      { text: 'Documentation overview', link: '/docs/' },
      { text: 'Introduction', link: '/docs/introduction' },
      { text: 'Core concepts', link: '/docs/concepts' },
      { text: 'Specification drafts', link: '/docs/specification/' },
      { text: 'Integration guides', link: '/docs/guides/' },
      { text: 'Compatibility', link: '/docs/compatibility' },
    ],
  },
]

const ecosystemSidebar = [
  {
    text: 'Ecosystem',
    items: [{ text: 'Ecosystem overview', link: '/ecosystem/' }],
  },
  {
    text: 'Skeletal animation',
    items: [
      { text: 'spine-runtimes', link: '/ecosystem/spine-runtimes/' },
      { text: 'DragonBonesCSharp', link: '/ecosystem/DragonBonesCSharp/' },
    ],
  },
  {
    text: 'Live2D and puppet runtimes',
    items: [
      { text: 'PurismCore', link: '/ecosystem/PurismCore/' },
      { text: 'ayagami', link: '/ecosystem/ayagami/' },
      { text: 'Mocari', link: '/ecosystem/Mocari/' },
    ],
  },
  {
    text: 'Authoring tools',
    items: [
      { text: 'umamo', link: '/ecosystem/umamo/' },
      { text: 'pencil2d', link: '/ecosystem/pencil2d/' },
      { text: 'synfig', link: '/ecosystem/synfig/' },
    ],
  },
  {
    text: 'Virtual-avatar applications',
    items: [
      { text: 'open-vt', link: '/ecosystem/open-vt/' },
      { text: 'Motara', link: '/ecosystem/Motara/' },
      { text: 'EasyVtuber', link: '/ecosystem/EasyVtuber/' },
    ],
  },
]

const roadmapSidebar = [
  {
    text: 'Roadmap',
    items: [{ text: 'Roadmap overview', link: '/roadmap/' }],
  },
]

const communitySidebar = [
  {
    text: 'Community',
    items: [{ text: 'Community overview', link: '/community/' }],
  },
]

export default defineConfig({
  title: 'Future2D',
  description: 'An open standard initiative for next-generation 2D models.',
  base: '/',
  cleanUrls: true,
  appearance: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0f332c' }],
    ['meta', { name: 'description', content: 'An open standard initiative for next-generation 2D models.' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Ecosystem', link: '/ecosystem/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Roadmap', link: '/roadmap/' },
      { text: 'Community', link: '/community/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/future2d' }],
    editLink: {
      pattern: 'https://github.com/future2d/future2d.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    outline: [2, 3],
    search: {
      provider: 'local',
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      dir: 'ltr',
      themeConfig: {
        sidebar: {
          '/ecosystem/': ecosystemSidebar,
          '/docs/': docsSidebar,
          '/roadmap/': roadmapSidebar,
          '/community/': communitySidebar,
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-Hans',
      dir: 'ltr',
      markdown: zhMarkdown,
    },
  },
})
