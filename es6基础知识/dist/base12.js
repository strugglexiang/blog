'use strict';

//---------- Set
/**
 *  Set是一种新的数据结构
 *  它和数组差不多，但是它不允许有重复值
 */
//----------- 创建方法
/*
let x = new Set([1, 2, 3, 5, 2])
console.log(x) // 控制台上输出  Set(4) {1, 2, 3, 5}
x.add(2)
console.log(x)// 控制台输出 Set(4) {1, 2, 3, 5} 没有添加重复值
*/

//---------------- Set的方法
//add
/*
let x = new Set([1, 2, 3, 1, 2])
x.add(5)
console.log(x)//  Set(4) {1, 2, 3, 5}
*/

//delete
/*
x.delete(1)
x.delete(188)
console.log(x)// Set(2) {2, 3}
*/

//has
/*
let x = new Set([1, 2, 3, 1, 2])
console.log(x.has(1)) //true
console.log(x.has(188))// false
*/

//size
/*
let x = new Set([1, 2, 3, 1, 2])
console.log(x.size)// 3
*/

//------------------- Set 的遍历
/*
let x = new Set([1, 2, 3, 1, 2])
for(let item of x) {
     console.log(item) // 1 2 3 
}

x.forEach((item) => {
    console.log(item)// 1 2 3
})
*/

// ---------------- Set结合扩展运算符数组去重
// console.log([...new Set([1,1,1,2,3,2])])// [1, 2, 3]


//------------------- WeakSet
// WeakSet 和 set 一样
// 区别在与WeakSet的成员只能是对象，没有size属性，不能够遍历
// WeakSet的成员对象都是弱引用类型，垃圾回收机制不会考虑到WeakSet有没有引用该对象
// WeakSet也能够去重，去掉想用的引用类型
/*
let x = new WeakSet({hi: 'hao'})
console.log(x) // WeakSet 不能在构造函数直接构建，只能通过add方法
*/

var w = new WeakSet();
w.add({ hi: 'hao' });
w.add({ hi: 'hao' });
console.log(w); // WeakSet {{…}, {…}}
