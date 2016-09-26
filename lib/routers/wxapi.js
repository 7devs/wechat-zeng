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
        var reContent = parser(data);

        // switch (content) {
        //     case '1':
        //     res.append('Content-Type','text/xml');
        //     res.send(xml({
        //         xml:[
        //             {ToUserName:{_cdata:data.fromusername}},
        //             {FromUserName:{_cdata:data.tousername}},
        //             {CreateTime: +new Date()},
        //             {MsgType:{_cdata:'text'}},
        //             {Content:{_cdata:'你刚刚回复了'+ reContent}}
        //         ]
        //     }));
        //         break;
        //
        //     case '2':
        //     res.append('Content-Type','text/xml');
        //     res.send(xml({
        //         xml:[
        //                 {ToUserName:{_cdata:data.fromusername}},
        //                 {FromUserName:{_cdata:data.tousername}},
        //                 {CreateTime: +new Date()},
        //                 {MsgType:{_cdata:'text'}},
        //                 {Content:{_cdata:'你刚刚回复了'+ content}}
        //             ]
        //         }));
        //         break;
        //
        //     case '3':
        //         res.append('Content-Type','text/xml');
        //         res.send(xml({
        //             xml:[
        //                     {ToUserName:{_cdata:data.fromusername}},
        //                     {FromUserName:{_cdata:data.tousername}},
        //                     {CreateTime: +new Date()},
        //                     {MsgType:{_cdata:'text'}},
        //                     {Content:{_cdata:'你刚刚回复了'+ content}}
        //                 ]
        //             }));
        //         break;
        //
        //     default:
        //     res.append('Content-Type','text/xml');
        //     res.send(xml({
        //         xml:[
        //                 {ToUserName:{_cdata:data.fromusername}},
        //                 {FromUserName:{_cdata:data.tousername}},
        //                 {CreateTime: +new Date()},
        //                 {MsgType:{_cdata:'text'}},
        //                 {Content:{_cdata:'输入的不对，再来！'}}
        //             ]
        //         }));
        // }

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
