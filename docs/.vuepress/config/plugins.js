// 插件配置
module.exports = [
  // 本地插件
  // [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#11a8cd', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],

  'vuepress-plugin-baidu-autopush', // 百度自动推送
  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: '在F搜中搜索',
          frontUrl: 'https://fsou.cc/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
      ],
    },
  ],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-medium-zoom',
    {
      delay: 1000,
      options: {
        margin: 24,
        background: '#25272A',
        scrollOffset: 0,
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: 'f204803da805ac1b278e729ca838029f',
    },
  ],
  [
    'vuepress-plugin-comment',
    {
      choosen: 'valine',
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: '#valine-vuepress-comment',
        appId: 'ztvDjGI0wkLNDwrohRWb9Myi-gzGzoHsz',
        appKey: 'JDFwNTENr9D9BypbJk1XrXVk',
        vistor: true,
        path: '<%- frontmatter.commentid || frontmatter.permalink %>'
      }
    }
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
