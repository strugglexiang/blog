'use strict';

//------ 类数组转换为数组
/*
let json = {
    '0': 'wo',
    '1': 'shi',
    '2': 'qin',
    '3': 'shou',
    'length':4
}

console.log(Array.from(json))//["wo", "shi", "qin", "shou"]
console.log(typeof Array.from(json))//object
*/

//-------- 合并数组
/*
console.log(Array.of(1, '2')) //[1, "2"]
*/

//-------- 查找返回数组中元素
/*
let x = ['strugglexiang', 18374847135]
let s = x.find((item, index, array) => {
    return item === 'asdf'
})
let b = x.find((item, index, array) => {
    return item === 18374847135
})
console.log(s)//undefined
console.log(b)// number类型  18374847135
*/

//------------- 实例方法fill填充
/*
//用一个值从起止索引填充到终止索引
let arr = ['apple', 'banana', 'egg']
let a = arr.fill('water', 0, 1)// ["water", "banana", "egg"]
let a = arr.fill('water', 0, 2)//(3) ["water", "water", "egg"]
let a = arr.fill('water', 0, 3)//["water", "water", "water"]
let a = arr.fill('water', 0, 4)//["water", "water", "water"]
*/

//--------------  数组遍历
/*
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
*/

//------- entries
/*
let arr = ['I', 'am', 'god']
let x = arr.entries()
console.log(x)
console.log(x.next().value) // [0, "I"]
console.log(x.next().value)//  [1, "am"]
console.log(x.next().value)// [2, "god"]
*/

var arr = ['I', 'am', 'god'];
var x = arr.keys();
console.log(x);
console.log(x.next());
console.log(x.next());
console.log(x.next());
