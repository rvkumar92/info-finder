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
                <SearchResults />
            </div>
        )
    }
});
getAppState = function(){
    return {

    };
};
module.exports = App;