'use strict';

/**
 * proxy 代理
 * 可以理解为预处理
 * 它能在对象和函数调用前进行预处理，从而改变代码原有的意思
 * Proxy构造函数接收两个对象作为参数，第一个参数代表被处理处理对象，第二个参数描述处理的详情
 * 即一个参数target，一个参数handler
 */

//--------- 对象的get(取值)处理
//接收3个参数 第一个目标对象target 第二个访问属性property 第三个该Proxy对象本身(可选)

var obj = {}; //即target
var handler = {
    get: function get(target, key) {
        if (key === 'name') {
            return '所有的姓名必需是我';
        }
        return 'sss';
    }
};
var x = new Proxy(obj, handler);
console.log(x.name); // 输出结果 所有的姓名必需是我
console.log(x.some); // 输出结果  sss


// --------------- 对象的set(赋值处理)
//接收4个参数 依次 target key value Proxy本身
/*
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
x.some = 'asdf'//  Uncaught Error: 请赋值为数字
*/

//--------- 函数的调用预处理apply
//方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组。
/*
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

*/
