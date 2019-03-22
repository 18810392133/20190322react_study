/*添加了*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    componentDidMount() {
       setInterval(()=>this.setState({date:new Date()}),1000);
    }

    render() {
        return <h2>the time is {this.state.date.toLocaleTimeString()}</h2>;
    }
}

ReactDOM.render(<Clock/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

