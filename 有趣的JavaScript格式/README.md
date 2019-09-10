# 前言
前端工作中总会接触到与**文件**相关的动作，例如**上传**、**文件数据处理**等。每当这个时候我是比较痛苦的，总不能任何时候都去找插件吧，尤其是有些业务非常简化的情况下。本文就来探究一下神奇的`JavaScript`格式。
<!-- more -->


# 知识手册
[Blob]: https://developer.mozilla.org/zh-CN/docs/Web/API/Blob 
[File]: https://developer.mozilla.org/zh-CN/docs/Web/API/File  
[FileReader]: https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader 
[URL.createObjectURL]: https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL 
[ArrayBuffer]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer 
[MIME类型]: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types
[DataURLs]: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/data_URIs

[Blob][Blob]   
[File][File]   
[FileReader][FileReader]   
[URL.createObjectURL][URL.createObjectURL]   
[ArrayBuffer][ArrayBuffer]   
[DataURLs][DataURLs]  
[MIME类型(媒体类型)][MIME类型]   



# 笔记
## Blob
**Blob(binary large object)**，二进制大对象，是一个可以存储二进制数据的容器。

### Blob从哪里来
Blob一般来源于以下几个场景。   
* 通过`Blob()`构造函数创建
```js
    var blob = new Blob( array, options )
```

* 前端表单元素
```HTML
    <input type="file" id='testFile' name='testFile'>
```
需要注意的是，`input`元素选取出来的对象其实是`File`对象。`File`对象继承于`Blob`，它是一种特殊的`Blob`对象。但它们的在前端的意义是一样的，都是**二进制文件的容器**。

* 从`canvas`中获取

### Blob有什么用
Blob可以让前端人员在浏览器(当前document)生成一个**临时文件**，使用`URL.createObjectURL(Blob)`获取这个文件的链接，然后你就能像服务器资源一样使用它。

```js
let testB = new Blob(['Hello, world!'])
let url = URL.createObjectURL(testB)
console.log(url)
//blob:chrome-search://local-ntp/4d78a325-7fc4-4a32-b0c8-27b93bab0dc0
```
这个临时文件的生命周期和页面(document)绑定，只要不关闭页面，它将一直存在于内存中，因此有时需要主动释放.

```js
URL.revokeObjectURL(url)
```

### 从Blob中读取数据
从`Blob`中读取数据的唯一方法是使用`FileReader`，FileReader可以将Blob读取成不同格式的内容。

通过`FileReader`对象将`Blob`读取成`ArrayBuffer`，我们可以看到计算机储存数据的本质 —— 二进制。

```js
let blob = new Blob(['hello world'])
let reader = new FileReader()
reader.addEventListener('loadend', function(e) {
    console.log(reader.result)
})
reader.readAsArrayBuffer(blob)
```

## ArrayBuffer
`ArrayBuffer`对象用来表示通用的、固定长度的原始二进制数据缓冲区。 

ArrayBuffer 类似数组，每一格放入 1Byte（8bit）数据，也就是八位的 0 或 1，所以换成十进制一格最大是255
> ArrayBuffer不能直接操作，而是要通过类型数组对象(如下图)或 DataView 对象来操作
> 它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。

**类型数组对象**
![](http://source.strugglexiang.xyz/Fqf6mcQzr-qR965-KIHHqJfjW1P1)


```js
//创建buffer(数据缓冲区)
let a = new ArrayBuffer(2)
//创建视图
let arrtype = new Uint8Array(a)
//buffer中存入二进制
arrtype[0] = 254
arrtype[1] = 1
console.log(a)
```

![](http://source.strugglexiang.xyz/typeArray.png)


## canvas与buffer
canvas 可以通过 ctx.createImageData() 得到 ImageData   
ImageData.data 就是一个 Uint8ClampedArray，里面顺序放着图片每一个像素的 rgba 值。
> 上面这段话作者从参考链接中直接搬运。。。。。。





## Data URLs
参考[DataURLs][DataURLs] 

Data URLs: 即前缀为`data:`协议的URL地址，它允许创建者向文档中注入小文件。

它的格式是:
```
data: [mediatype][;base64],<data>
```
* [MIME类型(媒体类型)][MIME类型]是一个MIME 类型的字符串，例如 "image/jpeg"，用来表示后面数据`data`的性质和格式。默认text/plain。
* base64: 将数据`data`编码的一种方式
* data: 文件数据


例：
* 插入文本: data:,Hello%2C%20World! 
* 文本base64编码: data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D
* 文档嵌入HTML: data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E
* 文档嵌入执行js的HTML: data:text/html,<script>alert('hi');</script>


### base64编码方式
base64编码：用`[A-Za-z0-9+/]`64字符(再加上末尾垫字=，其实是65个)作为基本的字符集，其他所有符号都转换为
这个集合中的字符。

转换思维主要分4步：
1. 拿到被转换数据的所有2进制字节
2. 将每3个8bit字符(24个进制位)分为4组(每组6个进制位)
3. 每组(6字节)前面补00，变为32位,即变为4字节。
4. 根据下表得找到对应的base编码值
![](http://source.strugglexiang.xyz/FpDkhhQMyKap9r1_P4eNqNJzSHvP)

这个表看似复杂，其实就是下面`base64数组`的`键值对`关系
```js
let codeArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
let base64 = codeArray.split('')
```

>特别要注意的是如果 bit 数不能被 3 整除，需要在末尾添加 1 或 2 个 byte（8 或 16bit），并且末尾的 0 不使用 A 而使用 =，这就是为什么
>base64 有的编码结果后面会有一或两个等号。

> 可以知道，每3个字节变为了4个字节，所以对象体积会变大为原来的4/3

* * *
从IE10+浏览器开始，所有浏览器就原生提供了Base64编码解码方法
```
let a = 'hello world'
//编码
let base64 = window.btoa(a) //aGVsbG8gd29ybGQ=
//解码
let originData = window.atob(base64)
```

* * *
利用`FileReader.readAsDataURL`，我们可以得到任意文件的`Base64 Data-URI`
```js
var reader = new FileReader();
reader.onloadend = function(e) {
  // e.target.result就是该文件的完整Base64 Data-URI
};
reader.readAsDataURL(file);
```


* * * 
**自写方法实现base64的编码和解码**




















# 参考源
[不知名大佬博客](https://ssshooter.com/2019-04-18-js-format-transform/#canvas-%E4%B8%8E-buffer) </br>
[阮一峰base64](http://www.ruanyifeng.com/blog/2008/06/base64.html) </br>
[张鑫旭base64](https://www.zhangxinxu.com/wordpress/2018/08/js-base64-atob-btoa-encode-decode/) </br>
