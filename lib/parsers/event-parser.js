var conf = require('../config'),
    wechat = require('../wechat');

module.exports = function(data){
    // var event = data.event.toLowerCase();
    // var eventKey = data.eventkey;
    var reContent;
    var eventKey = data.eventkey;
    switch (data.event.toLowerCase()) {
        case 'click':
            switch(eventKey){
                case 'menu1':
                    reContent = 'menu1 is clicked';
                    break;
                case 'menu2':
                    reContent = 'menu2 is clicked';
                    wechat.sendByTemplate(data.fromusername, conf.wechat.template.test, {
                        content{
                            color:'#ff0000',
                            value:'测试内容'
                        }
                    });
                    break;

                default:
                    reContent = 'hahaha';
                    break;
            }//这里去掉了;
            break;

        case 'scancode_push':
            break;
        default:
            reContent = '再检查下';
            break;

    }
    return reContent;
}
