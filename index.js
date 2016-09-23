var app = require('express')(),
    bodyParser = require('body-parser');

//定义中间件
app.use(bodyParser.urlencoded({
    extended:false
}));


// 开放一个入口给微信，定义路由
app.use('/wxapi',require('./lib/routers/wxapi.js'));


//监听端口
app.listen(8010,function(err){
    console.log('listening at 8010...')
});
