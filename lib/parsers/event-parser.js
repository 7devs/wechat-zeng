modul.exports = function(data){
    var event = data.event.toLowerCase();
    var eventKey = data.eventkey;
    var reContent;
    switch (event) {
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
            }
            break;
        default:
            console.log(99999,event,eventKey,data);
            reContent = JSON.stringify(data);
            break;

    }
    return reContent;
}
