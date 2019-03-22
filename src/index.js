/*添加了*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
function FormattedTime(props){
    return <h2>the time is {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()};
    }
    componentDidMount() {
       setInterval(()=>this.setState({date:new Date()}),1000);
    }
    render() {
        return (<div><h2>the time is {this.state.date.toLocaleTimeString()}</h2><FormattedTime date={this.state.date}/></div>);
    }
}
ReactDOM.render(<Clock />,document.getElementById('root'));


