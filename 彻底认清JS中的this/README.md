# 前言
有关`JavaScript`中的`this`，这是一个经典的面试问题，网络上充斥着大量的知识文章，并且在平常的编码中时常也遇到与之相关的问题。本篇就来梳理一下和`this`相关的知识点，夯实基础。

# 目录
- [this的指向问题](#this的指向问题)
  - [全局执行环境](#全局执行环境)
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
`this`到底指向什么？在大多数情况下， 是取决于函数是如何调用的。

## 全局执行环境
在非严格模式下，全局执行环境中的`this`指向全局对象（window、self、global）；在严格模式下，全局执行环境中的`this`为`undefined`
```js
// 非严格模式
(function() {
    return this
})() === window
// => true
```
```js
// 全局使用严格模式
'use strict';
(function() {
    return this
})() === undefined 
// => true
```
```js
// 特定函数内部使用严格模式
(function() {
    'use strict'
    return this
})() === undefined
// => true
```

## 作为对象属性调用
当函数作为对象的一个属性调用时，**该函数内部的this指向最后调用它的那个对象**。

例：
```js
var a = 20
var obj = {
    a: 10,
    fn: function() {
        console.log(this.a)
    }
}
obj.fn() // => 10

var fn2 = obj.fn
fn2() // =>  20
```
`obj.fn()`相当于`window.obj.fn()`，最后是由`obj`调用的，所以this就指向obj;`fn2()`相当于`window.fn2()`，所以this指向window。


## call、apply、bind的作用
我们经常使用`call、apply、bind`3个方法来指定函数内部`this`。
```js
var a = 20
var obj = {
    a:  10
}
function fn(...args) {
    console.log(this.a, args)
}

fn.call(obj, 1, 2) // 10 [1, 2]
fn.apply(obj, [1, 2]) //10 [1, 2]
fn.bind(obj, 1, 2)() // 10 [1, 2]
```
可见看到，函数fn内部的`this`全部绑定在`obj`对象上了。

其中，`call、apply`的作用是**指定函数内部this并执行函数**，不同点在于`call`方法接受依次分开的参数，`apply`方法接受一个参数数组。`bind`方法不同于前面二者，它的作用是**生成一个函数体相同的新函数，并指定好新函数内部的this和部分参数**。

## new操作符
我们知道，new操作符的实质是生成一个新的实例对象，被new操作的函数称为构造函数。构造函数中的`this`永远指向它新生成的这个实例对象。
```js
function people(name) {
    this.name = name
}
var instance = new people('Bob')
console.log(instance) // {name: "Bob"}
```
可以看到，`name`属性被附加到`instance`上了。

## 箭头函数
* 普通函数在运行时才会确认this的指向。
* 箭头函数在编译时就确认了this的指向，此时this指向它外层的作用域。

> 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。

例：
```js
var a = 20
var fn = () => {
    console.log(this.a)
}
var obj = {
    a: 10
}
obj.fn = fn

var f = obj.fn

fn() //20
obj.fn() //20
window.obj.fn() //20
f() //20
```
可以看到，不论`this`如何调用，它永远固定在外层的作用域，此时为window。


有时候，箭头函数外层作用域的this是不确定的。
例：
```js
var a = 20
var obj = {
    a: 10,
    fn: function() {
        (() => {
            console.log(this.a)
        })()
    }
}

var f = obj.fn

obj.fn() // 10
f() //20
```
上述示例，fn内部有一个箭头函数自执行，这个箭头函数的`this`指向外层作用域fn，也就是说，fn的this指向什么，箭头函数的this就指向什么。`obj.fn()`运行时，fn的`this为obj`，所以箭头函数的this也为obj；`window.f`运行时，fn的this为`window`，此时箭头函数的this也为`window`。



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
