var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    assign = require('object-assign'),
    appApi = require('../utils/appApi'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var _searchText = '';
var _results = [];
var AppStore = assign({},EventEmitter.prototype,{
    addChangeListener(callback){
        this.on('change',callback);
    },
    removeChangeListener(callback){
        this.removeListener('change',callback);
    },
    emitChange(){
        console.log('emitter');
        this.emit(CHANGE_EVENT);
    },
    setSearchText(search){
        _searchText = search.text
    },
    getSearchText(){
        return _searchText;
    },
    setReceiveResults(results){
        _results = results;
    },
    getResults(){
        return _results;
    }

});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.SEARCH_CONTEXT:
            appApi.searchContext(action.search);
            AppStore.setSearchText(action.search);
            AppStore.emit(CHANGE_EVENT);
            break;
        case AppConstants.RECEIVE_RESULT:
            AppStore.setReceiveResults(action.results);
            AppStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

module.exports = AppStore;