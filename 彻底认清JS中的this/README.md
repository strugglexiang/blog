# 前言
有关`JavaScript`中的`this`，这是一个经典的面试问题，网络上充斥着大量的知识文章，并且在平常的编码中时常也遇到与之相关的问题。本篇就来梳理一下和`this`相关的知识点，夯实基础。

# 目录
- [this的指向问题](#this的指向问题)
  - [全局环境下调用](#全局环境下调用)
  - [作为对象属性调用](#作为对象属性调用)
  - [call、apply、bind的作用](#call、apply、bind的作用)
  - [new操作符](#new操作符)
  - [箭头函数](#箭头函数)
- [如何修改this的指向](#如何修改this的指向)
  - [通过变量_this提前缓存](#通过变量_this提前缓存)
  - [call方法](#call方法)
  - [apply方法](#apply方法)
  - [bind方法](#bind方法)
  - [箭头函数](#箭头函数)
  - [new操作符](#new操作符)
- [用原生方法实现call、apply、bind、new操作符](#用原生方法实现call、apply、bind、new操作符)
  - [myCall](#myCall)
  - [myApply](#myApply)
  - [myBind](#myBind)
  - [myNew](#myNew)
- [总结](#总结)

# this的指向问题
## 全局环境下调用
## 作为对象属性调用
## call、apply、bind的作用
## new操作符
## 箭头函数
# 如何修改this的指向
## 通过变量_this提前缓存
## call方法
## apply方法
## bind方法
## 箭头函数
## new操作符
# 用原生方法实现call、apply、bind、new操作符
## myCall
## myApply
## myBind
## myNew

# 总结
# 参考
本篇不是无本之末，参考：   
<https://cnodejs.org/topic/5c813fd490c14711cc8cb5ae>   
<https://juejin.im/post/59bfe84351882531b730bac2#heading-10>   
<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions>   
