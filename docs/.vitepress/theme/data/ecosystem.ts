import type { SiteLocale } from './locale'

export type EcosystemCategory = 'format' | 'runtime' | 'tool' | 'research'
export type EcosystemStatus = 'reference' | 'research' | 'compatibility' | 'prototype'

export type EcosystemEntry = {
  id: string
  category: EcosystemCategory
  name: string
  status: EcosystemStatus
  summary: Record<SiteLocale, string>
  upstreamUrl?: string
  future2dUrl?: string
}

export const categoryOrder: EcosystemCategory[] = ['format', 'runtime', 'tool', 'research']

export const ecosystemEntries: EcosystemEntry[] = [
  {
    id: 'spine-runtimes', category: 'format', name: 'Spine Runtimes', status: 'reference',
    summary: { en: '2D skeletal animation runtimes catalogued as a format and runtime reference.', zh: '2D 骨骼动画运行时，作为格式与运行时参考进行整理。' },
    upstreamUrl: 'https://github.com/EsotericSoftware/spine-runtimes', future2dUrl: 'https://github.com/future2d/spine-runtimes',
  },
  {
    id: 'purism-core', category: 'runtime', name: 'PurismCore', status: 'compatibility',
    summary: { en: 'An open Live2D-compatible runtime for loading MOC3 files, used for compatibility exploration.', zh: '用于加载 MOC3 文件的开源 Live2D 兼容运行时，用于兼容性探索。' },
    upstreamUrl: 'https://github.com/avahci/PurismCore', future2dUrl: 'https://github.com/future2d/PurismCore',
  },
  {
    id: 'dragonbones-csharp', category: 'runtime', name: 'DragonBones C# Runtime', status: 'reference',
    summary: { en: 'A DragonBones C# runtime retained as a reference for skeletal animation interchange.', zh: 'DragonBones C# 运行时，作为骨骼动画交换的参考实现保留。' },
    upstreamUrl: 'https://github.com/DragonBones/DragonBonesCSharp', future2dUrl: 'https://github.com/future2d/DragonBonesCSharp',
  },
  {
    id: 'umamo', category: 'tool', name: 'Umamo', status: 'reference',
    summary: { en: 'A cross-platform rigging editor for 2D puppet animation and a useful authoring workflow reference.', zh: '跨平台 2D 木偶动画绑定编辑器，是创作工作流的重要参考。' },
    upstreamUrl: 'https://github.com/Yukariin/Umamo', future2dUrl: 'https://github.com/future2d/umamo',
  },
  {
    id: 'ayagami', category: 'runtime', name: 'Ayagami', status: 'compatibility',
    summary: { en: 'A 2D puppet model renderer compatible with Live2D, included for runtime interoperability research.', zh: '兼容 Live2D 的 2D 木偶模型渲染器，用于运行时互操作研究。' },
    upstreamUrl: 'https://github.com/OpalAyagami/ayagami', future2dUrl: 'https://github.com/future2d/ayagami',
  },
  {
    id: 'mocari', category: 'research', name: 'Mocari', status: 'prototype',
    summary: { en: 'A pure Rust Live2D/Cubism runtime experiment that informs implementation boundaries.', zh: '纯 Rust 的 Live2D/Cubism 运行时实验，用于理解实现边界。' },
    upstreamUrl: 'https://github.com/Ohmwada/mocari', future2dUrl: 'https://github.com/future2d/Mocari',
  },
  {
    id: 'open-vt', category: 'tool', name: 'Open VT', status: 'research',
    summary: { en: 'Open-source 2D VTuber software included as a real application pipeline reference.', zh: '开源 2D 虚拟主播软件，作为真实应用管线参考。' },
    upstreamUrl: 'https://github.com/ArpaAP/open-vt', future2dUrl: 'https://github.com/future2d/open-vt',
  },
]

export function getEntrySummary(entry: EcosystemEntry, locale: SiteLocale): string {
  return entry.summary[locale]
}
