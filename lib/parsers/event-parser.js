module.exports = function(event, eventKey){
    // var event = data.event.toLowerCase();
    // var eventKey = data.eventkey;
    var reContent;
    switch (event.toLowerCase()) {
        case 'click':
            switch (eventKey) {
                case 'menu1':
                        reContent = 'menu1 clicked';
                    break;
                case 'menu2':
                        reContent = 'menu2 clicked';
                    break;
                default:
                        reContent = '...'
                        break;
            };

        default:
            reContent = event;
            break;

    }
    return reContent;
}
