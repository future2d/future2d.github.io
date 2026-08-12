<script setup lang="ts">
import { ArrowRight, Beaker, Cable, FilePenLine, PackageCheck } from '@lucide/vue'
import type { SiteLocale } from '../data/locale'

const props = defineProps<{ locale: SiteLocale }>()

const stages = [
  { id: 'research', icon: Beaker, en: 'Research', zh: '研究', enBody: 'Map existing formats, runtimes, and authoring practices.', zhBody: '梳理现有格式、运行时与创作实践。' },
  { id: 'draft', icon: FilePenLine, en: 'Draft', zh: '草案', enBody: 'Turn shared concepts into precise, reviewable modules.', zhBody: '把共同概念整理为可评审的规范模块。' },
  { id: 'reference', icon: PackageCheck, en: 'Reference implementation', zh: '参考实现', enBody: 'Test the model against real tools and runtime boundaries.', zhBody: '用真实工具与运行时边界验证模型。' },
  { id: 'interoperability', icon: Cable, en: 'Interoperability', zh: '互操作', enBody: 'Make 2D assets portable across the ecosystem.', zhBody: '让 2D 资产可以在生态之间可靠流动。' },
]
</script>

<template>
  <ol class="roadmap-timeline">
    <li v-for="(stage, index) in stages" :key="stage.id" class="roadmap-step">
      <div class="roadmap-step__marker">
        <component :is="stage.icon" :size="18" :stroke-width="1.7" aria-hidden="true" />
      </div>
      <div class="roadmap-step__content">
        <div class="roadmap-step__count">0{{ index + 1 }}</div>
        <h3>{{ stage[props.locale] }}</h3>
        <p>{{ props.locale === 'zh' ? stage.zhBody : stage.enBody }}</p>
      </div>
      <ArrowRight v-if="index < stages.length - 1" class="roadmap-step__arrow" :size="18" :stroke-width="1.7" aria-hidden="true" />
    </li>
  </ol>
</template>
