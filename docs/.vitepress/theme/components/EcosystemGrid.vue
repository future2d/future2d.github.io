<script setup lang="ts">
import EcosystemCard from './EcosystemCard.vue'
import { categoryOrder, ecosystemEntries, type EcosystemCategory } from '../data/ecosystem'
import type { SiteLocale } from '../data/locale'

const props = withDefaults(defineProps<{ locale: SiteLocale; limit?: number; category?: EcosystemCategory }>(), {
  limit: undefined,
  category: undefined,
})

const categoryLabel: Record<EcosystemCategory, Record<SiteLocale, string>> = {
  format: { en: 'Models & formats', zh: '模型与格式' },
  runtime: { en: 'Runtime & rendering', zh: '运行时与渲染' },
  tool: { en: 'Authoring tools', zh: '创作工具' },
  research: { en: 'Interoperability & research', zh: '互操作与研究' },
}

const entries = props.category
  ? ecosystemEntries.filter((entry) => entry.category === props.category)
  : ecosystemEntries

const visibleEntries = props.limit ? entries.slice(0, props.limit) : entries
</script>

<template>
  <div v-if="!props.category" class="ecosystem-grid__groups">
    <section v-for="category in categoryOrder" :key="category" class="ecosystem-group">
      <div class="section-kicker">{{ categoryLabel[category][props.locale] }}</div>
      <div class="ecosystem-grid">
        <EcosystemCard
          v-for="entry in visibleEntries.filter((item) => item.category === category)"
          :key="entry.id"
          :entry="entry"
          :locale="props.locale"
        />
      </div>
    </section>
  </div>
  <div v-else class="ecosystem-grid">
    <EcosystemCard v-for="entry in visibleEntries" :key="entry.id" :entry="entry" :locale="props.locale" />
    <p v-if="visibleEntries.length === 0" class="empty-state">
      {{ props.locale === 'zh' ? '这个分类暂时还没有条目。' : 'No entries are listed in this category yet.' }}
    </p>
  </div>
</template>
