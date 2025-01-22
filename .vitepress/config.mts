import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DataGrids",
  description: "DataGrids for Laravel",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'How it Works', link: '/how-it-works' },
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Normalizers', link: '/normalizers' },
          { text: 'Filter Operations', link: '/filter-operations' },
          { text: 'Filter Inputs', link: '/filter-inputs' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
