// ---------- 字符串模板
/*
let obj = {
    name: 'some',
    age: 18
}
let a = 3
let b = 5
let str1 = `我的名字是${obj.name},我的姓名是${obj.age}`// 支持获取变量
let str2 = `<b>我</b>非常</br>高兴` //支持html
let str3 = `${a + b}`//支持运算
document.write(str2) 
console.log(str1)//我的名字是some,我的姓名是18
console.log(str3)//8 类型是字符串
*/

//------------ 字符串新方法
let str = '我的名字是some,我的姓名是18'
console.log(str.indexOf('some') > 0)//true
console.log(str.includes('some'))//true
console.log(str.includes('你好'))//false
console.log(str.startsWith('我的'))//true
console.log(str.startsWith('你的'))//false
console.log(str.endsWith('18'))//true
console.log(str.endsWith(18))//true
console.log(str.endsWith('123'))//false


let copestr = '是付'
console.log(copestr.repeat(3))//是付是付是付
