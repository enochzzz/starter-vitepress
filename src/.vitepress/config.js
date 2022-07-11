export default {
  lang: 'en-US', // en-US  zh-CN
  title: 'pkg-name', 
  description: 'docs for pkg-name.', 
  appearance: true, 
  base: '/base/', 
  ignoreDeadLinks: true, 
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'pkg-name',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/enochzzz' },
    ],
    nav: [
      {
        test: 'guide',
        link: '/guide/',
      },
      {
        text: 'module_a',
        items: [
          { text: 'item a', link: '/a/' },
          { text: 'item b', link: '/b/a' },
        ],
      },
      {
        text: 'module_b',
        items: [
          { text: 'item a', link: '/a/b' },
          { text: 'item b', link: '/b/' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'guide',
        items: [
          { text: 'guide', link: '/guide/' },
        ],
      },
      {
        text: 'module_a',
        items: [
          { text: 'item a', link: '/a/' },
          { text: 'item b', link: '/b/a' },
        ],
      },
      {
        text: 'module_b',
        items: [
          { text: 'item a', link: '/a/b' },
          { text: 'item b', link: '/b/' },
        ],
      },
    ],
    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    head: [
      ['link', { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png' }],
      ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ],
    lastUpdatedText: 'Updated Date',
  },
}
