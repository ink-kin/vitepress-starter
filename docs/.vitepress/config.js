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
        text: 'github it',
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
        { text: 'Маркетинг/Реклама', link: '/pip/marketing' },
        { text: 'Кадры/Таланты', link: '/pip/people' },
        { text: 'Бух. и Финансы', link: '/pip/buh' },
        {
          text: 'Инноваци',
          link: '/pip/innovate'
        }
      ]
    },
    {
      text: 'Блог',
      children: [
        { text: 'Маркетинг/Реклама', link: '/blog/marketing' },
        { text: 'images resize', link: '/blog/paketnoe-izmenenie-izobrazhenij' },
        { text: 'Маркетинг/Реклама', link: '/blog/xmlstar' },
{ text: 'Маркетинг/Реклама', link: '/blog/why-vuejs-need' },
{ text: 'Маркетинг/Реклама', link: '/blog/what-is-kubernetes' },
{ text: 'Маркетинг/Реклама', link: '/blog/web-servers' },
{ text: 'Маркетинг/Реклама', link: '/blog/vybirayem-generator-staticheskikh-saytov' },
{ text: 'Маркетинг/Реклама', link: '/blog/vidy-elektronnoy-podpisi' },
{ text: 'Маркетинг/Реклама', link: '/blog/uml' },
{ text: 'Маркетинг/Реклама', link: '/blog/top-issue-support-and-bug-tracking-tools' },
{ text: 'Маркетинг/Реклама', link: '/blog/top-9-mongodb-tools' },
{ text: 'Маркетинг/Реклама', link: '/blog/todone' },
{ text: 'Маркетинг/Реклама', link: '/blog/todo' },
{ text: 'Маркетинг/Реклама', link: '/blog/time' },
{ text: 'Маркетинг/Реклама', link: '/blog/thinkbayes' },
{ text: 'Маркетинг/Реклама', link: '/blog/The-Field-Guide-to-Data-Science' },
{ text: 'Маркетинг/Реклама', link: '/blog/strugackiy_arkadiy-za_milliard_let_do_konca_sveta' },
{ text: 'Маркетинг/Реклама', link: '/blog/store' },
{ text: 'Маркетинг/Реклама', link: '/blog/StatLearnSparsity' },
{ text: 'Маркетинг/Реклама', link: '/blog/sqlite' },
{ text: 'Маркетинг/Реклама', link: '/blog/shtat' },
{ text: 'Маркетинг/Реклама', link: '/blog/shaping_the_fourth_industrial_revolution' },
{ text: 'Маркетинг/Реклама', link: '/blog/shalyapin_maska-i-dusha' },
{ text: 'Маркетинг/Реклама', link: '/blog/service' },
{ text: 'Маркетинг/Реклама', link: '/blog/scenic_speech' },
{ text: 'Маркетинг/Реклама', link: '/blog/pyton-tools' },
{ text: 'Маркетинг/Реклама', link: '/blog/privacy-policy' },
{ text: 'Маркетинг/Реклама', link: '/blog/philosophy' },
{ text: 'Маркетинг/Реклама', link: '/blog/osnovy_matematicheskogo_modelirovaniya' },
{ text: 'Маркетинг/Реклама', link: '/blog/o-nakonets-nastal-tot-chas' },
{ text: 'Маркетинг/Реклама', link: '/blog/obama_budget_proposal_2012' },
{ text: 'Маркетинг/Реклама', link: '/blog/NY2020' },
{ text: 'Маркетинг/Реклама', link: '/blog/NanoBlogger' },
{ text: 'Маркетинг/Реклама', link: '/blog/mvp' },
{ text: 'Маркетинг/Реклама', link: '/blog/mongodb_7_competitive_advantages' },
{ text: 'Маркетинг/Реклама', link: '/blog/methods-of-optimal-solutions' },
{ text: 'Маркетинг/Реклама', link: '/blog/man-joe' },
{ text: 'Маркетинг/Реклама', link: '/blog/luchshih-distributivov-linux-dlia-usilennoi-konfidencialnosti-i-bezopasnosti' },
{ text: 'Маркетинг/Реклама', link: '/blog/linux-rmlint' },
{ text: 'Маркетинг/Реклама', link: '/blog/linux-git-todo-civilization' },
{ text: 'Маркетинг/Реклама', link: '/blog/linux-command-basics-7-commands-process-management' },
{ text: 'Маркетинг/Реклама', link: '/blog/linux' },
{ text: 'Маркетинг/Реклама', link: '/blog/lessons' },
{ text: 'Маркетинг/Реклама', link: '/blog/kotler_f_marketing_ot_a_do_ya_80_k' },
{ text: 'Маркетинг/Реклама', link: '/blog/jupyter' },
{ text: 'Маркетинг/Реклама', link: '/blog/jamstack' },
{ text: 'Маркетинг/Реклама', link: '/blog/intellectual-values' },
{ text: 'Маркетинг/Реклама', link: '/blog/How-Do-Engineering-Scientists-Think' },
{ text: 'Маркетинг/Реклама', link: '/blog/gost-34-comments' },
{ text: 'Маркетинг/Реклама', link: '/blog/gost-34' },
{ text: 'Маркетинг/Реклама', link: '/blog/git-backuper' },
{ text: 'Маркетинг/Реклама', link: '/blog/do-five-things' },
{ text: 'Маркетинг/Реклама', link: '/blog/data-analist' },
{ text: 'Маркетинг/Реклама', link: '/blog/convert_--help' },
{ text: 'Маркетинг/Реклама', link: '/blog/cli-joe-s-own-editor' },
{ text: 'Маркетинг/Реклама', link: '/blog/clamav' },
{ text: 'Маркетинг/Реклама', link: '/blog/chrome_answer' },
{ text: 'Маркетинг/Реклама', link: '/blog/chetvertaya_promyshlennaya_revolyuciya_2016' },
{ text: 'Маркетинг/Реклама', link: '/blog/chetvertaya_promyshlennaya_revolyuciya' },
{ text: 'Маркетинг/Реклама', link: '/blog/business-analysis' },
{ text: 'Маркетинг/Реклама', link: '/blog/brd-mrd-prd-fsd-psd-srs' },
{ text: 'Маркетинг/Реклама', link: '/blog/bpm_soft' },
{ text: 'Маркетинг/Реклама', link: '/blog/bpm_book_cbok' },
{ text: 'Маркетинг/Реклама', link: '/blog/bomb' },
{ text: 'Маркетинг/Реклама', link: '/blog/BlueSpice_XWiki' },
{ text: 'Маркетинг/Реклама', link: '/blog/best-practices' },
{ text: 'Маркетинг/Реклама', link: '/blog/babok' },
{ text: 'Маркетинг/Реклама', link: '/blog/avoid-burnout-live-happy' },
{ text: 'Маркетинг/Реклама', link: '/blog/asciinema' },
{ text: 'Маркетинг/Реклама', link: '/blog/arhivatsiya-v-linux-tar' },
{ text: 'Маркетинг/Реклама', link: '/blog/archi_modelling_tool' },
{ text: 'Маркетинг/Реклама', link: '/blog/archimate_courseware' },
{ text: 'Маркетинг/Реклама', link: '/blog/analist-todo' },
{ text: 'Маркетинг/Реклама', link: '/blog/analist' },
{ text: 'Маркетинг/Реклама', link: '/blog/Anaconda-SODS-Report-2020-Final' },
{ text: 'Маркетинг/Реклама', link: '/blog/america-smm' },
{ text: 'Маркетинг/Реклама', link: '/blog/agile' },
{ text: 'Маркетинг/Реклама', link: '/blog/about_my_edi' },
{ text: 'Маркетинг/Реклама', link: '/blog/about' },
{ text: 'Маркетинг/Реклама', link: '/blog/22857009' },
{ text: 'Маркетинг/Реклама', link: '/blog/7459819' },
{ text: 'Маркетинг/Реклама', link: '/blog/6158845' },
{ text: 'Маркетинг/Реклама', link: '/blog/5814905' },
{ text: 'Маркетинг/Реклама', link: '/blog/2063485' },
{ text: 'Маркетинг/Реклама', link: '/blog/2020-11-11-prodvizheniye-intellektualnoy-sobstvennosti' },
{ text: 'Маркетинг/Реклама', link: '/blog/2020-11-11-introdiction' },
{ text: 'Маркетинг/Реклама', link: '/blog/12-best-charting-libraries-for-web-developers' },
      ]
    },
    {
      text: 'Книги',
      children: [
        { text: 'Книги', link: '/books/marketing' },
        { text: 'Книги', link: '/books/people' }
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
