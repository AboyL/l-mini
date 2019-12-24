# 脚手架参考 七月老师出品的 [lin-ui](https://github.com/TaleLin/lin-ui)

# 主要功能

1. less预处理器,自动转换px到rpx
2. eslint处理
3. 提供脚手架工具帮助我们快速新建项目或者增加页面以及组件等

# 脚手架

## 安装脚手架

> yarn global add lmini

## 创建项目

> lmini init project-mini

## 创建页面
> lmini g page pageDir/pageName

## 创建组件
> lmini g component componentDir/componentName

或者

> lmini g comp componentDir/componentName

[脚手架地址](https://github.com/AboyL/l-mini-cli)

todo
- [x] 提供cli
  - [x] 使用cli创建项目
  - [x] 使用cli创建页面
- [x] 提供git hook
- [x] 使用cli创建组件
- [x] 加入监控系统
- [x] 加入http请求配置
- [x] 加入一些公用的函数
- [ ] 提供类似vuex的状态管理工具