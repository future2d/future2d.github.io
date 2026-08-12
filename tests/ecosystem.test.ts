import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('site content', () => {
  it('uses VitePress built-in theme and locale navigation', () => {
    const config = readFileSync(resolve('docs/.vitepress/config.ts'), 'utf8')
    const englishHome = readFileSync(resolve('docs/index.md'), 'utf8')
    const chineseHome = readFileSync(resolve('docs/zh/index.md'), 'utf8')

    expect(existsSync(resolve('docs/.vitepress/theme'))).toBe(false)
    expect(config).toContain("label: 'English'")
    expect(config).toContain("label: '简体中文'")
    expect(englishHome).toContain('layout: home')
    expect(chineseHome).toContain('layout: home')
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
