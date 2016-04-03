var React = require('react'),
    appApi = require('../utils/appApi'),
    SearchResults = require('./SearchResults.js');

var SearchForm = React.createClass({
    render(){
        return(
            <div>
                <form className="well">
                    <div className="form-group">
                        <label>Search for something...</label>
                        <input type="text" className="form-control" ref="text-search"/>
                    </div>
                </form>
            </div>
        )
    }
});
module.exports = SearchForm;