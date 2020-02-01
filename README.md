# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##[主流开源协议之间有何异同？] （http://www.zhihu.com/question/19568896）

##用传统方式把修改过地代码上传到github？？
  1.git add .
  2.git commit -m "提交信息"
  3.git push

##制作首页app组件
1.完成Header区域，使用的是mint-ui中的Header组件
2.制作底部的tabbar，使用的是mui的tabbar.html
 +在制作购物车小图标的时候，操作会相对多一些：
 +先把扩展图标的css文件拷贝到项目中
 +拷贝扩展字体库ttf文件到项目中
 +为购物车小图标添加相应的class类
3.要在中间区域放置一个router-view来展示路由匹配到的组件


##改造tabbar为router-link

##设置路由高亮

##点击tabbar中的路由链接，展示对应的路由组件

##制作首页轮播图布局

##加载首页轮播图数据
1.获取数据，使用axios
2.使用axios.get获取到数据，并保存到data身上
3.使用v-for循环渲染每个item项

##改造九宫格区域的样式

##改造新闻资讯路由链接

##新闻资讯页面制作 
1.绘制界面，使用mui中的media-list.html
2.使用axios获取数据
3.渲染真实数据

##实现新闻资讯列表点击跳转到新闻详情
1.把列表中的每一项改造为router-link，同时，在跳转的时候应该提供唯一的id标识符
2.创建新闻详情页面 newsinfo.vue
3.在路由模块中将新闻详情的路由地址和组件页面对应起来

##实现新闻详情的页面布局和数据渲染

##单独封装一个comment.vue评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要使用comment组件的页面中先手动导入comment组件
 +‘import comment from './comment.vue' ’
3.在父组件中使用components属性，将comment组件注册为自己的子组件
4.将注册子组件时候的注册名称以标签形式在页面中引用

##获取所有的评论数据显示到页面中

##实现加载更多评论的功能
1.为加载更多按钮绑定事件，在事件中请求下一页数据
2.点击加载更多，让pageIndex++,然后重新调用this.getComments()方法重新获取最新一页的数据
3.为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取到新数据，应该让老数据调用数组的concat方法拼接上新数据

##发表评论
1.把文本框做双向数据绑定
2.为发表评论绑定一个事件
3.校验评论内容是否为空，如果为空，提醒用户评论内容不能为空
4.通过axios发送一个请求，把评论内容提交给服务器
5.当发表评论列表好了后，重新刷新列表，以查看最新的评论
 +如果调用getComments方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
 +换一种思路：当评论成功后，在客服端手动拼接出一个最新的评论对象，然后调用数组的unshift方法，把最新的评论追加到data中的comments的开头，这样就能完美实现评论列表刷新的需求

##改造图片分析按钮为路由的链接并显示对应的组件页面

##绘制图片列表组件页面结构并美化样式
 1.制作顶部的滑动条
 2.制作底部的图片列表
 
 ###制作顶部滑动条的坑们
 1.需要借助与mui中的tab-top-webview-main.html
 2.需要把slider区域的mui-fullscreen类去掉
 3.滑动条无法正常触发滑动，通过检查官方文档，发现这是js组件，需要初始化一下
  +.导入mui.js
  +调用官方提供得方式去初始化
 4.刚进入图片分享页面的时候，滑动条无法正常工作，经过分析发现如果要初始化滑动条，必须等dom元素加载完毕，所以我们把初始化滑动条的代码搬到了mounted生命周期函数里面
6.当滑动条调试ok后，tabbar无法正常工作，这个时候我们需要把每个tabbar按钮的样式的mui-tab-item重新改下名字
7.获取所有分类并渲染分类列表

###制作图片列表区域
 1.图片列表需要使用懒加载，我们可以使用mint-ui提供的lazy-load
 2.根据lazy-load使用文档尝试使用
 3.渲染图片列表数据

###实现了图片列表的懒加载改造和样式美化

 ##实现了点击图片跳转到图片详情页面
 1.在改造li成router-link时候，需要用tag属性指定要渲染为那种元素

 ##实现详情页面的布局和美化，同时获取数据渲染页面

 ##实现图片详情中缩略图的功能
 1.使用插件 vue-preview 这个缩略图插件
 2.获取所有的图片列表，然后使用v-for指令渲染数据
 3.img上的class不能去掉
 4.注意：每个图片数据对象中都必须有w和h属性

 ##绘制商品列表页面基本结构并美化



  