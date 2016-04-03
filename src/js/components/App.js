var React = require('react'),
    ReactDOM = require('react-dom'),
    appApi = require('../utils/appApi'),
    SearchResults = require('./SearchResults.js'),
    AppStore = require('../store/AppStore');
    SearchForm = require('./SearchForm.js');

var App = React.createClass({
    getInitialState(){
        return getAppState()
    },
    componentDidMount(){
        AppStore.addChangeListener(this.onChange);
    },
    componentWillUnmount(){
        AppStore.removeChangeListener();
    },
    onChange(){
        this.setState(getAppState());
    },
    render(){
        return(
            <div>
                <SearchForm />
                <SearchResults searchText={this.state.searchText} results={this.state.results} />
            </div>
        )
    }
});
getAppState = function(){
    return {
        results: AppStore.getResults(),
        searchText: AppStore.getSearchText()
    };
};
module.exports = App;