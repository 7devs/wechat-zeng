modul.exports = function(event, eventKey){
    var reContent;
    switch (event.toLowerCase) {
        case 'CLICK':
            switch (eventKey) {
                case 'menu1':
                        reContent = 'menu1 clicked';
                    break;
                case 'menu2':
                        reContent = 'menu2 clicked';
                    break;
                default:
                        reContent = '...'

            }
            break;
        default:
            reContent = event;
            break;

    }
    return reContent;
}