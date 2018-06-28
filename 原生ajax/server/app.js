let express = require('express')
let app = express()

//---- 引入中间件
var logger = require('morgan');
var bodyParser = require('body-parser')


//使用中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//跨域处理
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // next();
    if (req.method == 'OPTIONS') {
        res.end('OK')
    }
    else {
        next()
    }
});


//---- 简单接口配置
// (req.query)
app.get("/get", function(req, res, next){
      console.log(req.body)
      console.log(req.query)
      return res.json({
          status: 1,
          msg: 'get方法响应'
      })
})


// (req.body)
app.post("/post", function(req, res, next){
    console.log(req.body)
    console.log(req.query)
    return res.json({
        status: 1,
        msg: 'post方法响应'
    })
})

app.listen(3000)