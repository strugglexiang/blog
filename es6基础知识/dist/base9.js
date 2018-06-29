'use strict';

//------------ 对象的函数解构
//有的时候我们希望当对象作为函数参数时，对象的属性可以直接拿来用
/*
let json = {
    userName: 'xiaoming',
    age: 20,
}
function test( { userName, age}) {
     console.log(userName + age)    
}
test(json) // 输出结果： xiaoming20
*/

// ----------- 数组的函数解构
//扩展运算符的一种用法
/*
function test(a, b){
    console.log(a + b)
}

test(...[3, 5])// 输出结果 8
*/

//------ in 的用法
// in 判断数组中是否存在某个值，或对象中是否存在某个属性,返回值为布尔值，和include很像
var arr = [1, 2, 3];
var json = {
    a: 'x',
    b: 'd'
};
console.log(2 in arr);
console.log(5 in arr);
console.log('a' in json);
console.log('x' in json);
