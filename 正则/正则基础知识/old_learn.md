# 目录
- [1-字符](#1-字符)
- [2-字符集](#2-字符集)
- [3-预定义类](#3-预定义类)
- [4-边界](#4-边界)
- [5-量词](#5-量词)
- [6-分组](#6-分组)
- [7-修饰符](#7-修饰符)


## 1-字符
> 字符主要分普通字符、特殊字符(元字符)、和预定义字符
1. 普通字符:元字符包括数字(0-9)、字母(abcABC)、下划线(_),它就代表它本身的含义
2. 特殊字符:特殊字符在正则匹配中有特殊的含义，如果要匹配这些特么字符，需要在前面加转意字符‘/’  
```
特殊字符有 () [] {} ^ $ | ? * +  
例如：匹配[]
//[/]/
```
3. 预定义字符
```
\t	/\t/	制表符  	
\n	/\n/	回车符即换行符	
\f	/\f/	换页符		
\b	/\b/	与回退字符	
```

## 2-字符集
字符集用[]表示，匹配[]集合里面一个字符,它有两种写法
> 如果在[]的第一个位置使用^ ,代表除了的意思
```
1. 具体写法
[abcdefg] 匹配abcdefg中的一个

2. 范围写法
[A-Z] 匹配大写字母中的一个
[a-z] 配置小写字母中的一个
[0-9] 匹配数字中的一个
[a-zA-Z0-9_] 匹配所有普通字符

3. ^的使用
[^1-3] 除了1-3以外的所有字符

```

## 3-预定义类
预定义类规定的一些字符代表具体的含义
```
1. .   [^\n\r]		      	除了换行和回车之外的任意字符
2. \d  [0-9]			    数字字符
3. \D  [^0-9]			    非数字字符
4. \w  [a-zA-Z_0-9]			单词字符(所有的字母)
5. \W  [^a-zA-Z_0-9]		非单词字符
6. \s  [\t\n\x0B\f\r]       空白字符
7. \S  [^\t\n\x0B\f\r]      非空白字符
```
## 4-边界
1. ^ 起始位置，代表字符串必需以什么开始
```
/^1123/ 字符串必需以数字1开始
```
2. $ 结束位置，代表字符串必需以什么结束
```
/13$/ 字符串必需以数字3结束
```
3. \b 单词分隔符
```
/\bhello\/ 匹配hello 如果字符串是'hellossb' 则不会匹配
```


## 5-量词
1. ?: 出现0次或者0次
2. *: 出现0次或者多次
3. +：出现1次或者多次（至少出现1次）
4. {n}： 出现具体n次
5. {n,}： 至少出现n次
6. {n,m}: 出现n-m次

## 6-分组
分组符号：() |
1. ()：中括号只能匹配一个字符，分组后匹配多个字符
```
/(abc)/  sdfabc 这样就能匹配abc
```
2. |: 或者 在[]中更代表竖线
```
/(ab|cd)/ 匹配 ab或者cd
```

## 7-修饰符
1. g: 全局匹配
2. i：忽略大小写
3. m：多行匹配
