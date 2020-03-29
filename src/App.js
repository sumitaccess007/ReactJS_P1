import React, { Component } from "react";
import './App.css';
import './messages/message-view';
import MessageList from './messages/message-list';
import MessageView from "./messages/message-view";

class App extends Component
{
    render(){
        return(
        <MessageList/>
        )
    }

}

export default App;