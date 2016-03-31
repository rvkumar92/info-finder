var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants'),
    assign = require('object-assign'),
    appApi = require('../utils/appApi'),
    EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

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

});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){

    }
    return true;
});

module.exports = AppStore;