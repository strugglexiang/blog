#目录
- [1-利用babel将es6语法转换为es5](#1-利用babel将es6语法转换为es5)
- [2-新的声明方式](#2-新的声明方式)
- [3-变量的结构赋值](#3-变量的结构赋值)
- [4-扩展运算符和rest运算符](#4-扩展运算符和rest运算符)
- [5-字符串模板](#5-字符串模板)
- [6-数字操作](#6-数字操作)


## 1-利用babel将es6语法转换为es5
1. 全局安装babel-cli
```
npm i -g babel-cli
```
2. 安装babel-cli和babel-preset-es2015模块
```
npm i -D babel-cli babel-preset-es2015
npm install --save-dev babel-cli babel-preset-es2015
```
3. 书写配置文件.babelrc
```
{
    "presets": [],
    "plugins": []
}
```
4. 转换语法
```
babel src/index.js -o src/dist/index.js
```

## 2-新的声明方式
>我们尽量用var声明全局变量，用let声明局部变量（let是有块级作用域的）
1. let 局部声明变量
```
{
    let a = 3
}
console.log(a)
结果：Uncaught ReferenceError: a is not defined
说明a是局部块级作用域的变量
```
2. const 声明常量

## 3-变量的结构赋值
>解构赋值：es6允许我们从数组和对象中提取值赋值给变量
1. 数组的结构赋值：将数组中的值提取出来赋值给变量
```
// ------ 数组的结构赋值
let [a1, a2, a3] = [1, 2, 3]
console.log(a1)//输出值为1
console.log(a2)//输出值为2
console.log(a3)//输出值为3
console.dir(window)//并且在window对象中

// ------- 数组模式要和变量模式统一
let [b1, [b2, b3], b4] = [1, [2, 3], 4]
console.log(b1)//输出值为1
console.log(b2)//输出值为2
console.log(b3)//输出值为3
console.log(b4)//输出值为4
console.dir(window)

//------- 解构赋值可以设置默认值
let [c1, c2 = 'something', c3] = ['向维星']
console.log(c1)//输出值为 向维星
console.log(c2)//输出值为 something
console.log(c3)//输出值为 undefined

// ------ 默认中注意null和undefind的区别
let [d1, d2 = 1 ,d3 = 2] = ['something', null, undefined]
console.log(d1 + d2)//控制台显示somthingnull
console.log(d1 + d3)//控制台显示somthing2
//说明null代表把值解析为null，替代默认值
//undefind代表什么都没有，采取默认值

// ------- 变量的结构赋值
let obj = {bar: '苹果', foo: '香蕉'}
let {bar, foo } = obj
console.log(bar)
console.log(foo)

```
2. 对象的解构赋值
```
let obj = {bar: '苹果', foo: '香蕉'}
let {bar, foo } = obj
console.log(bar) //输出苹果
console.log(foo) //输出香蕉
```
3. 字符串的结构赋值
```
字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。
// ------ 字符串的结构赋值
// 字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。
let [e1, e2, e3] = 'dnf'
console.log(e1, e2, e3) //d n f

```

## 4-扩展运算符和rest运算符
> es6语法中经常看到...的写法，经常用作扩展运算符和rest运算符
1. 函数中用于参数不确定的情况(参数转数组)
```
function test(...arg){
    console.log(typeof arg) //objest
    console.log(arg)//[1, 2, 3 , 4]
    console.log(arg[0])//1
    console.log(arg[1])//2
    console.log(arg[2])//3
    console.log(arg[3])//4
}
test(1,2,3,4)
```
2. 函数部分参数形成数组(参数转数组)
```
function test(a, ...arg){
    console.log(a) //1
    console.log(arg)//[2, 3, 4]

}
test(1, 2, 3, 4)
```
3.  将数组转换为用逗号隔开的参数序列(数组转参数序列)
```
function test(x, y){
    console.log(x) // 8
    console.log(y) // 4
    return x + y 
}
console.log(test(...[8, 4])) //12
```
4. 替代es5的apply方法
```
console.log(Math.max.apply(null, [2, 5, 4, 11, 1]))//es5的写法 输出11
console.log(Math.max(...[2, 5, 4, 11, 1]))//es6的写法 输出11
```
5. 生成数组
```
let arr1 = [1, 2, 3]
let temp = arr1
let arr2 = [...arr1, 4, 5, 6]
console.log(arr2)//[1, 2, 3, 4, 5, 6]
console.log(arr1 === temp)//false 浅拷贝
console.log(arr1 === arr2)//true 
```
6. 合并数组
```
let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3 = [...arr1, ...arr2]
console.log(arr3)//[1, 2, 3, 4]
```
7. 配合解构赋值
> 解构赋值...只能放最后一个位置，[a, ...b, c]这种写法是错的
```
let [a, ...b] = [1, 2, 3, 4, 5]
console.log(a)//1
console.log(b)//[2, 3, 4, 5]
```
8. 对象中的用法
> 这里有坑，我不知道为什么用babel转不了，希望有大佬能帮我
```
let a = {
    ni: 'hao'
}

let b = {
    ...a,
    wo: 'hao'
}
console.log(b)
```

## 5-字符串模板
1. 字符串模板支持引用变量、添加html、运算
```
let obj = {
    name: 'some',
    age: 18
}
let a = 3
let b = 5
let str1 = `我的名字是${obj.name},我的姓名是${obj.age}`// 支持获取变量
let str2 = `<b>我</b>非常</br>高兴` //支持html
let str3 = `${a + b}`//支持运算
document.write(str2) 
console.log(str1)//我的名字是some,我的姓名是18
console.log(str3)//8 类型是字符串
```
2. 新的方法:includes、starsWith、endsWith、repeat
```
let str = '我的名字是some,我的姓名是18'
console.log(str.indexOf('some') > 0)//true
console.log(str.includes('some'))//true
console.log(str.includes('你好'))//false
console.log(str.startsWith('我的'))//true
console.log(str.startsWith('你的'))//false
console.log(str.endsWith('18'))//true
console.log(str.endsWith(18))//true
console.log(str.endsWith('123'))//false


let copestr = '是付'
console.log(copestr.repeat(3))//是付是付是付
```


## 6-数字操作
1. 二进制和八进制声明(二进制：0b；八进制：0o) binary octal
```
let binary = 0b1111//二进制 控制台输出15
let octal = 0o666//八进制 控制台输出438

console.log(binary, octal)
```
2. 判断是否是数字:Number.isFinite(无论是整形还是浮点型都返回true)
```
let a = 10/ 3
let b = 4 / 2 
console.log(a, Number.isFinite(a))//3.3333333333333335 true
console.log(b, Number.isFinite(b)) //2 true
console.log( Number.isFinite('字符串')) //false
console.log( Number.isFinite(NaN)) //false
console.log( Number.isFinite(undefined)) //false
console.log( Number.isFinite(null)) //false
```
3. 整形和浮点型转换:parInt parseFloat
>字符串第一位到不是数字（.）的字符停止
```
let a = 123.1
console.log(Number.parseInt(a)) //123
console.log(Number.parseFloat(a))//123.1
```
4. 判断是否是整数:Number.isInteger
```
let a = 123
let b = 'asdf'
let c = 123.1
console.log(Number.isInteger(a))//true
console.log(Number.isInteger(b))//false
console.log(Number.isInteger(c))//false
```
5. 判断NaN: Number.isNaN
```
console.log(Number.isNaN(23)) //false
console.log(Number.isNaN(NaN)) //true
```
6. 判断安全整数: NUmber.isSafeInterger 
```
console.log(Math.pow(2, 53))// 9007199254740992
console.log(Number.MAX_SAFE_INTEGER)// +9007199254740992
console.log(Number.MIN_SAFE_INTEGER)// -9007199254740992
console.log(Number.isSafeInteger(Math.pow(2,54)))//false
```
