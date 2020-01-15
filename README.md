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

  