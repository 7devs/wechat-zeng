var router = require('express').Router(),
    xml = require('xml'),
    parser = require('../parsers'),
    xmlBodyParser = require('express-xml-bodyparser');



router.route('/')
    .get(function(req,res,next){
        var str = req.query.echostr;
        res.send(str);
    })

    .post(xmlBodyParser({
        explicitArray:false
    }),function(req,res,next){
        var data = req.body.xml;
        //把xml解析成object的数据
        var reContent = parser(data);
        //对reContent进行赋值，用parser去处理data

        res.append('Content-Type','text/xml');
        res.send(xml({
            xml:[
                {ToUserName:{_cdata:data.fromusername}},
                {FromUserName:{_cdata:data.tousername}},
                {CreateTime: +new Date()},
                {MsgType:{_cdata:'text'}},
                {Content:{_cdata: reContent}}
            ]
        }));
    });


module.exports = router;
