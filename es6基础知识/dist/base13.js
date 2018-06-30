'use strict';

/*
   我们知道json是一种数据结构，map数据结构和json类似，只不多map
   的键可以是多种数据类型，它的键可以是对象，可以是字符串等
*/
//------- map的声明
/*
let x = new Map()
x.set({ni: 'hao'}, 1)
x.set('sdf', [1, 2, 3])
console.log(x)//Map(2) {{…} => 1, "sdf" => Array(3)}
*/

//----- Map的方法
// set get delete clear has size
/*
//赋值
let myMap = new Map()
myMap.set({ojb: 1}, '对象是键，数字是值')
myMap.set('test', {ojb: 1})
console.log(myMap)//  Map(2) {{…} => "对象是键，数字是值", "test" => {…}}

*/

//取值
var json = {
   s: 'asdfsdf'
};

var x = new Map();
x.set(json, 1);
x.set('sdfs', json);
console.log(x); // Map(2) {{…} => 1, "sdfs" => {…}}


console.log(x.get(json)); //1 
console.log(x.get('sdfs')); //{s: "asdfsdf"}
console.log(x.size); //2
console.log(x.has(json)); //true
x.delete('sdfs');
console.log(x); // Map(1) {{…} => 1}
x.clear();
console.log(x);
