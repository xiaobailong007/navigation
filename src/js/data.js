// 网站数据

var nav = new Vue({
  el: '#navItem',
  data: {
    navItem: [{
        url: '#Design',
        class: 'icon-Design',
        text: '设计资源'
      },
      {
        url: '#Study',
        class: 'icon-Resources',
        text: '学无止境'
      },
      {
        url: '#Software',
        class: 'icon-Resources',
        text: '软件资源'
      },
      {
        url: '#Docs',
        class: 'icon-Documentation',
        text: '参考文档'
      },
      {
        url: '#Development-Community',
        class: 'icon-Community',
        text: '开发社区'
      },
      {
        url: '#exploit',
        class: 'icon-Tool',
        text: '开发工具'
      },
      {
        url: '#Tools',
        class: 'icon-Tool',
        text: '实用工具'
      },
      {
        url: '#Leisure-and-Entertainment',
        class: 'icon-Entertainment',
        text: '文娱休闲'
      },
      {
        url: '#Cloud-Server',
        class: 'icon-Cloud-Server',
        text: '云端服务'
      }
    ]
  }
})


var boxList = new Vue({
  el: '#boxList',
  data: {
    boxList: [{
        name: 'Design',
        class: 'icon-Design',
        text: '设计资源',
        list: [{
            href: 'https://www.58pic.com/',
            src: require('../images/千图网.ico').default,
            name: '千图网',
            text: '设计素材'
          },
          {
            href: 'http://www.51yuansu.com/',
            src: require('../images/觅元素.ico').default,
            name: '觅元素',
            text: '设计素材'
          },
          {
            href: 'https://ibaotu.com/',
            src: require('../images/包图网.ico').default,
            name: '包图网',
            text: '设计素材'
          },
          {
            href: 'http://www.nipic.com/',
            src: require('../images/昵图网.ico').default,
            name: '昵图网',
            text: '设计素材'
          },
          {
            href: 'http://699pic.com/',
            src: require('../images/摄图网.ico').default,
            name: '摄图网',
            text: '设计素材'
          },
          {
            href: 'https://www.6pian.cn/',
            src: require('../images/牛片网.ico').default,
            name: '牛片网',
            text: '短视频素材'
          },
          {
            href: 'https://huaban.com/',
            src: require('../images/花瓣.ico').default,
            name: '花瓣',
            text: '设计灵感'
          },
          {
            href: 'https://cc.oceanengine.com/',
            src: require('../images/巨量创意.png').default,
            name: '巨量创意',
            text: '设计灵感'
          },
          {
            href: 'https://www.pinterest.com/?autologin=true',
            src: require('../images/Pinterest.png').default,
            name: 'Pinterest',
            text: '设计灵感'
          },
          {
            href: 'https://www.instagram.com/explore/',
            src: require('../images/Instagram.ico').default,
            name: 'Instagram',
            text: '设计灵感'
          },
          {
            href: 'https://dribbble.com/',
            src: require('../images/DeviantART.ico').default,
            name: 'DeviantART',
            text: '设计素材'
          },
          {
            href: 'https://www.deviantart.com/',
            src: require('../images/Dribbble.ico').default,
            name: 'Dribbble',
            text: '设计素材'
          },
          {
            href: 'https://store.eqxiu.com/',
            src: require('../images/易企秀.ico').default,
            name: '易企秀',
            text: 'H5模板'
          },
          {
            href: 'https://www.iconfont.cn/',
            src: require('../images/iconfont.ico').default,
            name: 'Iconfont',
            text: '矢量图标'
          },
          {
            href: 'https://www.hellofont.cn/',
            src: require('../images/字由.ico').default,
            name: '字由',
            text: '设计师必备字体利器'
          },
          {
            href: 'https://mp.toutiao.com/profile_v3/xigua',
            src: require('../images/头条.png').default,
            name: '头条号',
            text: '内容推广'
          },
          {
            href: 'https://www.weibo.com/login.php',
            src: require('../images/新浪.ico').default,
            name: '新浪',
            text: '内容推广'
          },
          {
            href: 'https://www.facebook.com/',
            src: require('../images/Facebook.ico').default,
            name: 'Facebook',
            text: '外国社交'
          },
          {
            href: 'https://twitter.com/home',
            src: require('../images/Twitter.ico').default,
            name: 'Twitter',
            text: '外国社交'
          }
        ]
      },
      {
        name: 'Study',
        class: 'icon-Learn',
        text: '学无止境',
        list: [{
            href: 'https://huke88.com/',
            src: require('../images/虎克网.png').default,
            name: '虎克网',
            text: '设计学习网站'
          },
          {
            href: 'https://shida66.com/',
            src: require('../images/视达网.ico').default,
            name: '视达网',
            text: '设计学习网站'
          },
          {
            href: 'https://www.zcool.com.cn/',
            src: require('../images/站酷网.ico').default,
            name: '站酷网',
            text: '设计学习网站'
          },
          {
            href: 'https://www.51zxw.net/',
            src: require('../images/我要自学网.ico').default,
            name: '我要自学网',
            text: '设计学习网站'
          },
          {
            href: 'https://study.163.com/',
            src: require('../images/网易云课堂.ico').default,
            name: '网易云课堂',
            text: '程序员学习网站'
          },
          {
            href: 'https://www.imooc.com/',
            src: require('../images/慕课网.ico').default,
            name: '慕课网',
            text: '程序员学习网站'
          },
          {
            href: 'https://next.xuetangx.com/',
            src: require('../images/学堂在线.ico').default,
            name: '学堂在线',
            text: '程序员学习网站'
          },
          {
            href: 'https://www.nowcoder.com/',
            src: require('../images/牛客网.ico').default,
            name: '牛客网',
            text: '程序员面试学习网站'
          },
          {
            href: 'https://blog.poetries.top/FE-Interview-Questions/docs/base.html',
            src: require('../images/FE-Interview.png').default,
            name: 'FE-Interview',
            text: '程序员面试学习网站'
          },
          {
            href: 'http://www.xiachufang.com/',
            src: require('../images/下厨房.ico').default,
            name: '下厨房',
            text: '学习厨艺的好地方'
          },
          {
            href: 'https://www.icourse163.org/',
            src: require('../images/中国大学.png').default,
            name: '中国大学',
            text: '大学公开课'
          }
        ]
      },
      {
        name: 'Software',
        class: 'icon-Resources',
        text: '软件资源',
        list: [{
            href: 'https://next.itellyou.cn/',
            src: require('../images/MSDN.ico').default,
            name: 'MSDN我告诉你',
            text: 'windows官方系统与Office'
          },
          {
            href: 'https://www.52pojie.cn/forum-16-1.html',
            src: require('../images/吾爱破解.ico').default,
            name: '吾爱破解',
            text: '软件破解'
          },
          {
            href: 'https://weibo.com/vposy?refer_flag=1001030103_&is_all=1',
            src: require('../images/Adobe.ico').default,
            name: 'Adobe全家桶',
            text: '软件破解'
          },
          {
            href: 'http://www.yishimei.cn/',
            src: require('../images/GitHub.ico').default,
            name: '亦是美网络',
            text: '软件破解'
          },
          {
            href: 'https://www.ghpym.com/',
            src: require('../images/果核剥壳.ico').default,
            name: '果核剥壳',
            text: '破解软件'
          },
          {
            href: 'http://www.dayanzai.me/',
            src: require('../images/大眼仔.ico').default,
            name: '大眼仔',
            text: '破解软件'
          },
          {
            href: 'http://www.carrotchou.blog/',
            src: require('../images/胡萝卜周.jpg').default,
            name: '胡萝卜周',
            text: '破解软件'
          },
          {
            href: 'https://www.itjc8.com/forum.php?gid=1',
            src: require('../images/IT教程吧.ico').default,
            name: 'IT教程吧',
            text: 'IT学习资源'
          },
          {
            href: 'https://pan.baidu.com/disk/home?#/all?path=%2F&vmode=list',
            src: require('../images/百度网盘.ico').default,
            name: '百度网盘',
            text: '国内最好的网盘'
          }
        ]
      },
      {
        name: 'Docs',
        class: 'icon-Documentation',
        text: '参考文档',
        list: [{
            href: 'https://docschina.org/',
            src: require('../images/印记中文.ico').default,
            name: '印记中文',
            text: '文档集合'
          },
          {
            href: 'https://www.w3school.com.cn/',
            src: require('../images/w3school.png').default,
            name: 'w3school',
            text: '文档集合'
          },
          {
            href: 'https://www.sass.hk/',
            src: require('../images/Sass.ico').default,
            name: 'Sass',
            text: 'CSS扩展语言'
          },
          {
            href: 'https://daneden.github.io/animate.css/',
            src: require('../images/GitHub.ico').default,
            name: 'Animate',
            text: 'CSS动画库'
          },
          {
            href: 'https://chokcoco.github.io/CSS-Inspiration/#/./init',
            src: require('../images/CSS-Inspiration.png').default,
            name: 'CSS-Inspiration',
            text: 'CSS灵感'
          },
          {
            href: 'https://lhammer.cn/You-need-to-know-css/#/zh-cn/introduce?v=1',
            src: require('../images/You-need-to-know-css.ico').default,
            name: 'You-need-to-know-css',
            text: 'CSS灵感'
          },
          {
            href: 'https://www.layui.com/doc/',
            src: require('../images/layui.ico').default,
            name: 'LaYui',
            text: '前端 UI 框架'
          },
          {
            href: 'https://www.bootcss.com/',
            src: require('../images/Bootstrap.ico').default,
            name: 'Bootstrap',
            text: '响应式前端框架'
          },
          {
            href: 'https://jquery.cuishifeng.cn/',
            src: require('../images/jQuery.ico').default,
            name: 'jQuery',
            text: '入门级js工具库'
          },
          {
            href: 'http://www.jq22.com/',
            src: require('../images/jQuery插件库.ico').default,
            name: 'jQuery插件库',
            text: 'jQuery插件库'
          },
          {
            href: 'https://www.swiper.com.cn/api/index.html',
            src: require('../images/Swiper.ico').default,
            name: 'Swiper',
            text: '内容触摸滑动插件'
          },
          {
            href: 'https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts',
            src: require('../images/ECharts.png').default,
            name: 'ECharts',
            text: 'JS图形库'
          },
          {
            href: 'https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene',
            src: require('../images/Three.ico').default,
            name: 'Three.js',
            text: 'JS三维模型框架'
          },
          {
            href: 'https://es6.ruanyifeng.com/#README',
            src: require('../images/ES6.ico').default,
            name: 'ES6',
            text: 'ECMAScript 6 入门教程'
          },
          {
            href: 'https://vuejs.org/',
            src: require('../images/Vue.png').default,
            name: 'Vue',
            text: '渐进式前端框架'
          },
          {
            href: 'https://zh-hans.reactjs.org/tutorial/tutorial.html',
            src: require('../images/React.ico').default,
            name: 'React',
            text: '用于构建用户界面的js库'
          },
          {
            href: 'https://hexo.io/zh-cn/docs/',
            src: require('../images/Hexo.png').default,
            name: 'Hexo',
            text: '博客框架'
          },
          {
            href: 'https://uniapp.dcloud.io/component/README',
            src: require('../images/Uni-app.png').default,
            name: 'Uni-app',
            text: '跨平台框架'
          },
          {
            href: 'https://youzan.github.io/vant/#/zh-CN/intro',
            src: require('../images/Vant.ico').default,
            name: 'Vant',
            text: '移动端框架'
          },
          {
            href: 'https://element.eleme.cn/#/zh-CN/component/installation',
            src: require('../images/Element.ico').default,
            name: 'Element',
            text: 'PC响应式框架'
          },
          {
            href: 'https://2x.antdv.com/docs/vue/introduce-cn/',
            src: require('../images/Ant-Design.ico').default,
            name: 'Ant Design of Vue',
            text: 'PC响应式框架'
          },
          {
            href: 'https://www.nuxtjs.cn/guide/installation',
            src: require('../images/NuxtJS.ico').default,
            name: 'NuxtJS',
            text: 'VUE框架'
          },

          {
            href: 'https://mp.weixin.qq.com',
            src: require('../images/微信公众平台.ico').default,
            name: '微信公众平台',
            text: '微信小程序、公众号'
          },
          {
            href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
            src: require('../images/微信公众平台.ico').default,
            name: '微信官方文档',
            text: '微信官方文档'
          },
          {
            href: 'https://doc.mini.talelin.com/start/',
            src: require('../images/Lin-UI.ico').default,
            name: 'Lin-UI',
            text: '原生微信小程序框架'
          },
          {
            href: 'https://eggjs.org/en/intro/quickstart.html',
            src: require('../images/Eggjs.png').default,
            name: 'Eggjs',
            text: 'nodejs框架'
          },
          {
            href: 'https://electronjs.org/docs',
            src: require('../images/Electron.ico').default,
            name: 'Electron',
            text: '桌面js框架'
          },
          {
            href: 'https://www.webpackjs.com/',
            src: require('../images/webpack.ico').default,
            name: 'Webpack',
            text: '打包工具'
          },
          {
            href: 'https://docs.v2board.com/',
            src: require('../images/V2Board.png').default,
            name: 'V2Board',
            text: 'V2ray机场前端文档'
          },
          {
            href: 'https://github.com/ColetteContreras/v2ray-poseidon',
            src: require('../images/GitHub.ico').default,
            name: 'V2ray-Poseidon',
            text: 'V2ray机场后端文档'
          },
          {
            href: 'https://github.com/sprov065/soga/wiki',
            src: require('../images/GitHub.ico').default,
            name: 'Soga',
            text: 'V2ray机场后端文档'
          }
        ]
      }, {
        name: 'Development-Community',
        class: 'icon-Community',
        text: '开发社区',
        list: [{
            href: 'https://juejin.im/',
            src: require('../images/掘金.png').default,
            name: '掘金',
            text: '外国开发社区'
          },
          {
            href: 'https://github.com/',
            src: require('../images/GitHub.ico').default,
            name: 'GitHub',
            text: '代码库'
          },
          {
            href: 'https://gitee.com/',
            src: require('../images/码云.ico').default,
            name: '码云',
            text: '代码库'
          },
          {
            href: 'https://www.zhihu.com/',
            src: require('../images/知乎.png').default,
            name: '知乎',
            text: '都是牛人'
          },
          {
            href: 'https://stackoverflow.com/',
            src: require('../images/stackoverflow.png').default,
            name: 'Stackoverflow',
            text: '外国牛人'
          },
          {
            href: 'https://www.coursera.org/',
            src: require('../images/coursera.png').default,
            name: 'coursera',
            text: '外国IT学习网站'
          },
          {
            href: 'https://www.csdn.net/nav/web',
            src: require('../images/CSDN.ico').default,
            name: 'CSDN',
            text: '中国IT社区'
          },
          {
            href: 'https://www.oschina.net/',
            src: require('../images/oschina.ico').default,
            name: 'Coschina',
            text: '中国IT社区'
          },
          {
            href: 'https://www.right.com.cn/forum/',
            src: require('../images/恩山无线论坛.ico').default,
            name: '恩山无线论坛',
            text: '上网硬件论坛'
          },
          {
            href: 'https://www.vpsgo.com/',
            src: require('../images/VPSGO.ico').default,
            name: 'VPSGO',
            text: 'vps评测'
          },
          {
            href: 'https://baiyue.one/',
            src: require('../images/佰阅部落.ico').default,
            name: '佰阅部落',
            text: '网站源码'
          },
          {
            href: 'https://www.v2rayssr.com/',
            src: require('../images/V2ray.ico').default,
            name: 'V2raySSR',
            text: '翻墙论坛'
          },
          {
            href: 'https://www.vpsdx.com/',
            src: require('../images/VPS大学.png').default,
            name: 'VPS大学',
            text: 'VPS推荐'
          },
          {
            href: 'https://www.vpsaff.net/',
            src: require('../images/VPS收割者.png').default,
            name: 'VPS收割者',
            text: 'VPS推荐'
          },
          {
            href: 'https://www.zhujiceping.com/',
            src: require('../images/国外主机评测.ico').default,
            name: '国外主机评测',
            text: 'VPS推荐'
          },
          {
            href: 'https://stock.bwg.net/',
            src: require('../images/搬瓦工.png').default,
            name: '搬瓦工',
            text: '搬瓦工方案库存监控页面'
          }
        ]
      },
      {
        name: 'exploit',
        class: 'icon-Tool',
        text: '开发工具',
        list: [{
            href: 'https://tinypng.com/',
            src: require('../images/tinypng.ico').default,
            name: 'TinyPNG',
            text: '图片压缩'
          },
          {
            href: 'https://www.fontke.com/tool/compressimage/',
            src: require('../images/图片压缩.ico').default,
            name: '图片压缩',
            text: '图片压缩'
          },
          {
            href: 'https://docsmall.com/',
            src: require('../images/docsmall.png').default,
            name: 'docsmall',
            text: '图片压缩'
          },
          {
            href: 'https://www.yasuotu.com/',
            src: require('../images/压缩图.ico').default,
            name: '压缩图',
            text: '图片压缩'
          },
          {
            href: 'https://tools.ipip.net/newping.php',
            src: require('../images/ipip.ico').default,
            name: 'IPIP',
            text: 'ping网络连通性'
          },
          {
            href: 'https://www.speedtest.cn/',
            src: require('../images/测速网.ico').default,
            name: '测速网',
            text: '测试网络速度'
          },
          {
            href: 'https://FreeSSL.cn/',
            src: require('../images/FreeSSL.cn.ico').default,
            name: 'FreeSSL.cn',
            text: 'SSL证书申请'
          },
          {
            href: 'https://www.gitbook.com/',
            src: require('../images/GitBook.ico').default,
            name: 'GitBook',
            text: '记录一切'
          },
          {
            href: 'https://www.yuque.com/dashboard',
            src: require('../images/yuque.png').default,
            name: '语雀',
            text: '专业的云端知识库'
          },
          {
            href: 'https://note.youdao.com/web/#/file/recent/markdown/WEB80575f5bd4619671a7ad032db131fd6b/',
            src: require('../images/有道云笔记.ico').default,
            name: '有道云笔记',
            text: '云端笔记'
          },
          {
            href: 'https://tool.lu/',
            src: require('../images/在线工具.ico').default,
            name: '在线工具',
            text: '工具集合'
          },
          {
            href: 'https://www.npmjs.com/',
            src: require('../images/NPM.png').default,
            name: 'NPM',
            text: 'Node软件包管理器'
          },
          {
            href: 'https://www.toptal.com/developers/css/sprite-generator',
            src: require('../images/CSSSprites.png').default,
            name: 'CSS Sprites',
            text: '多图合一'
          },
          {
            href: 'https://www.easy-mock.com/',
            src: require('../images/Easy-Mock.ico').default,
            name: 'Easy-Mock',
            text: '后端数据模拟'
          },
          {
            href: 'https://caniuse.com/',
            src: require('../images/caniuse.png').default,
            name: 'caniuse',
            text: '浏览器支持表'
          },
          {
            href: 'http://www.zuohaotu.com/',
            src: require('../images/做好图.ico').default,
            name: '做好图',
            text: '图片转ICO'
          },
          {
            href: 'https://www.vps234.com/ipchecker/',
            src: require('../images/Vps234.ico').default,
            name: 'Vps234',
            text: '检测IP连通性'
          },
          {
            href: 'https://developers.google.com/speed/pagespeed/insights/',
            src: require('../images/PageSpeed见解.ico').default,
            name: 'PageSpeed见解',
            text: '检测网站性能'
          },
          {
            href: 'https://analytics.google.com/analytics/web/#/report-home/a157349190w221495475p210595989',
            src: require('../images/Analytics.svg').default,
            name: 'Analytics',
            text: '网站流量分析'
          },
          {
            href: 'https://web.umeng.com/main.php?c=site&a=show',
            src: require('../images/友盟+.ico').default,
            name: '友盟+',
            text: '数据统计'
          },
          {
            href: 'https://www.bt.cn/download/linux.html',
            src: require('../images/宝塔面板.ico').default,
            name: '宝塔面板',
            text: '服务器运行环境'
          },
          {
            href: 'https://cdnjs.com/',
            src: require('../images/GitHub.ico').default,
            name: 'CDNJS',
            text: '全球第一CDN公共库'
          },
          {
            href: 'https://www.bootcdn.cn/',
            src: require('../images/BootCDN.ico').default,
            name: 'BootCDN',
            text: '国内第一CDN公共库'
          },
          {
            href: 'https://mrchportalweb.alipay.com/user/home.htm#/',
            src: require('../images/支付宝.ico').default,
            name: '支付宝',
            text: '商家中心'
          },
          {
            href: 'https://www.paypal.com/',
            src: require('../images/PayPal.ico').default,
            name: 'PayPal',
            text: '外国第三方支付平台'
          }
        ]
      },
      {
        name: 'Tools',
        class: 'icon-Tool',
        text: '实用工具',
        list: [{
            href: 'https://dalipan.com/',
            src: require('../images/大力盘搜索.ico').default,
            name: '大力盘搜索',
            text: '网盘资源搜索'
          },
          {
            href: 'http://www.qiuziti.com/',
            src: require('../images/求字体.ico').default,
            name: '求字体',
            text: '字体识别，字体下载'
          },
          {
            href: 'https://www.qt86.com/',
            src: require('../images/QT86.ico').default,
            name: 'QT86',
            text: '字体成图'
          },
          {
            href: 'http://www.fonts.net.cn/',
            src: require('../images/字体天下.ico').default,
            name: '字体天下',
            text: '字体下载'
          },
          {
            href: 'http://www.395.net.cn/',
            src: require('../images/压缩图.ico').default,
            name: '395公章',
            text: '公章生成器'
          },
          {
            href: 'https://mail.163.com',
            src: require('../images/163邮箱.ico').default,
            name: '163邮箱',
            text: '电话号码邮箱'
          },
          {
            href: 'https://mail.qq.com/',
            src: require('../images/QQ邮箱.png').default,
            name: 'QQ邮箱',
            text: 'QQ自带邮箱'
          },
          {
            href: 'https://mail.google.com/mail/u/0/#inbox',
            src: require('../images/谷歌邮箱.ico').default,
            name: '谷歌邮箱',
            text: '谷歌邮箱'
          },
          {
            href: 'https://www.51job.com/',
            src: require('../images/前程无忧.ico').default,
            name: '前程无忧',
            text: '海投找工作'
          },
          {
            href: 'https://www.zhipin.com/guangzhou/',
            src: require('../images/BOSS直聘.ico').default,
            name: 'BOSS直聘',
            text: '精准找工作'
          },
          {
            href: 'https://www.tianyancha.com/',
            src: require('../images/天眼查.ico').default,
            name: '天眼查',
            text: '查看企业信息'
          },
          {
            href: 'https://www.kanzhun.com/',
            src: require('../images/看准网.png').default,
            name: '看准网',
            text: '找工作,先看准'
          },
          {
            href: 'http://www.gdzwfw.gov.cn/',
            src: require('../images/gdzwfw.ico').default,
            name: '广州政务服务网',
            text: '电子服务中心'
          },
          {
            href: 'https://fabiaoqing.com/',
            src: require('../images/发表情包.png').default,
            name: '发表情包',
            text: '尔等可敢一战'
          },
          {
            href: 'https://weishi.iiilab.com',
            src: require('../images/短视频解析.png').default,
            name: '短视频解析',
            text: '视频解析下载'
          },
          {
            href: 'https://vtool.pro/',
            src: require('../images/抖音解析.png').default,
            name: '抖音解析',
            text: '视频解析下载'
          },
          {
            href: 'https://www.findyoutube.net/',
            src: require('../images/YouTube.png').default,
            name: '视频下载',
            text: 'Youtube视频和字幕在线下载'
          },
          {
            href: 'http://weibodang.cn/videoextractor/',
            src: require('../images/WeiboDang.ico').default,
            name: 'WeiboDang',
            text: '中国区视频解析'
          },
          {
            href: 'https://apkpure.com/cn/',
            src: require('../images/APKPure.webp').default,
            name: 'APKPure',
            text: '安卓应用下载'
          },
          {
            href: 'https://time.is/zh/',
            src: require('../images/Time.ico').default,
            name: 'Time',
            text: '各个地区时间'
          },
          {
            href: 'https://voice.google.com/',
            src: require('../images/google_voice.png').default,
            name: 'Google Voice',
            text: '美国虚拟电话'
          },
          {
            href: 'http://www.shenfendaquan.com/',
            src: require('../images/google_voice.png').default,
            name: '身份信息生成',
            text: '身份信息生成'
          },
          {
            href: 'https://smsreceivefree.com/',
            src: require('../images/SMSReceiveFree.ico').default,
            name: 'SMSReceiveFree',
            text: '短信免费接收'
          },
          {
            href: 'https://cli.im/',
            src: require('../images/草料二维码.ico').default,
            name: '草料二维码',
            text: '生成二维码'
          },
          {
            href: 'https://chrome.google.com/webstore/category/themes?hl=zh-CN',
            src: require('../images/谷歌浏览器.svg').default,
            name: 'chrome 网上应用店',
            text: '谷歌浏览器插件'

          },
          {
            href: 'http://www.10jqka.com.cn/',
            src: require('../images/同花顺财经.ico').default,
            name: '同花顺财经',
            text: '股票/基金曲线图'
          },
          {
            href: 'https://www.amap.com/',
            src: require('../images/高德地图.ico').default,
            name: '高德地图',
            text: '中国最好的导航'
          },
          {
            href: 'https://www.google.com/maps/@35.274241,160.2981017,3z?hl=zh-CN',
            src: require('../images/谷歌地图.ico').default,
            name: '谷歌地图',
            text: '外国最好的导航'
          },
          {
            href: 'https://ad.oceanengine.com/',
            src: require('../images/巨量引擎.ico').default,
            name: '巨量引擎',
            text: '广告投放平台'
          },
          {
            href: 'https://agent.oceanengine.com/',
            src: require('../images/巨量引擎.ico').default,
            name: '巨量引擎',
            text: '代理商平台'
          },
          {
            href: 'https://cas.baidu.com/?tpl=www2&fromu=http%3A%2F%2Fwww2.baidu.com%2Fcommon%2Fappinit.ajax',
            src: require('../images/百度营销.ico').default,
            name: '百度营销',
            text: '广告投放平台'
          },
          {
            href: 'https://data.appgrowing.cn/leaflet/list',
            src: require('../images/Appgrowing.ico').default,
            name: 'Appgrowing',
            text: '广告素材搜索'
          },
          {
            href: 'https://www.adbug.cn/',
            src: require('../images/ADBUG.png').default,
            name: 'ADBUG',
            text: '广告素材搜索'
          },
          {
            href: 'http://ad1024.com/',
            src: require('../images/FeedsRadar.ico').default,
            name: 'FeedsRadar',
            text: '信息流雷达'
          },
          {
            href: 'https://www.cqado.com.cn/',
            src: require('../images/CQADO.png').default,
            name: 'CQADO',
            text: '广告素材搜索'
          },
          {
            href: 'https://bigbigads.io/',
            src: require('../images/BigBigAds.ico').default,
            name: 'BigBigAds',
            text: '广告素材情报分析'
          },
          {
            href: 'https://www.erlangcha.com/',
            src: require('../images/二郎查.png').default,
            name: '二郎查',
            text: '二类电商爆品分析'
          }
        ]
      },
      {
        name: 'Leisure-and-Entertainment',
        class: 'icon-Entertainment',
        text: '文娱休闲',
        list: [{
            href: 'https://www.youku.com/',
            src: require('../images/优酷.svg').default,
            name: '优酷',
            text: '综艺好看'
          },
          {
            href: 'https://www.iqiyi.com/',
            src: require('../images/爱奇艺.ico').default,
            name: '爱奇艺',
            text: '电视剧好看'
          },
          {
            href: 'https://v.qq.com/',
            src: require('../images/腾讯视频.ico').default,
            name: '腾讯视频',
            text: '动漫好看'
          },
          {
            href: 'https://www.bilibili.com/',
            src: require('../images/哔哩哔哩.ico').default,
            name: '哔哩哔哩',
            text: '动漫好看'
          },
          {
            href: 'https://www.youtube.com/',
            src: require('../images/YouTube.png').default,
            name: 'YouTube',
            text: '外国最大的视频网站'
          },
          {
            href: 'https://www.netflix.com/',
            src: require('../images/Netflix.ico').default,
            name: 'Netflix',
            text: '外国最大的电影网站'
          },
          {
            href: 'https://www.hulu.com/',
            src: require('../images/Hulu.png').default,
            name: 'Hulu',
            text: '美国在线直播电视和电影'
          },
          {
            href: 'https://www.hbo.com/',
            src: require('../images/HBO.jpg').default,
            name: 'HBO',
            text: '美国电影喜剧纪录片'
          },
          {
            href: 'https://www.disneyplus.com/',
            src: require('../images/Disney+.ico').default,
            name: 'Disney+',
            text: '美国电影网站'
          },
          {
            href: 'https://www.mytvsuper.com/',
            src: require('../images/myTVsuper.ico').default,
            name: 'myTVsuper',
            text: '香港电影网站'
          },
          {
            href: 'https://ani.gamer.com.tw/',
            src: require('../images/动漫疯.ico').default,
            name: '动漫疯',
            text: '台湾电影网站'
          },
          {
            href: 'https://www.foxplus.com/',
            src: require('../images/F0X+.png').default,
            name: 'F0X+',
            text: '香港电影网站'
          },
          {
            href: 'https://abema.tv/',
            src: require('../images/AbemaTV.ico').default,
            name: 'AbemaTV',
            text: '日本直播网站'
          },
          {
            href: 'https://www.nicovideo.jp/',
            src: require('../images/nicovideo.ico').default,
            name: 'nicovideo',
            text: '日本动漫视频网站'
          },
          {
            href: 'https://www.dytt8.net/',
            src: require('../images/电影天堂.ico').default,
            name: '电影天堂',
            text: '磁力电影'
          },
          {
            href: 'https://www.agefans.tv/',
            src: require('../images/AGE动漫.ico').default,
            name: 'AGE动漫',
            text: '动漫网站'
          },
          {
            href: 'https://www.zxzj.me/',
            src: require('../images/在线之家.ico').default,
            name: '在线之家',
            text: '在线视频'
          },
          {
            href: 'https://www.88ys.com/',
            src: require('../images/88影视网.ico').default,
            name: '88影视网',
            text: '在线视频'
          },
          {
            href: 'https://www.douyu.com/',
            src: require('../images/斗鱼.ico').default,
            name: '斗鱼',
            text: '主播平台'
          },
          {
            href: 'https://www.huya.com/',
            src: require('../images/虎牙.ico').default,
            name: '虎牙',
            text: '主播平台'
          },
          {
            href: 'https://theporndude.com/zh',
            src: require('../images/PornDude.webp').default,
            name: 'Porn Dude',
            text: '成人世界的大门'
          },
          {
            href: 'https://music.163.com',
            src: require('../images/网易云音乐.ico').default,
            name: '网易云音乐',
            text: '评论史诗级'
          },
          {
            href: 'https://y.qq.com/',
            src: require('../images/QQ音乐.ico').default,
            name: 'QQ音乐',
            text: '版权最全'
          },
          {
            href: 'https://www.xiami.com/',
            src: require('../images/虾米音乐.png').default,
            name: '虾米音乐',
            text: '88会员赠送'
          },
          {
            href: 'http://www.gequdaquan.net/gqss/',
            src: require('../images/歌曲大全.ico').default,
            name: '歌曲大全',
            text: '音乐聚合搜索引擎'
          },
          {
            href: 'http://www.kugou.com/',
            src: require('../images/酷狗音乐.ico').default,
            name: '酷狗音乐',
            text: '哈喽，酷狗！'
          },
          {
            href: 'https://www.ximalaya.com/',
            src: require('../images/喜马拉雅.ico').default,
            name: '喜马拉雅',
            text: '听书'
          },
          {
            href: 'https://www.lrts.me/',
            src: require('../images/懒人听书.ico').default,
            name: '懒人听书',
            text: '听书'
          },
          {
            href: 'https://www.taobao.com/',
            src: require('../images/淘宝.ico').default,
            name: '淘宝',
            text: '中国第一'
          },
          {
            href: 'https://www.jd.com',
            src: require('../images/京东.ico').default,
            name: '京东',
            text: '买数码上京东'
          },
          {
            href: 'https://www.amazon.cn/',
            src: require('../images/亚马逊.ico').default,
            name: '亚马逊商城',
            text: '外国第一'
          },
          {
            href: 'https://www.mi.com/',
            src: require('../images/小米商城.ico').default,
            name: '小米商城',
            text: '小米生态'
          },
          {
            href: 'https://www.apple.com/',
            src: require('../images/Apple.ico').default,
            name: 'Apple',
            text: '苹果商城'
          },
          {
            href: 'https://www.xiaomiyoupin.com/',
            src: require('../images/小米有品.ico').default,
            name: '小米有品',
            text: '小米生态'
          },
          {
            href: 'https://www.dcard.tw/f',
            src: require('../images/Dcard.webp').default,
            name: 'Dcard',
            text: '台湾社区'
          },
          {
            href: 'https://forum.hkgolden.com/channel/BW',
            src: require('../images/吹水台.ico').default,
            name: '吹水台',
            text: '香港高登討論區'
          },
          {
            href: 'https://mo.fish/',
            src: require('../images/fish.ico').default,
            name: '鱼塘热榜',
            text: '上班摸鱼网站'
          }
        ]
      },
      {
        name: 'Cloud-Server',
        class: 'icon-Cloud-Server',
        text: '云端服务',
        list: [{
            href: 'https://www.aliyun.com/minisite/goods?userCode=3xxeu8uc',
            src: require('../images/阿里云.ico').default,
            name: '阿里云',
            text: '中国区'
          },
          {
            href: 'https://cloud.tencent.com/act/cps/redirect?redirect=1053&cps_key=789d07ea8be50b3706f29b464fe131ad&from=console',
            src: require('../images/腾讯云.ico').default,
            name: '腾讯云',
            text: '中国区'
          },
          {
            href: 'https://www.west.cn/',
            src: require('../images/西部数据.ico').default,
            name: '西部数据',
            text: '中国区'
          },
          {
            href: 'https://www.alibabacloud.com/',
            src: require('../images/阿里云.ico').default,
            name: '阿里云',
            text: '美国区'
          },
          {
            href: 'https://cloud.google.com/?hl=zh-CN',
            src: require('../images/谷歌云.ico').default,
            name: '谷歌云',
            text: '外币信用卡送300美金'
          },
          {
            href: 'https://portal.azure.com/',
            src: require('../images/微软云.ico').default,
            name: '微软云',
            text: '白嫖一年'
          },
          {
            href: 'https://aws.amazon.com',
            src: require('../images/亚马逊.ico').default,
            name: '亚马逊云',
            text: '有信用卡可以白嫖一年'
          },
          {
            href: 'https://www.vultr.com/?ref=8439176-6G',
            src: require('../images/vultr.png').default,
            name: 'Vultr',
            text: '注册就送100美金'
          },
          {
            href: 'https://bandwagonhost.com/aff.php?aff=57350',
            src: require('../images/搬瓦工.png').default,
            name: '搬瓦工',
            text: '中国优化线路'
          },
          {
            href: 'https://my.hostkvm.com/aff.php?aff=886',
            src: require('../images/HostKvm.ico').default,
            name: 'HostKvm',
            text: '中国建站推荐'
          },
          {
            href: 'https://www.dmit.io/aff.php?aff=1001',
            src: require('../images/DMIT.ico').default,
            name: 'DMIT',
            text: '美国原生服务器'
          },
          {
            href: 'https://kvm.yunserver.com/aff.php?aff=863',
            src: require('../images/极光KVM.ico').default,
            name: '极光KVM',
            text: '美国/日本/香港'
          },
          {
            href: 'https://666clouds.com/aff.php?aff=43',
            src: require('../images/极光KVM.ico').default,
            name: '六六云',
            text: '美国原生服务器'
          },
          {
            href: 'https://www.inkisp.com/aff.php?aff=99',
            src: require('../images/极光KVM.ico').default,
            name: '水墨云',
            text: '美国大带宽服务器'
          },
          {
            href: 'https://www.xiuluohost.com/?aff=67904',
            src: require('../images/修罗云.ico').default,
            name: '修罗云',
            text: '香港大带宽'
          },
          {
            href: 'https://nbhosts.com/aff.php?aff=52',
            src: require('../images/浩瀚星辰.png').default,
            name: '浩瀚星辰',
            text: '日本原生服务器'
          },
          {
            href: 'https://www.combcloud.net/aff.php?aff=44',
            src: require('../images/CombCloud.ico').default,
            name: 'CombCloud',
            text: '香港原生服务器'
          },
          {
            href: 'https://kiwivm.64clouds.com/main.php',
            src: require('../images/搬瓦工.png').default,
            name: '搬瓦工',
            text: '后台管理'
          },
          {
            href: 'http://router.asus.com/Main_Login.asp',
            src: require('../images/RT.png').default,
            name: '公司路由器',
            text: '后台管理'
          },
          {
            href: 'http://192.168.123.1/',
            src: require('../images/小米路由器.ico').default,
            name: '小米路由器',
            text: '后台管理'
          },
          {
            href: 'https://nodequery.com/',
            src: require('../images/NodeQuery.ico').default,
            name: 'NodeQuery',
            text: '多服务器监控界面'
          },
          {
            href: 'http://45.133.119.107:43990/',
            src: require('../images/宝塔面板.ico').default,
            name: '服务器-小白龙',
            text: '宝塔管理界面'
          },
          {
            href: 'http://121.40.29.227:8888/36979603/',
            src: require('../images/宝塔面板.ico').default,
            name: '服务器-火龙',
            text: '宝塔管理界面'
          },
          {
            href: 'http://211.149.226.26:8887/btwest/',
            src: require('../images/宝塔面板.ico').default,
            name: '服务器-于龙',
            text: '宝塔管理界面'
          },
          {
            href: 'http://wx.yaoqianshu888.cn/index.php/wx/Index/index.html',
            src: require('../images/wx.ico').default,
            name: '悟空微信换号系统',
            text: '管理界面'
          },
          {
            href: 'https://v2b.xiaolong0418.com',
            src: require('../images/V2Board.png').default,
            name: '合资小分队',
            text: '节点登陆'
          },
          {
            href: 'https://v2b.xiaolong0418.com/admin#/dashboard',
            src: require('../images/V2Board.png').default,
            name: '合资小分队',
            text: '节点管理'
          },
          {
            href: 'https://www.namecheap.com/',
            src: require('../images/namecheap.ico').default,
            name: 'Namecheap',
            text: '外国域名购买'
          },
          {
            href: 'https://www.82mi.com/',
            src: require('../images/中域网络.ico').default,
            name: '中域网络',
            text: '二手域名购买'
          },
          {
            href: 'https://portal.qiniu.com/create',
            src: require('../images/七牛云.ico').default,
            name: '七牛云',
            text: 'CDN加速'
          },
          {
            href: 'https://dash.cloudflare.com/',
            src: require('../images/Cloudflare.ico').default,
            name: 'Cloudflare',
            text: 'DNS解析，CDN加速'
          },
          {
            href: 'https://steamsv.com/aff.php?aff=110',
            src: require('../images/Cloudflare.ico').default,
            name: 'STEAMSV',
            text: '流媒体解锁'
          }
        ]
      },
      {
        name: 'common software',
        class: 'icon-Software',
        text: '常用软件',
        list: [{
            href: 'https://u.tools/download.html',
            src: require('../images/uTools.png').default,
            name: 'uTools',
            text: '各种小工具集合'
          },
          {
            href: 'https://tim.qq.com/download.html',
            src: require('../images/TIM.png').default,
            name: 'TIM',
            text: '简约风格'
          },
          {
            href: 'https://weixin.qq.com/cgi-bin/readtemplate?uin=&stype=&promote=&fr=&lang=zh_CN&ADTAG=&check=false&nav=download&t=weixin_download_list&loc=readtemplate,weixin,body,6',
            src: require('../images/微信.ico').default,
            name: '微信',
            text: '沟通工具第一'
          },
          {
            href: 'https://applink.feishu.cn/client/op/open',
            src: require('../images/飞书.ico').default,
            name: '飞书',
            text: '公司团队合作'
          },
          {
            href: 'https://telegram.org/',
            src: require('../images/Telegram.ico').default,
            name: 'Telegram',
            text: '消息传递的新时代'
          },
          {
            href: 'http://www.lianty.com/',
            src: require('../images/链图网.ico').default,
            name: '链图网',
            text: '匹配字体'
          },
          {
            href: 'https://www.firefox.com.cn/',
            src: require('../images/火狐浏览器.png').default,
            name: '火狐浏览器',
            text: '中国浏览器'
          },
          {
            href: 'https://www.google.com/intl/zh-CN/chrome/',
            src: require('../images/谷歌浏览器.svg').default,
            name: '谷歌浏览器',
            text: '开发必备'
          },
          {
            href: 'http://www.potplayer.org/',
            src: require('../images/PotPlayer.ico').default,
            name: 'PotPlayer',
            text: '视频播放器'
          },
          {
            href: 'https://www.xmind.cn/download/',
            src: require('../images/XMind.ico').default,
            name: 'XMind',
            text: '思维导图'
          },
          {
            href: 'https://pc.wps.cn/',
            src: require('../images/WPS.ico').default,
            name: 'WPS',
            text: '文档处理'
          },
          {
            href: 'https://www.typora.io/',
            src: require('../images/Typora.png').default,
            name: 'Typora',
            text: '强大的文本编辑软件'
          },
          {
            href: 'https://www.huorong.cn/',
            src: require('../images/火绒安全.ico').default,
            name: '火绒安全',
            text: '杀毒软件'
          },
          {
            href: 'https://www.teamviewer.cn/cn/download/windows/',
            src: require('../images/TeamViewer.webp').default,
            name: 'TeamViewer',
            text: '远程控制桌面'
          },
          {
            href: 'https://zoom.us/download',
            src: require('../images/Zoom.ico').default,
            name: 'Zoom',
            text: '远程视频会议'
          },
          {
            href: 'http://mail.163.com/dashi/',
            src: require('../images/网易邮箱大师.ico').default,
            name: '网易邮箱大师',
            text: '多邮箱合一'
          },
          {
            href: 'https://pan.baidu.com/download',
            src: require('../images/百度网盘.ico').default,
            name: '百度网盘',
            text: '万恶的资本家'
          },
          {
            href: 'https://emumo.xiami.com/apps/mobile?spm=a2oj1.12028025.topnav.5.54776ee1me1a2G',
            src: require('../images/虾米音乐.png').default,
            name: '虾米音乐',
            text: '88会员音乐'
          },
          {
            href: 'https://cn.bandisoft.com/bandizip/',
            src: require('../images/BandiZip.ico').default,
            name: 'BandiZip',
            text: '文件压缩解压工具'
          },
          {
            href: 'https://github.com/2dust/v2rayN/releases',
            src: require('../images/GitHub.ico').default,
            name: 'V2rayN',
            text: 'V2ray window桌面连接软件'
          },
          {
            href: 'https://github.com/2dust/v2rayNG/releases',
            src: require('../images/GitHub.ico').default,
            name: 'V2rayNG',
            text: 'V2ray 安卓连接软件'
          },
          {
            href: 'https://github.com/Cenmrev/V2RayX',
            src: require('../images/GitHub.ico').default,
            name: 'V2rayX',
            text: 'V2ray 苹果桌面连接软件'
          },
          {
            href: 'https://qv2ray.github.io/',
            src: require('../images/Qv2ray.png').default,
            name: 'Qv2ray',
            text: 'V2ray 桌面连接软件'
          },
          {
            href: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
            src: require('../images/GitHub.ico').default,
            name: 'Shadowrocket',
            text: 'V2ray 苹果手机连接软件'
          },
          {
            href: 'https://code.visualstudio.com/Download',
            src: require('../images/Visual Studio Code.png').default,
            name: 'Visual Studio Code',
            text: '编程软件'
          },
          {
            href: 'https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html',
            src: require('../images/微信小程序.ico').default,
            name: '微信小程序',
            text: '编程软件'
          },
          {
            href: 'https://www.dcloud.io/hbuilderx.html',
            src: require('../images/HBuilder X.png').default,
            name: 'HBuilder X',
            text: '编程软件'
          },
          {
            href: 'https://www.navicat.com.cn/download/navicat-premium',
            src: require('../images/Navicat.png').default,
            name: 'Navicat',
            text: '数据库连接软件'
          },
          {
            href: 'https://www.xp.cn/download.html',
            src: require('../images/PHPStudy.ico').default,
            name: 'PHPStudy',
            text: '服务端运行环境'
          },
          {
            href: 'https://www.netsarang.com/zh/xshell/',
            src: require('../images/Xshell6.ico').default,
            name: 'Xshell 6',
            text: '业界最强大的SSH客户机'
          },
          {
            href: 'http://www.hostbuf.com/t/988.html',
            src: require('../images/Xshell6.ico').default,
            name: 'FinalShell ',
            text: 'SSH连接与文件传输'
          },
          {
            href: 'https://www.filezilla.cn/download/client',
            src: require('../images/FileZilla.png').default,
            name: 'FileZilla',
            text: 'FTP文件传输'
          },
          {
            href: 'https://www.getpostman.com/downloads/',
            src: require('../images/postman.png').default,
            name: 'Postman',
            text: 'API接口测试'
          },
          {
            href: 'https://www.sourcetreeapp.com/',
            src: require('../images/Sourcetree.ico').default,
            name: 'Sourcetree',
            text: '图形化Git客户端'
          },
          {
            href: 'https://desktop.github.com/',
            src: require('../images/GitHub.ico').default,
            name: 'GitHub Desktop',
            text: '图形化Git客户端'
          },
          {
            href: 'https://www.xftsoft.com/',
            src: require('../images/小飞兔.ico').default,
            name: '小飞兔',
            text: '网站扒站工具'
          },
          {
            href: 'https://www.i4.cn/',
            src: require('../images/爱思助手.png').default,
            name: '爱思助手',
            text: '苹果刷机工具'
          },
          {
            href: 'http://www.pcgeshi.com/download.html',
            src: require('../images/格式工厂.png').default,
            name: '格式工厂',
            text: '文件格式转换'
          },
          {
            href: 'https://www.ieway.cn/evcapture.html',
            src: require('../images/EV录屏.ico').default,
            name: 'EV录屏',
            text: '录屏软件'
          },
          {
            href: 'https://www.yeshen.com/',
            src: require('../images/夜神模拟器.ico').default,
            name: '夜神模拟器',
            text: '安卓模拟器'
          },
          {
            href: 'http://www.laomaotao.org/',
            src: require('../images/老毛桃.ico').default,
            name: '老毛桃',
            text: 'U盘启动盘'
          }
        ]
      }
    ]
  }
})