import React, { Component } from 'react';
import MessageView from './message-view';

class MessageList extends Component
{
    state = {
        messages : [
            {
            from : 'SUMIT',
            content : 'I will be travelling soon',
            status : 'read'
            },
            {
                from  : 'ALICE',
                content : 'The event will start next week in CAFE-M',
                status : 'unread'
            },
            {
                from : 'Claire',
                content : 'The Indian sweets were very tasty',
                status : 'unread'
            }
        ]
    }

    render() {
        const messageViews = this.state.messages.map(function(message, index) {
        return (
            <MessageView key={index} message={message} />
        )
        })

        return(
            <div>
                <h1>List of Messages</h1>
                {messageViews}
            </div>
        )
    }
}

export default MessageList;