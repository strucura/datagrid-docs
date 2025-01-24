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
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Quick Start', link: '/getting-started/quick-start' },
          { text: 'How it Works', link: '/getting-started/how-it-works' },
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Authorization', link: '/concepts/authorization' },
          { text: 'Columns', link: '/concepts/columns' },
          { text: 'Normalizers', link: '/concepts/normalizers' },
          { text: 'Filter Operations', link: '/concepts/filter-operations' },
          { text: 'Filter Inputs', link: '/concepts/filter-inputs' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/strucura/datagrids' }
    ]
  }
})
