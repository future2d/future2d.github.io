<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ArrowUpRight, Boxes, BookOpen, GitFork, Layers3, Menu, Moon, MoveRight, Orbit, Ruler, Sun, Waypoints, X } from '@lucide/vue'
import EcosystemGrid from './EcosystemGrid.vue'
import RoadmapTimeline from './RoadmapTimeline.vue'
import { getLocalizedPath, type SiteLocale } from '../data/locale'

const props = defineProps<{ locale: SiteLocale }>()
const isZh = props.locale === 'zh'
const mobileOpen = ref(false)
const isDark = ref(false)

function applyTheme(dark: boolean) {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('future2d-theme', dark ? 'dark' : 'light')
}

function toggleTheme() {
  applyTheme(!isDark.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('future2d-theme')
  applyTheme(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)
})
const copy = isZh
  ? {
      overline: '开放的 2D 模型标准倡议', title: '让 2D 模型拥有共同的语言。', intro: 'Future2D 正在研究一套面向下一代 2D 模型的开放、可验证、可互操作标准。', ecosystem: '浏览生态', docs: '阅读文档', signal: '当前阶段 / 研究与草案', problemLabel: '01 / 为什么需要 Future2D', problemTitle: '工具很多，模型却很难流动。', problemBody: '格式、骨骼、动画、物理、运行时和编辑器各自演进。Future2D 从共同的数据语义和清晰的交换边界开始，把分散的实践整理成可以讨论、实现和验证的公共基础。', mapLabel: '02 / 生态地图', mapTitle: '先理解已有的系统，再定义共同的边界。', mapBody: '我们整理相关格式、运行时、创作工具和互操作研究。它们是参考和实验对象，不等同于已经完成的 Future2D 标准。', workLabel: '03 / 当前工作', workTitle: '把研究变成可以检验的进展。', workItems: ['研究现有模型格式与运行时边界', '记录兼容性实验和转换路径', '逐步形成可评审的规范草案'], roadmapLabel: '04 / 标准路线图', roadmapTitle: '从研究到互操作，逐步推进。', participateLabel: '05 / 参与项目', participateTitle: '标准需要真实的模型、工具与反馈。', participateBody: '查看组织内的仓库，分享兼容性证据，或参与规范讨论。', github: '访问 GitHub 组织', docsLabel: '深入文档', footer: 'Future2D / Open 2D model interoperability', category: '分类浏览' }
  : {
      overline: 'OPEN 2D MODEL STANDARD INITIATIVE', title: 'Give 2D models a common language.', intro: 'Future2D is researching an open, verifiable, interoperable standard for the next generation of 2D models.', ecosystem: 'Explore ecosystem', docs: 'Read the docs', signal: 'Current phase / Research & draft', problemLabel: '01 / WHY FUTURE2D', problemTitle: 'There are many tools. Models still do not travel well.', problemBody: 'Formats, skeletons, animation, physics, runtimes, and editors have evolved in parallel. Future2D starts with shared data semantics and explicit exchange boundaries, turning scattered practice into a public foundation that can be discussed, implemented, and verified.', mapLabel: '02 / ECOSYSTEM MAP', mapTitle: 'Understand existing systems before defining shared boundaries.', mapBody: 'We catalogue relevant formats, runtimes, authoring tools, and interoperability research. They are references and test subjects, not claims of a finished Future2D standard.', workLabel: '03 / CURRENT WORK', workTitle: 'Turn research into testable progress.', workItems: ['Study existing model formats and runtime boundaries', 'Record compatibility experiments and conversion paths', 'Shape reviewable specification drafts over time'], roadmapLabel: '04 / STANDARD ROADMAP', roadmapTitle: 'Move from research to interoperability, one boundary at a time.', participateLabel: '05 / PARTICIPATE', participateTitle: 'Standards need real models, tools, and feedback.', participateBody: 'Browse the organization repositories, share compatibility evidence, or join the specification discussion.', github: 'Visit GitHub organization', docsLabel: 'Go deeper in docs', footer: 'Future2D / Open 2D model interoperability', category: 'BROWSE BY CATEGORY',
    }
</script>

<template>
  <div class="portal-page">
    <header class="portal-header">
      <a class="brand" :href="getLocalizedPath('/', props.locale)" aria-label="Future2D home">
        <span class="brand-mark"><Orbit :size="18" :stroke-width="1.7" aria-hidden="true" /></span>
        <span>Future2D</span>
      </a>
      <nav id="portal-navigation" class="portal-nav" :class="{ 'is-open': mobileOpen }" :aria-label="isZh ? '主导航' : 'Primary navigation'">
        <a :href="getLocalizedPath('/ecosystem/', props.locale)" @click="mobileOpen = false">{{ isZh ? '生态' : 'Ecosystem' }}</a>
        <a :href="getLocalizedPath('/docs/', props.locale)" @click="mobileOpen = false">{{ isZh ? '文档' : 'Docs' }}</a>
        <a :href="getLocalizedPath('/roadmap/', props.locale)" @click="mobileOpen = false">{{ isZh ? '路线图' : 'Roadmap' }}</a>
        <a :href="getLocalizedPath('/community/', props.locale)" @click="mobileOpen = false">{{ isZh ? '社区' : 'Community' }}</a>
      </nav>
      <div class="portal-header__tools">
        <a class="locale-link" :href="getLocalizedPath('/', isZh ? 'en' : 'zh')">{{ isZh ? 'EN' : '中文' }}</a>
        <button class="icon-button" type="button" :aria-label="isZh ? '切换颜色主题' : 'Toggle color theme'" @click="toggleTheme">
          <Sun v-if="isDark" :size="18" :stroke-width="1.7" aria-hidden="true" />
          <Moon v-else :size="18" :stroke-width="1.7" aria-hidden="true" />
        </button>
        <a class="icon-link" href="https://github.com/future2d" target="_blank" rel="noreferrer" aria-label="Future2D on GitHub"><GitFork :size="18" :stroke-width="1.7" /></a>
        <button class="icon-button portal-menu-button" type="button" aria-controls="portal-navigation" :aria-expanded="mobileOpen" :aria-label="mobileOpen ? (isZh ? '关闭导航' : 'Close navigation') : (isZh ? '打开导航' : 'Open navigation')" @click="mobileOpen = !mobileOpen">
          <X v-if="mobileOpen" :size="19" :stroke-width="1.7" aria-hidden="true" />
          <Menu v-else :size="19" :stroke-width="1.7" aria-hidden="true" />
        </button>
      </div>
    </header>

    <main>
      <section class="hero-band portal-section">
        <div class="hero-copy">
          <p class="section-kicker">{{ copy.overline }}</p>
          <h1>{{ copy.title }}</h1>
          <p class="hero-intro">{{ copy.intro }}</p>
          <div class="hero-actions">
            <a class="button button--solid" :href="getLocalizedPath('/ecosystem/', props.locale)">{{ copy.ecosystem }} <MoveRight :size="17" aria-hidden="true" /></a>
            <a class="button button--outline" :href="getLocalizedPath('/docs/', props.locale)">{{ copy.docs }} <BookOpen :size="17" aria-hidden="true" /></a>
          </div>
        </div>
        <div class="hero-diagram" aria-label="Abstract 2D model interoperability diagram" role="img">
          <div class="diagram-axis diagram-axis--x"></div><div class="diagram-axis diagram-axis--y"></div>
          <div class="diagram-node diagram-node--root"><Orbit :size="28" stroke-width="1.3" aria-hidden="true" /></div>
          <div class="diagram-node diagram-node--a"><Layers3 :size="21" stroke-width="1.4" aria-hidden="true" /></div>
          <div class="diagram-node diagram-node--b"><Boxes :size="20" stroke-width="1.4" aria-hidden="true" /></div>
          <div class="diagram-node diagram-node--c"><Waypoints :size="20" stroke-width="1.4" aria-hidden="true" /></div>
          <div class="diagram-line diagram-line--a"></div><div class="diagram-line diagram-line--b"></div><div class="diagram-line diagram-line--c"></div>
          <span class="diagram-label diagram-label--root">model graph</span><span class="diagram-label diagram-label--a">format</span><span class="diagram-label diagram-label--b">runtime</span><span class="diagram-label diagram-label--c">validation</span>
        </div>
      </section>

      <section class="portal-section split-section">
        <div class="section-heading"><p class="section-kicker">{{ copy.problemLabel }}</p><h2>{{ copy.problemTitle }}</h2></div>
        <div class="section-body"><p>{{ copy.problemBody }}</p><div class="signal-line"><Ruler :size="18" aria-hidden="true" /><span>{{ copy.signal }}</span></div></div>
      </section>

      <section class="portal-section ecosystem-preview">
        <div class="section-heading section-heading--wide"><p class="section-kicker">{{ copy.mapLabel }}</p><h2>{{ copy.mapTitle }}</h2><p>{{ copy.mapBody }}</p></div>
        <div class="category-strip"><span>{{ copy.category }}</span><span class="category-strip__rule"></span><a :href="getLocalizedPath('/ecosystem/', props.locale)">{{ isZh ? '查看全部' : 'View all' }} <ArrowUpRight :size="16" aria-hidden="true" /></a></div>
        <EcosystemGrid :locale="props.locale" :limit="4" />
      </section>

      <section class="portal-section work-section">
        <div class="section-heading"><p class="section-kicker">{{ copy.workLabel }}</p><h2>{{ copy.workTitle }}</h2></div>
        <ol class="work-list"><li v-for="(item, index) in copy.workItems" :key="item"><span>0{{ index + 1 }}</span><p>{{ item }}</p></li></ol>
      </section>

      <section class="portal-section roadmap-preview"><div class="section-heading section-heading--wide"><p class="section-kicker">{{ copy.roadmapLabel }}</p><h2>{{ copy.roadmapTitle }}</h2></div><RoadmapTimeline :locale="props.locale" /></section>

      <section class="portal-section participation-section"><div class="participation-copy"><p class="section-kicker">{{ copy.participateLabel }}</p><h2>{{ copy.participateTitle }}</h2><p>{{ copy.participateBody }}</p></div><div class="participation-actions"><a class="button button--solid" href="https://github.com/future2d" target="_blank" rel="noreferrer">{{ copy.github }} <GitFork :size="17" aria-hidden="true" /></a><a class="button button--outline" :href="getLocalizedPath('/docs/', props.locale)">{{ copy.docsLabel }} <ArrowUpRight :size="17" aria-hidden="true" /></a></div></section>
    </main>

    <footer class="portal-footer"><span>{{ copy.footer }}</span><span>2026</span></footer>
  </div>
</template>
