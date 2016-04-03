var AppActions = require('../actions/AppActions');
module.exports = {
    searchContext(search){
        $.ajax({
            url: 'https://api.duckduckgo.com/?q='+search.text+'&format=json&pretty=1',
            dataType: 'jsonp',
            cache: false,
            success: function(data){
                AppActions.receiveResults(data.RelatedTopics);
            }.bind(this),
            error: function(xhr,status,error){
                console.log(error);
            }.bind(this)
        });
    }
};