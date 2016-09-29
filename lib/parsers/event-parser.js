var conf = require('../config'),
    wechat = require('../wechat');

module.exports = function(data){
    // var event = data.event.toLowerCase();
    // var eventKey = data.eventkey;
    var reContent;
    switch (data.event.toLowerCase()) {
        case 'click':
            reContent = 'have a good time';
            wechat.sendByTemplate(data.fromusername, conf.wechat.template.test, {
                content:{
                    color:'#ff0000',
                    value:'测试内容'
                }
            });
            // switch (eventKey) {
            //     case 'menu1':
            //             reContent = 'menu1 clicked';
            //         break;
            //     case 'menu2':
            //             reContent = 'menu2 clicked';
            //         break;
            //     default:
            //             reContent = '...';
            //             break;
            // };
            break;
        case 'scancode_push':

        default:
            reContent = '再检查下';
            break;

    }
    return reContent;
}
