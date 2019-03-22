/*添加了*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    /*设置生命周期方法*/
    /*会在组件被渲染到DOM之后运行*/
    componentDidMount() {
        /*箭头函数：左边需要写的是函数的参数，右边是进行的操作和返回的值*/
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    /**/
    tick(){
        this.setState({date:new Date()});
    }

    render() {
        return (
            <h2>the time is {this.state.date.toLocaleTimeString()}</h2>
        );
    }


}

ReactDOM.render(<Clock/>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

