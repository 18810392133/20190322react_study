/*添加了*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn :true}
        this.handleCheck = this.handleCheck.bind(this)
    }
    handleCheck(){
        this.setState(state=> ({isToggleOn:!state.isToggleOn}))
    }
    render() {
        return <button onClick={this.handleCheck}>{this.state.isToggleOn?'on':'off'}</button>
    }
}
ReactDOM.render(<Toggle/>,document.getElementById('root'))