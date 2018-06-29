/*
   对象的属性名都是字符串，当我们使用框架或者别人写的代码的时候，
   添加属性可能因为属性名相同而覆盖别人的代码，造成污染，
   因此有了Symbol这种数据类型，表示独一无二
   Symbol函数的参数代表对生成的Symbol值的描述，即使参数相同，也不相等
*/
/*
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
*/

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