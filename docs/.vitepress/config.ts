import { defineConfig } from 'vitepress'

const docsSidebar = [
  {
    text: 'Documentation',
    items: [
      { text: 'Introduction', link: '/docs/introduction' },
      { text: 'Core concepts', link: '/docs/concepts' },
      { text: 'Specification drafts', link: '/docs/specification/' },
      { text: 'Integration guides', link: '/docs/guides/' },
      { text: 'Compatibility', link: '/docs/compatibility' },
    ],
  },
]

const zhDocsSidebar = [
  {
    text: '文档',
    items: [
      { text: '介绍', link: '/zh/docs/introduction' },
      { text: '核心概念', link: '/zh/docs/concepts' },
      { text: '规范草案', link: '/zh/docs/specification/' },
      { text: '接入指南', link: '/zh/docs/guides/' },
      { text: '兼容性', link: '/zh/docs/compatibility' },
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

const zhEcosystemSidebar = [
  {
    text: '生态',
    items: [{ text: '生态总览', link: '/zh/ecosystem/' }],
  },
  {
    text: '骨骼动画',
    items: [
      { text: 'spine-runtimes', link: '/zh/ecosystem/spine-runtimes/' },
      { text: 'DragonBonesCSharp', link: '/zh/ecosystem/DragonBonesCSharp/' },
    ],
  },
  {
    text: 'Live2D 与木偶运行时',
    items: [
      { text: 'PurismCore', link: '/zh/ecosystem/PurismCore/' },
      { text: 'ayagami', link: '/zh/ecosystem/ayagami/' },
      { text: 'Mocari', link: '/zh/ecosystem/Mocari/' },
    ],
  },
  {
    text: '创作工具',
    items: [
      { text: 'umamo', link: '/zh/ecosystem/umamo/' },
      { text: 'pencil2d', link: '/zh/ecosystem/pencil2d/' },
      { text: 'synfig', link: '/zh/ecosystem/synfig/' },
    ],
  },
  {
    text: '虚拟形象应用',
    items: [
      { text: 'open-vt', link: '/zh/ecosystem/open-vt/' },
      { text: 'Motara', link: '/zh/ecosystem/Motara/' },
      { text: 'EasyVtuber', link: '/zh/ecosystem/EasyVtuber/' },
    ],
  },
]

const zhRoadmapSidebar = [
  {
    text: '路线图',
    items: [{ text: '路线图总览', link: '/zh/roadmap/' }],
  },
]

const zhCommunitySidebar = [
  {
    text: '社区',
    items: [{ text: '社区总览', link: '/zh/community/' }],
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
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清空搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到与以下内容相关的结果：',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '向上箭头',
                  navigateDownKeyAriaLabel: '向下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
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
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '生态', link: '/zh/ecosystem/' },
          { text: '文档', link: '/zh/docs/' },
          { text: '路线图', link: '/zh/roadmap/' },
          { text: '社区', link: '/zh/community/' },
        ],
        editLink: {
          pattern: 'https://github.com/future2d/future2d.github.io/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
        outline: {
          level: [2, 3],
          label: '本页内容',
        },
        sidebar: {
          '/zh/ecosystem/': zhEcosystemSidebar,
          '/zh/docs/': zhDocsSidebar,
          '/zh/roadmap/': zhRoadmapSidebar,
          '/zh/community/': zhCommunitySidebar,
        },
      },
    },
  },
})
