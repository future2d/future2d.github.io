import {
  defineAdditionalConfig,
  type DefaultTheme,
  type MarkdownLocaleOptions,
} from 'vitepress'

export const markdown: MarkdownLocaleOptions = {
  container: {
    tipLabel: '提示',
    infoLabel: '信息',
    warningLabel: '警告',
    dangerLabel: '危险',
    detailsLabel: '详细信息',
    noteLabel: '注意',
    importantLabel: '重要',
    cautionLabel: '小心',
  },
  codeCopyButton: {
    tooltipText: '复制代码',
    copiedText: '已复制',
  },
}

const docsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '文档',
    items: [
      { text: '文档总览', link: '/zh/docs/' },
      { text: '介绍', link: '/zh/docs/introduction' },
      { text: '核心概念', link: '/zh/docs/concepts' },
      { text: '规范草案', link: '/zh/docs/specification/' },
      { text: '接入指南', link: '/zh/docs/guides/' },
      { text: '兼容性', link: '/zh/docs/compatibility' },
    ],
  },
]

const ecosystemSidebar: DefaultTheme.SidebarItem[] = [
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

const roadmapSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '路线图',
    items: [{ text: '路线图总览', link: '/zh/roadmap/' }],
  },
]

const communitySidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '社区',
    items: [{ text: '社区总览', link: '/zh/community/' }],
  },
]

function searchOptions(): Partial<DefaultTheme.LocalSearchOptions> {
  return {
    translations: {
      button: {
        buttonText: '搜索',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        displayDetails: '显示详细列表',
        resetButtonTitle: '重置搜索',
        backButtonTitle: '关闭搜索',
        noResultsText: '未找到以下内容的结果：',
        footer: {
          selectText: '选择',
          selectKeyAriaLabel: '回车键',
          navigateText: '导航',
          navigateUpKeyAriaLabel: '向上箭头',
          navigateDownKeyAriaLabel: '向下箭头',
          closeText: '关闭',
          closeKeyAriaLabel: 'Esc 键',
        },
      },
    },
  }
}

export default defineAdditionalConfig({
  description: '面向下一代 2D 模型的开放标准倡议。',

  themeConfig: {
    nav: [
      { text: '生态', link: '/zh/ecosystem/' },
      { text: '文档', link: '/zh/docs/' },
      { text: '路线图', link: '/zh/roadmap/' },
      { text: '社区', link: '/zh/community/' },
    ],
    search: { options: searchOptions() },
    sidebar: {
      '/zh/ecosystem/': ecosystemSidebar,
      '/zh/docs/': docsSidebar,
      '/zh/roadmap/': roadmapSidebar,
      '/zh/community/': communitySidebar,
    },
    editLink: {
      pattern: 'https://github.com/future2d/future2d.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '页面导航',
    },
    lastUpdated: {
      text: '最后更新于',
    },
    notFound: {
      title: '页面未找到',
      quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页',
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
})
