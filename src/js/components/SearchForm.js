var React = require('react'),
    appApi = require('../utils/appApi'),
    AppActions = require('../actions/AppActions');
    SearchResults = require('./SearchResults.js');

var SearchForm = React.createClass({
    searchText(e){
        e.preventDefault();
        var search = {
            text: this.refs.search.value.trim()
        };
        AppActions.searchValue(search);
    },
    render(){
        return(
            <div>
                <form onSubmit={this.searchText} className="well">
                    <div className="form-group">
                        <label>Search for something...</label>
                        <input type="text" className="form-control" ref="search"/>
                    </div>
                </form>
            </div>
        )
    }
});
module.exports = SearchForm;