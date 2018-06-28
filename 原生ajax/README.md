# 目录
- [1-get方法提交](#1-get方法提交)
- [2-post方法提交](#2-post方法提交)
* * *
## 1-get方法提交
1. 状态值
```
        0 （未初始化）对象已建立，但是尚未初始化（尚未调用open方法）
        1（初始化）已调用send()方法，正在发送请求
        2（发送数据）send()方法调用完成，但是当前的状态及http头未知
        3（数据传送中）已接收部分数据，因为相应及http头不全，这时通过responseText获取部分数据会出现错误
        4（完成）数据接收完成，此时可以通过responseText获取完整的数据
```
2. json转换
```
JSON.parse()     字符串转对象
JSON.stringify() 对象转字符串
```
3. get写法
```
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () = {
    if(xhr.readyState === 200 && xhr.status === 200){
        console.log(xhr.responseText)
    }//readyState 准备状态   status 请求状态
}
xhr.open('GET', 'http://localhost:3000/get?x=1', true)
xhr.send()


open() 这个方法有三个参数，open("提交方式 get/post","资源的地址",异步或者同步 true/false);
```

## 2-post方法提交
```
const xhr = new XMLHttpRequest()
const data = {
    name:'xiaopan',
    age:'22'
}
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(JSON.parse(xhr.responseText))
    }
}
xhr.open('post', 'http://localhost:3000/post', true)
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencouded')
xhr.send(`username=${data.name}&age=${data.age}`)
```