import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
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

  it('keeps every first-release documentation page substantive and mirrored in Chinese', () => {
    const routes = ['introduction', 'concepts', 'compatibility']
    const directoryRoutes = ['specification/index', 'guides/index']
    for (const route of routes) {
      const english = readFileSync(resolve(`docs/docs/${route}.md`), 'utf8')
      const chinese = readFileSync(resolve(`docs/zh/docs/${route}.md`), 'utf8')
      expect(english.length).toBeGreaterThan(900)
      expect(chinese.length).toBeGreaterThan(500)
      expect(chinese).not.toContain('TODO')
    }
    for (const route of directoryRoutes) {
      const english = readFileSync(resolve(`docs/docs/${route}.md`), 'utf8')
      const chinese = readFileSync(resolve(`docs/zh/docs/${route}.md`), 'utf8')
      expect(english.length).toBeGreaterThan(750)
      expect(chinese.length).toBeGreaterThan(450)
      expect(chinese).not.toContain('TODO')
    }
  })
})
