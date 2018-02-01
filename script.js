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
	console.log("stworzenie komponentu w React i przygotowanie do renderowania")
	},

	componentDidMount: function() {
	console.log("komponent został utworzony i uruchomiona funkcja render, obiekty są już widoczne i można wprowadzać lub pobierać dane")
	},

	componentWillReceiveProps: function() {
	console.log("aktualizacja propsów, przekazanie propsów np. z innego komponentu")
	},

	schouldComponentUpdate: function() {
	console.log("sprawdzenie czy wprowadzenie nowych stanów czy właściwości mają spowodować ponowne przerenderowanie komponentu")
	},

	componentWillUpdate: function() {
	console.log("aktualizacja/przerenderowanie komponentu w wyniku otrzymania nowych właściwości")
	},

	componentDidUpdate: function() {
	komponent po przrenderowaniu, widoczne są obiekty i można wprowadzać lub pobierać dane
	},

	komponentWillUnmount: function() {
	console.log("")
	}
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