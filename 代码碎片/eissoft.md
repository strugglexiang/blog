# 
arr.forEach(callback[, thisArg])
What is the usage of thisArg?
> thisArg refers to context which callback should be called, basically it is what this refers to inside callback

```js
var myObject = { name: 'myObject' };

[1,2].forEach(function(item) { 
 console.log(item); // 1, 2
 console.log(this === myObject); // true
}, myObject)
```

#
```
/**
 * 分转元 
 */
export const moneyFilter = function (value) {
    if (!value) { return '0.00' }
    let str = `${value}`
    // return str.replace(/(?!^)(?=\d{2}$)/, '.')
    let replaceStr = str.length === 2 ? '0.' : '.'
    return str.replace(/(?=\d{2}$)/, replaceStr)
}


/**
 * 反解析 
 * 元转分
 * 替换 提交时 * 100的 处理
 */
export const escapeMoney = function (value) {
    let str = `${value}`
    let dotReg = /\./
    let moneyReg = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/
    // 不是金额 返回原值
    if (!moneyReg.test(str)) {
        return value
    }
    // 只有整数部分
    if (!dotReg.test(str)) {
        return +`${str}00`
    } else {
        str = str.replace(/\.(\d{1,2})/, function (match, key) {
            // 有一位小数
            if (key && key.length === 1) {
                return key + '0'
            }
            // 有二位小数
            if (key && key.length === 2) {
                return key
            }
            return match
        })
        return +str
    }
}
```

#
```
class Routers {
  constructor() {
    this.routes = {};
    this.currentUrl = '';
    this.refresh = this.refresh.bind(this);
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }

  route(path, callback) {
    this.routes[path] = callback || function() {};
  }

  refresh() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
  }
}

window.Router = new Routers();
var content = document.querySelector('body');
// change Page anything
function changeBgColor(color) {
  content.style.backgroundColor = color;
}
Router.route('/', function() {
  changeBgColor('yellow');
});
Router.route('/blue', function() {
  changeBgColor('blue');
});
Router.route('/green', function() {
  changeBgColor('green');
});
```






