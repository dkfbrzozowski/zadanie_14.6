var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},
	
	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},
/*
	componentWillMount: function() {

	},

	componentDidMount: function() {

	},

	schouldComponentUpdate: function() {

	},

	componentWillUpdate: function() {

	},

	componentDidUpdate: function() {

	},
*/
	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.increment}, 'Zwiększ'),
			React.createElement('button', {onClick: this.decrement}, 'Zmniejsz'),
			React.createElement('span', {}, this.state.counter)
			);
	}
});

var element = React.createElement('div', {},
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter, {})
);

//var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));