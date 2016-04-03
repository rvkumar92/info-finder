var React = require('react'),
    appApi = require('../utils/appApi');

var Result = React.createClass({
    render(){
        return(
            <div>
                <p className="content lead" dangerouslySetInnerHTML={{__html:this.props.result.Result}}></p>
            </div>
        )
    }
});
module.exports = Result;
