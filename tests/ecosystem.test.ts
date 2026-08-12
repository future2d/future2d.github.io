import { describe, expect, it } from 'vitest'
import { categoryOrder, ecosystemEntries, getEntrySummary } from '../docs/.vitepress/theme/data/ecosystem'
import { getLocalizedPath } from '../docs/.vitepress/theme/data/locale'

describe('ecosystem catalogue', () => {
  it('keeps unique ids and bilingual descriptions for every entry', () => {
    expect(new Set(ecosystemEntries.map((entry) => entry.id)).size).toBe(ecosystemEntries.length)
    for (const entry of ecosystemEntries) {
      expect(categoryOrder).toContain(entry.category)
      expect(getEntrySummary(entry, 'en').trim()).not.toBe('')
      expect(getEntrySummary(entry, 'zh').trim()).not.toBe('')
      expect(entry.upstreamUrl ?? entry.future2dUrl).toMatch(/^https:\/\//)
    }
  })

  it('preserves default and Chinese internal paths', () => {
    expect(getLocalizedPath('/ecosystem/', 'en')).toBe('/ecosystem/')
    expect(getLocalizedPath('/ecosystem/', 'zh')).toBe('/zh/ecosystem/')
    expect(getLocalizedPath('/zh/docs/', 'en')).toBe('/docs/')
  })
})
