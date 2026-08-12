import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'
import EcosystemGrid from './components/EcosystemGrid.vue'
import HomePage from './components/HomePage.vue'
import RoadmapTimeline from './components/RoadmapTimeline.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('EcosystemGrid', EcosystemGrid)
    app.component('HomePage', HomePage)
    app.component('RoadmapTimeline', RoadmapTimeline)
  },
} satisfies Theme
