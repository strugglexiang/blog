'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// ------ 数组的结构赋值
var a1 = 1,
    a2 = 2,
    a3 = 3;

console.log(a1);
console.log(a2);
console.log(a3);
console.dir(window);

// ------- 数组模式要和变量模式统一
var b1 = 1,
    b2 = 2,
    b3 = 3,
    b4 = 4;

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.dir(window);

//------- 解构赋值可以设置默认值
var _ref = ['向维星'],
    c1 = _ref[0],
    _ref$ = _ref[1],
    c2 = _ref$ === undefined ? 'something' : _ref$,
    c3 = _ref[2];

console.log(c1);
console.log(c2);
console.log(c3);

// ------ 默认中注意null和undefind的区别
var d1 = 'something',
    _ref2 = null,
    d2 = _ref2 === undefined ? 1 : _ref2,
    _undefined = undefined,
    d3 = _undefined === undefined ? 2 : _undefined;

console.log(d1 + d2); //控制台显示somthingnull
console.log(d1 + d3); //控制台显示somthing2
//说明null代表把值解析为null，替代默认值
//undefind代表什么都没有，采取默认值

// ------- 变量的结构赋值
var obj = { bar: '苹果', foo: '香蕉' };
var bar = obj.bar,
    foo = obj.foo;

console.log(bar);
console.log(foo);

// ------ 字符串的结构赋值
// 字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象。

var _dnf = 'dnf',
    _dnf2 = _slicedToArray(_dnf, 3),
    e1 = _dnf2[0],
    e2 = _dnf2[1],
    e3 = _dnf2[2];

console.log(e1, e2, e3);
