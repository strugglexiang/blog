//------ 对象的赋值
/*
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
*/


//------------ 对象key值的构建
/*
let some = 'hihao'
let obj = {
    [some]: 'hello'
}
console.log(obj)// 输出结果  {hihao: "hello"}
*/


//--------- 对象的合并
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