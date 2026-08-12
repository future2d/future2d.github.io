<script setup lang="ts">
import { ExternalLink } from '@lucide/vue'
import type { EcosystemEntry } from '../data/ecosystem'
import type { SiteLocale } from '../data/locale'

const props = defineProps<{ entry: EcosystemEntry; locale: SiteLocale }>()

const statusLabel: Record<EcosystemEntry['status'], Record<SiteLocale, string>> = {
  reference: { en: 'Reference', zh: '参考项目' },
  research: { en: 'Research', zh: '研究中' },
  compatibility: { en: 'Compatibility', zh: '兼容性' },
  prototype: { en: 'Prototype', zh: '原型' },
}

const labels = {
  en: { upstream: 'Upstream', future2d: 'Future2D fork' },
  zh: { upstream: '上游项目', future2d: 'Future2D fork' },
}
</script>

<template>
  <article class="ecosystem-card">
    <div class="ecosystem-card__topline">
      <span class="eyebrow">{{ statusLabel[props.entry.status][props.locale] }}</span>
      <span class="ecosystem-card__index">{{ props.entry.id }}</span>
    </div>
    <h3>{{ props.entry.name }}</h3>
    <p>{{ props.entry.summary[props.locale] }}</p>
    <div class="ecosystem-card__links">
      <a
        v-if="props.entry.upstreamUrl"
        :href="props.entry.upstreamUrl"
        target="_blank"
        rel="noreferrer"
        :aria-label="`${labels[props.locale].upstream}: ${props.entry.name}`"
      >
        {{ labels[props.locale].upstream }}
        <ExternalLink :size="15" :stroke-width="1.8" aria-hidden="true" />
      </a>
      <a
        v-if="props.entry.future2dUrl"
        :href="props.entry.future2dUrl"
        target="_blank"
        rel="noreferrer"
        :aria-label="`${labels[props.locale].future2d}: ${props.entry.name}`"
      >
        {{ labels[props.locale].future2d }}
        <ExternalLink :size="15" :stroke-width="1.8" aria-hidden="true" />
      </a>
    </div>
  </article>
</template>
