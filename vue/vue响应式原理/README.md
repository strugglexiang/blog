# 目录
- [1-vue响应式原理](#1-vue响应式原理)



## 1-vue响应式原理
响应式原理基于Object.define(object, propertyname, descriptor)方法
object: 要添加和修改属性的对象，必需
propertyname:要添加和修改的属性，必需
descriptor: 属性描述符。
```
let data = {}
let initValue = '初始值'
Object.defineProperty(data, 'title', {
    get() {
        return initValue
    },
    set(newValue){
        DOM.innerText = newValue
        initValue  = newValue
    }
})
这样改变 data对象title属性值，DOM元素的内容也随之变化
```