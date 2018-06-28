'use strict';

// ---- 2进制与8进制声明方法
/*
let binary = 0b1111//二进制 控制台输出15
let octal = 0o666//八进制 控制台输出438

console.log(binary, octal)
*/

//------- 判断是否是数字
//无论是整型还是浮点型，都返回true，其他返回false

var a = 10 / 3;
var b = 4 / 2;
console.log(a, Number.isFinite(a)); //3.3333333333333335 true
console.log(b, Number.isFinite(b)); //2 true
console.log(Number.isFinite('字符串')); //false
console.log(Number.isFinite(NaN)); //false
console.log(Number.isFinite(undefined)); //false
console.log(Number.isFinite(null)); //false


//--------  整型，浮点型转换
/*
let a = 123.1
console.log(Number.parseInt(a)) //123
console.log(Number.parseFloat(a))//123.1
*/

//-------- 判断是否是整数
/*
let a = 123
let b = 'asdf'
let c = 123.1
console.log(Number.isInteger(a))//true
console.log(Number.isInteger(b))//false
console.log(Number.isInteger(c))//false
*/

//-------- 判断安全整数
//最大安全整数是2的53次方，最小安全整数相反
/*
console.log(Math.pow(2, 53))// 9007199254740992
console.log(Number.MAX_SAFE_INTEGER)// +9007199254740992
console.log(Number.MIN_SAFE_INTEGER)// -9007199254740992
console.log(Number.isSafeInteger(Math.pow(2,54)))//false
*/

//-------- 判断NaN
console.log(Number.isNaN(23)); //false
console.log(Number.isNaN(NaN)); //true
