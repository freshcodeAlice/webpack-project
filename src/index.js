import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class HelloWorld extends Component {

    render () {
        return React.createElement('p', {title: 'hello'}, 'Hello from react');
    }
}

const compHello = React.createElement(HelloWorld);

const root = document.getElementById('root');

ReactDOM.render(compHello, root);