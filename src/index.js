/*添加了*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UserGreeting(props){
    return <h2>hello {props.userName}</h2>;
}
function StrangeGreeting(props) {
    return <h2>please log in</h2>;
}

function Greeting(props){
    const  isLogIn = props.isLogIn;
    const userName = props.userName;
    if(isLogIn){
        return <UserGreeting userName={userName}/>
    }else {
        return <StrangeGreeting/>
    }
}
ReactDOM.render(<Greeting isLogIn={false} userName={"Amy"}/>,document.getElementById('root'));