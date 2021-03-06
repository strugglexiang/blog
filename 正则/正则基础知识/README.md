# 避不开的弱点
很早之前，我就写过一篇简短的[正则基础学习文章](./old_learn.md)，但那仅仅是入门的记录，后来就没有后续了。过了一年，就忘记得差不多了。从这里开始重学正则表达式。

本系列很大程度上参照[掘金老姚的正则教学](https://juejin.im/post/5965943ff265da6c30653879)，本人在多次拜读该篇文章后收获良多。建议直接去阅读老姚的原文。

有的朋友可能会问，既然老姚的教学文章写得这么出色，自己模仿得又很粗糙，又何必再去模仿一遍呢？。这其实和**开发者总是喜欢重复造轮子**是一样的道理，别人的东西再好也是别人的。“浏览教程千万遍，不如自己照着实践一遍。”

# 目录
- [1-正则表达式字符匹配攻略](./1-正则表达式字符匹配攻略.md)
- [2-正则表达式位置匹配攻略](./2-正则表达式位置匹配攻略.md)
- [3-正则表达式中括号的作用](./3-正则表达式中括号的作用.md)
- [4-正则表达式回溯法原理](./4-正则表达式回溯法原理.md)
- [5-正则表达式的拆分](./5-正则表达式的拆分.md)
- [6-正则表达式的构建](./6-正则表达式的构建.md)
- [7-正则表达式编程](./7-正则表达式编程.md)


# 知识积累
1. js String特殊字符    
    
| 字符 | 意义 |
| - | - |
| \0 | Null字节 空字符|
| \b | 退格符 |
| \f | 换页符 |
| \n | 换行符 |
| \r | 回车符 |
| \t | tab 水平制表符 十六进制表示为 \0x09 |
| \v | 垂直制表符 十六进制表示为 \0x0B |
| \' | 单引号 |
| \" | 双引号 |
| \\\\ | 反斜杠符号 |

空字符：是指'\0'，或者是字符的ASCII码编码值为0的字符。  
空白字符：是指在屏幕不会显示出来的字符，如空格，制表符tab，回车换行等。   


# 参考链接
[MDN Regular expressions](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)  
[MDN Grammar_and_Types](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_Types)  
[掘金老姚](https://juejin.im/post/5965943ff265da6c30653879)  
[正则表达式30分钟入门教程](http://deerchao.net/tutorials/regex/regex.htm)   

# 资源
[《JS 正则迷你书》](https://github.com/qdlaoyao/js-regex-mini-book)
