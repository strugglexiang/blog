"use strict";

//--------- es6函数参数添加默认值
/*
function add(a, b = 1){
    return a + b
}
console.log(add(1))// 输出结果 2
*/

//-------- 如果使用别人框架不知道必需参数传几个
/*
function add(a, b = 1){
    return a + b
}
console.log(add.length) //输出结果1
*/

//  ------- 箭头函数
//箭头函数不能用作构造函数
var add = function add(a, b) {
    return a + b;
};
console.log(add(1, 2));
