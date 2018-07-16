## 1-应用场景
1. 最外层一个大的div作为box
2. 这个box有个固定高度的head部分和撑满其余部分的content部分
3. 现content内容部分要求在剩余高度内按滚动条滚动

## 2-方案1: js计算
- box: overflow设置为hidden
- contetn: ovflow-y设置为scroll
- 在js里面初始化content的高度为box-clientHeight - head.clientHeight
css
```
        .box {
            width: 600px;
            height: 500px;
            margin: 0 auto;
            border: 1px solid #ccc;
            overflow: hidden;
        }
        .head {
            height: 50px;
            text-align: center;
            line-height: 50px;
        }
        .content {
            background-color: red;
            height: 100%;
            overflow-y: scroll;
        }
```
html
```
   <div class="box">
       <div class="head">头部内容</div>
       <div class="content">
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>内容</p>
           <p>最后的内容行</p>
        </div> 
   </div>
```
js
```
       let Obox = document.querySelector('.box')
       let Ohead = document.querySelector('.head')
       let Ocontent = document.querySelector('.content')
       Ocontent.style.height = Obox.clientHeight - Ohead.clientHeight + 'px'
```


## 2-方案2：利用FlexBox
1. box: display: flex; flex-direction: column; overflow: hidden;
2. .head: height: 40px;
3. .content: flex: 1; overflow-y: auto;
html
```
    <div class="box">
        <div class="head">头部标题</div>
        <div class="content">
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>最后一行</p>
        </div>
    </div>
```
css
```
        .box {
            width: 600px;
            height: 400px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid #ccc;
            margin: auto;
        }
        .head {
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .content {
            flex: 1;
            background-color: sienna;
            overflow-y: auto;
        }
```
