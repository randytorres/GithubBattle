var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		console.log('getInitialState');
		return {
			isLoading: true,
			playerInfo: []
		}
	},
	componentWillMount : function() {
		console.log('componentWillMount')
	},
	componentDidMount: function() {
		var query = this.props.location.query;
		// Fetch info from github then update state -- console.log(query)
	  console.log('componentDidMount')
	},
	componentWillReceiveProps: function() {
		console.log('consoleWillReceiveProps')
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount')
	},
	render: function() {
		return (
			<ConfirmBattle
				isLoading={this.state.isLoading}
			  playersInfo={this.state.playerInfo} />
		);
	}
});

module.exports = ConfirmBattleContainer;