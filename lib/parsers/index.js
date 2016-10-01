module.exports = function(data){
    var msgType = data.msgtype;
    var content = data.content;
    var txt = data.recognition;

    var reContent;
    switch (msgType) {
        case 'text':
            reContent = require('./text-parser.js')(data.content);
            break;
        case 'voice':
            reContent = require('./voice-parser.js')(data.recognition);
            break;
        case 'event':
            reContent = require('./event-parser.js')(data);
            break;
        case 'location':
            break;
        case 'shortvideo':

            break;
        default:
            reContent = 'I have no idea.';
            break;

    }


    return reContent;
}
