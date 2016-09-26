module.exports = function(content){

        var reContent;
        // reContent = JSON.stringify(data);


        switch (content) {
            case '1':
                reContent = '111';
                break;

            case '2':
                reContent = '222';
                break;
            case '3':
                reContent = '333';
                break;
            case '4':
                reContent = '444';
                break;
            default:
                reContent = '没有写对哟，重新来过';
                break;
        }

        return reContent;
}
