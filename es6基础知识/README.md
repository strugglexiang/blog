#目录
- [1-利用babel将es6语法转换为es5](#1-利用babel将es6语法转换为es5)
- [2-新的声明方式](#2-新的声明方式)
- [3-变量的结构赋值](#3-变量的结构赋值)
- [4-扩展运算符和rest运算符](#4-扩展运算符和rest运算符)
- [5-字符串模板](#5-字符串模板)
- [6-数字操作](#6-数字操作)
- [7-数组方法拓展](#7-数组方法拓展)
- [8-箭头函数](#8-箭头函数)
- [9-函数和数组补漏](#9-函数和数组补漏)
- [10-对象的使用](#10-对象的使用)
- [11-学习Symbol数据类型](#11-学习Symbol数据类型)
- [12-学习Set和WeakSet](#12-学习Set和WeakSet)
- [13-学习Map数据结构](#13-学习Map数据结构)
- [14-学习Proxy](#14-学习Proxy)
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

## 3-变量的解构赋值
>解构赋值：es6允许我们从数组和对象中提取值赋值给变量
1. 数组的解构赋值：将数组中的值提取出来赋值给变量
```
// ------ 数组的解构赋值
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



```
2. 对象的解构赋值
```
let obj = {bar: '苹果', foo: '香蕉'}
let {bar, foo } = obj
console.log(bar) //输出苹果
console.log(foo) //输出香蕉
```
3. 字符串的解构赋值
```
字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。

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
console.log(arr1 === temp)//true
console.log(arr1 === arr2)//false 浅拷贝
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

## 7-数组方法拓展
1. json数组格式，类数组
```
let json = {
    '0': 'wo',
    '1': 'shi',
    '2': 'qin',
    '3': 'shou',
    'length':4
}
```
2. Array.from: 将类数组转换为数组，返回值为数组
```
let json = {
    '0': 'wo',
    '1': 'shi',
    '2': 'qin',
    '3': 'shou',
    'length':4
}

console.log(Array.from(json))//["wo", "shi", "qin", "shou"]
console.log(typeof Array.from(json))//object
```
3. Array.of： 将参数合并为数组，返回值为数组
```
console.log(Array.of(1, '2')) //[1, "2"]
```
4. Array实例.find(实例方法)： 在数组中查找元素，找到返回该元素，找不到返回undefined
> Array.includes()方法也有，只不过返回布尔值
```
let x = ['strugglexiang', 18374847135]
let s = x.find((item, index, array) => {
    return item === 'asdf'
})
let b = x.find((item, index, array) => {
    return item === 18374847135
})
console.log(s)//undefined
console.log(b)// number类型  18374847135
```
5. 实例方法fill: fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
>变动的是原数组，没有产生新数组
```
//用一个值从起止索引填充到终止索引(到终止的前一个)
//start 默认值为0
//end 默认值arr.length
let arr = ['apple', 'banana', 'egg']
let a = arr.fill('water', 0, 1)// ["water", "banana", "egg"]
let a = arr.fill('water', 0, 2)//(3) ["water", "water", "egg"]
let a = arr.fill('water', 0, 3)//["water", "water", "water"]
let a = arr.fill('water', 0, 4)//["water", "water", "water"]
```
6. for遍历数组
```
let arr = ['I', 'am', 'god']
//遍历值
for(let item of arr){
    console.log(item)
}
//遍历key keys()方法返回一个新的Array迭代器，它包含数组中每个索引的键。
console.log(arr.keys().next())//对象类型 {value: 0, done: false}
for(let key of arr.keys()){
    console.log(key)
}
//同时遍历key value
for(let [key, value] of arr.entries()){
    console.log(key + ':' + value)
}
```
7. 实例方法entries： 生成iterator形式的数组
```
let arr = ['I', 'am', 'god']
let x = arr.entries()
console.log(x)
console.log(x.next().value) // [0, "I"]
console.log(x.next().value)//  [1, "am"]
console.log(x.next().value)// [2, "god"]
```

## 8-箭头函数
1. 函数参数可以设置默认值
```
function add(a, b = 1){
    return a + b
}
console.log(add(1))// 输出结果 2
```
2. 如果使用别人的框架，不知道必需参数传几个
```
function add(a, b = 1){
    return a + b
}
console.log(add.length) //输出结果1
```
3. 箭头函数
> 箭头函数不能用作构造函数
>
> 要特别注意箭头函数里面this的指向
```
let add = (a, b) => a + b  //表达式作为返回值
let cut = (a, b) => {return a - b}  //函数体中写代码
console.log(add(1, 2)) //输出结果 3
```

## 9-函数和数组补漏
1. 对象的函数解构
> 当对象作为函数参数的时候，我们希望该对象的属性可以直接拿来使用
```
let json = {
    userName: 'xiaoming',
    age: 20,
}
function test( { userName, age}) {
     console.log(userName + age)    
}
test(json) // 输出结果： xiaoming20
```
2. 数组的函数解构
> 扩展运算符的运用，将数组转换为用逗号隔开的参数序列
```
function test(a, b){
    console.log(a + b)
}

test(...[3, 5])// 输出结果 8
```
3. in的用法
> in用来判断数组是否下标是否为空或对象是否包含某个属性
```
let arr = [1, 2, 3]
let json = {
    a: 'x',
    b: 'd'
}
console.log(2 in arr) // 输出结果 true
console.log(5 in arr) // 输出结果 false
console.log('a' in json)// 输出结果 true
console.log('x' in json)// 输出结果 false
```
4. 数组的遍历
> forEach filter(返回为true的新数组) some map(元素替换)



## 10-对象的使用
1. 对象的赋值
> 简化对象的赋值
```
let a = 'nihao'
let b = 'wohao'
let obj = {
    a,
    b,
    add(a, b){
       return a + b
    }
}
console.log(obj) //输出结果  {a: "nihao", b: "wohao", add: ƒ}
console.log(obj.add(1, 2)) // 输出结果 3


//和下面的写法是一样的
let obj1 = {
    a: a,
    b: b,
    add: function(a, b){
        return a + b
    }
}
console.log(obj1) //输出结果  {a: "nihao", b: "wohao", add: ƒ}
console.log(obj1.add(1, 2)) // 输出结果 3
```
2. 对象key值构建
> 当我们不知道属性的key，只知道value时，我们可以利用变量构建key
```
let some = 'hihao'
let obj = {
    [some]: 'hello'
}
console.log(obj)// 输出结果  {hihao: "hello"}
```
3. 对象的合并
> Obj.assign方法
```
let obj1 = {
    name: 'I',
}
let obj2 = {
    is: 'am',
}
let obj3 = {
    descriptor: 'ugly',
}

let obj4 = Object.assign(obj1, obj2, obj3)
console.log(obj4) //输出结果 {name: "I", is: "am", descriptor: "ugly"}
```

## 11-学习Symbol数据类型
> 对象的属性名都是字符串类型，如果我们使用框架或者别人的代码，对对象添加属性可能覆盖掉
> 原有的属性，造成污染，因此有了Symbol数据类型，代表了独一无二

1. Symbol在对象中的使用
> 由于Symbol不是字符串，不能使用.语法，只能使用[]取值
```
let x = Symbol()
let s = Symbol('s')
let b = Symbol('b')
let obj = {
    a: 'nihao',
    [x]: 'wohao'
}
console.log(obj)//{a: "nihao", Symbol(): "wohao"}
console.log(obj.x) // undefined Symbol类型的属性不能使用‘.’符号取值，只能使用中括号
console.log(obj[x])//wohao
console.log(b === s) //false
```
2. Symbol可在in遍历对象时保护对象属性
```
let x = Symbol('ta')
let obj = {
   ni: 'hao',
   wo: 'hao',
}
obj[x] = 'buhao'  //另一种给对象名为Symbol的写法
for (let value in obj){
    console.log(value)
}// 输出结果 
//ni
//wo
```

## 12-学习Set和WeakSet
1. Set
> Set是一种新的数据结构，和数组类似，区别在与它不允许有重复项 
- Set数据结构的创建
```
let x = new Set([1, 2, 3, 5, 2])
console.log(x) // 控制台上输出  Set(4) {1, 2, 3, 5}
x.add(2)
console.log(x)// 控制台输出 Set(4) {1, 2, 3, 5} 没有添加重复值
```
- Set的属性和方法：add,delete,has,clear,size(属性)
```
//add
let x = new Set([1, 2, 3, 1, 2])
x.add(5)
console.log(x)//  Set(4) {1, 2, 3, 5}


//delete
x.delete(1)
x.delete(188)
console.log(x)// Set(2) {2, 3}


//has
let x = new Set([1, 2, 3, 1, 2])
console.log(x.has(1)) //true
console.log(x.has(188))// false

//size
let x = new Set([1, 2, 3, 1, 2])
console.log(x.size)// 3
```
- Set的遍历
```
let x = new Set([1, 2, 3, 1, 2])
for(let item of x) {
     console.log(item) // 1 2 3 
}

x.forEach((item) => {
    console.log(item)// 1 2 3
})
```
- Set 和 扩展运算符数组去重 
```
console.log([...new Set([1,1,1,2,3,2])])// [1, 2, 3]
```
2. WeakSet
> WeakSet和set是一样的，区别在与它的成员只能是对象，没有size属性，不能够遍历
>
> 构造函数中不能添加参数
>
> WeakSet能够消除相同的引用
```
let w = new WeakSet()
w.add({hi: 'hao'})
w.add({hi: 'hao'})
console.log(w) // WeakSet {{…}, {…}}
```


## 13-学习Map数据结构
> 我们知道json是由键值对构成的数据结构，Map也是一种由特殊键值对构成的数据结构
>
> 区别在于Map的键可以是对象，字符串，数组，对应形式变得非常灵活
1. Map数据结构的声明: new Map
```
let x = new Map()
x.set({ni: 'hao'}, 1)
x.set('sdf', [1, 2, 3])
console.log(x)//Map(2) {{…} => 1, "sdf" => Array(3)}
```
2. Map的方法：set,get,delete,clear,has,size(属性)
> set赋值，get取值，delete删除特定，clear清空，has检测含有，size数量
```
let json = {
    s: 'asdfsdf'
}

let x = new Map()
x.set(json, 1)
x.set('sdfs', json)
console.log(x)// Map(2) {{…} => 1, "sdfs" => {…}}


console.log(x.get(json))//1   
console.log(x.get('sdfs'))//{s: "asdfsdf"}
console.log(x.size)//2
console.log(x.has(json))//true
x.delete('sdfs')
console.log(x) // Map(1) {{…} => 1}
x.clear()
console.log(x)// Map(0) {}

```

## 14-学习Proxy
> Proxy 代理 它能在对象和函数调用进行预处理，从而改变代码原有的意思
>
> 它接收两个对象作为参数，第一参数代表要被预处理的目标对象，第二个参数代表预处理的配置
>
> 在handler内部,Reflect就代表该Proxy对象，它能处理默认行为
1. 对象get(取值)预处理
> 接收3个参数 目标对象target 要取值的属性property Proxy对象本身(可选)
```
 let obj = {} //即target
 let handler = {
     get(target, key){
        if(key === 'name'){
            return '所有的姓名必需是我'
        }
        return 'sss'
     }
 }
 let x = new Proxy(obj, handler)
 console.log(x.name)// 输出结果 所有的姓名必需是我
 console.log(x.some)// 输出结果  sss
```
2. 对象set(赋值)预处理
> 接收4个参数 目标对象target 要赋值的属性property 要赋的值value Proxy对象本身(可选)
```
let obj = {}
let handler = {
    set(target, key, value){
       if(!Number.isInteger(value)){
          throw new Error('请赋值为数字')
       }
       target[key] = value + 3
       return true
    }
}
let x = new Proxy(obj, handler)
x.some = 5
console.log(obj.some) //8
x.some = 'asdf'// base14.js:35 Uncaught Error: 请赋值为数字
// x.some = 'sadf'

// x.give = 'asdf'
```
3. 函数apply(调用预处理)
> 接收3个参数 目标对象 目标对象上下文(this) 目标对象参数数组
```
function add(a, b){
    return a + b
}
let handler = {
    apply(target, ctx, args){
       if(args.includes(5)){
           return '参数中有5'
       }
       return Reflect.apply(...arguments)
    }
}
let x = new Proxy(add, handler)
console.log(x(1, 2)) //3
console.log(x(5, 6))  //参数中有5

```