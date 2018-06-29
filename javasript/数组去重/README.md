# 目录
- [1-es5写法](#1-es5写法)
- [2-es6写法](#2-es6写法)

## 1-es5写法
```
        let arr = ['java', 'php', 1, 2, 1, 'java']
        function uniqueArr(arr){
            var temp = []
            for(var i = 0; i < arr.length; i++){
                if(!temp.includes(arr[i])){
                    temp.push(arr[i])
                }
            }
            return temp
        }
        let way1 = uniqueArr(arr)
        console.log(way1)// 输出结果 ["java", "php", 1, 2]
```

## 2-es6写法
set方法可以将数组和对象转化为类数组对象，并自动去掉重复项目
Array.from 将类数组转化为数组
```
        let arr = ['java', 'php', 1, 2, 1, 'java']
        let way2 = Array.from(new Set(arr))
        console.log(way2)//输出结果 ["java", "php", 1, 2]
        console.log(way2 === arr)// 输出false 说明返回新数组
```