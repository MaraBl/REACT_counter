var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount() {
        console.log('before first render');
    },
    componentDidMount: function () {
        console.log('shows components on page');
    },
    shouldComponentUpdate: function() {
        console.log('is invoked before rendering when new props or state are being received. Return true or false')
        return true;
    },
    componentDidUpdate: function () {
        console.log( 'is invoked immediately after updating occurs');
    },
    componentWillUnmount: function () {
        console.log('This method is called when a component is being removed from the DOM');
    },
    increment: function() {
        this.setState({
            counter: this.state.counter+1
        });
    },
    decrement: function() {
        this.setState ({
            counter: this.state.counter-1
        });
    },

    render: function() {
        return  React.createElement('div', {},
            React.createElement('div', {id:'counter'},this.state.counter),
            React.createElement('button', {onClick:this.increment}, 'Add 1'),
            React.createElement('button', {onClick:this.decrement}, 'Take away 1')
        );  
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('counter'));

