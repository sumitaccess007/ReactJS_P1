import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class MessageView extends Component
{
    render() {
        const message = this.props.message;
        return(
            <div className="container">
                    <div className="from">
                        <span className="label">From :</span>
                        <span className="value">{message.from}</span>
                    </div>
                    <div className="Status">
                        <span className="label">Status : </span>
                        <span className="value">{message.status}</span>
                    </div>
                    <div className="message">
                        <span className="label">Message : </span>
                        <span className="value">{message.content}</span>
                    </div>
            </div>
        )
    }


}

export default MessageView;
