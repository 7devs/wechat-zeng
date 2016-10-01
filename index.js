var app = require('express')(),
    conf = require('./lib/config.js'),
    wechat = require('./lib/wechat.js'),
    bodyParser = require('body-parser');

//定义中间件
app.use(bodyParser.urlencoded({
    extended:false
}));


wechat(conf.wechat);//初始化，接受配置。在config.js里面，定义了wechat是什么
wechat.createMenu(require('./lib/menu.json'));

// 开放一个入口给微信，定义路由
app.use('/wxapi',require('./lib/routers/wxapi.js'));


//监听端口
app.listen(8010,function(err){
    console.log('listening at 8010...')
});
