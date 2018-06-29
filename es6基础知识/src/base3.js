// ------ 数组的结构赋值
let [a1, a2, a3] = [1, 2, 3]
console.log(a1)
console.log(a2)
console.log(a3)
console.dir(window)

// ------- 数组模式要和变量模式统一
let [b1, [b2, b3], b4] = [1, [2, 3], 4]
console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)
console.dir(window)

//------- 解构赋值可以设置默认值
let [c1, c2 = 'something', c3] = ['向维星']
console.log(c1)
console.log(c2)
console.log(c3)

// ------ 默认中注意null和undefind的区别
let [d1, d2 = 1 ,d3 = 2] = ['something', null, undefined]
console.log(d1 + d2)//控制台显示somthingnull
console.log(d1 + d3)//控制台显示somthing2
//说明null代表把值解析为null，替代默认值
//undefind代表什么都没有，采取默认值

// ------- 对象的结构赋值
let obj = {bar: '苹果', foo: '香蕉'}
let {bar, foo } = obj
console.log(bar)
console.log(foo)

// ------ 字符串的结构赋值
// 字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。
let [e1, e2, e3] = 'dnf'
console.log(e1, e2, e3)







