# whisper  轻语

采用瀑布流布局的社交网站，主要用来记录自己的日常生活&碎碎念，会逐渐取代我的WordPress。

当前版本：Alpha（内测）[点击浏览](https://whisper.ri-co.cn)

后端采用Golang编写 [后端代码库](https://github.com/Sirlanri/whisper-back)

## 技术栈

Vue+Vuetify

使用Vuex Router等Vue组件辅助开发。

## 代码

首先安装依赖

```
npm install 
```

### 本地运行：

```
npm run serve
```

代码会热部署在 localhost:8080

### 打包部署：

**部署后需要使用Nginx等进行反代**

```
npm run build
```

