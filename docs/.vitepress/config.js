module.exports = {
  lang: 'ru-RU',
  title: 'ILyaKlishin',
  description: 'Сайт Клишина Ильи Николаевича для открытой информации и лушего Интернета html 5.0',

  themeConfig: {
    repo: 'vuejs/vitepress',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Внести изменение страницы на GitHub',
    lastUpdated: 'Версия от ',

    //algolia: {
      //apiKey: 'c57105e511faa5558547599f120ceeba',
      //indexName: 'vitepress'
    //},

    //carbonAds: {
      //carbon: 'CEBDT27Y',
      //custom: 'CKYD62QM',
      //placement: 'vuejsorg'
    //},

    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/ink-kin/vitepress-starter'
      }
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Введение',
      children: [
        { text: 'Зачем я публикую всё это здесь?', link: '/' },
        { text: 'Кого Я ищу?', link: '/guide/getting-started' },
        { text: 'Что предлагаю', link: '/guide/configuration' },
        { text: 'Вместо резюме', link: '/guide/assets' }
      ]
    },
    {
      text: 'Продвижение Интеллектуальной собственности',
      children: [
        { text: 'Маркетинг/Реклама', link: '/guide/frontmatter' },
        { text: 'Кадры/Таланты', link: '/guide/theming' },
        { text: 'Бух. и Финансы', link: '/guide/api' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/differences-from-vuepress'
        }
      ]
    }
  ]
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }]
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' }
      ]
    }
  ]
}
