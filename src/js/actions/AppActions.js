var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');
var AppActions = {
    searchValue(search){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.SEARCH_CONTEXT,
            search: search
        });
    },
    receiveResults(results){
        AppDispatcher.handleViewActions({
            actionType: AppConstants.RECEIVE_RESULT,
            results: results
        });
    }
};


module.exports = AppActions;