var React = require('react'),
    appApi = require('../utils/appApi'),
    Result = require('./Result');

var SearchResults = React.createClass({
    render(){
        if(this.props.searchText!=''){
            var resultForm = <h2 className="page-header">Results for {this.props.searchText}</h2>
        }else{
            var resultForm = '';
        }
        return(
            <div>
                {resultForm}
                {
                    this.props.results.map((result,i)=>{
                        return <Result key={i} result={result}/>
                    })
                }
            </div>
        )
    }
});
module.exports = SearchResults;