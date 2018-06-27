"use strict";

// -------- 函数中参数不确定的情况
/*
function test(...arg){
    console.log(typeof arg) //objest
    console.log(arg)//[1, 2, 3 , 4]
    console.log(arg[0])//1
    console.log(arg[1])//2
    console.log(arg[2])//3
    console.log(arg[3])//4
}
test(1,2,3,4)
*/

// --------- 部分参数形成数组
/*
function test(a, ...arg){
    console.log(a) //1
    console.log(arg)//[2, 3, 4]

}
test(1, 2, 3, 4)
*/

//--------- 数组转参数序列
/*
function test(x, y){
    console.log(x) // 8
    console.log(y) // 4
    return x + y 
}

console.log(test(...[8, 4])) //12
*/

// ---------- 替代apply方法
/*
console.log(Math.max.apply(null, [2, 5, 4, 11, 1]))//es5的写法 输出11
console.log(Math.max(...[2, 5, 4, 11, 1]))//es6的写法 输出11
*/

//---------- 生成数组
/*
let arr1 = [1, 2, 3]
let temp = arr1
let arr2 = [...arr1, 4, 5, 6]
console.log(arr2)//[1, 2, 3, 4, 5, 6]
console.log(arr1 === temp)//false 浅拷贝
console.log(arr1 === arr2)//true 
*/

// -------- 和并数组
/*
let arr1 = [1, 2]
let arr2 = [3, 4]
let arr3 = [...arr1, ...arr2]
console.log(arr3)//[1, 2, 3, 4]
*/

// --------- 配合解构赋值
var a = 1,
    b = [2, 3, 4, 5];

console.log(a);
console.log(b);
