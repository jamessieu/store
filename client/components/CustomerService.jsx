import React, { Component } from 'react';
import $ from 'jquery'; 
import io from "socket.io-client";
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

const mapStateToProps = store => ({
  username: store.username,
  messages: store.messages
});

const dispatchStateToProps = dispatch => ({
  addMessage: (message) => dispatch(actions.addMessage(message))
});

class Chat extends Component {
  constructor(props) {
    super(props)

    // make socket connect which the server is listening for
    this.socket = io.connect('http://localhost:3000');

    // listens for events (receiving messages)
    this.socket.on('RECEIVE_MESSAGE', message => {
      this.props.addMessage(message);
    });

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    $(".chat-body").toggle();
  }

  sendMessage(e) {
    e.preventDefault();
    const message = document.getElementById('chat-input');
    if (message.value.length > 0) {
      // emits a message down the websocket to the server
      this.socket.emit('SEND_MESSAGE', {
        author: this.props.username,
        message: message
      });
      message.value = '';
    }
  }

  toggleChat(e) {
    e.preventDefault();
    $(".chat-head img").on("click", function() {
      var src = $(".chat-head img").attr("src");
      $(".chat-body").toggle();
      if (src == "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png") {
        $(".chat-head img").attr("src", "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_up-16.png");
      } else {
        $(".chat-head img").attr("src", "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png");
      }
    });
  }

  render(){

    console.log(this.props);
    const messages = this.props.messages ? this.props.messages.map(message => {
      return (
        <div className="msg-receive">{message.author}: {message.message}</div>
      )
    }) : <div></div>

    return(
      <div className="chat-box">
        <div className="chat-head">
          <h2>Customer Service Rep</h2>
          <img src="https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png" title="Expand Arrow" width="16" onClick={this.toggleChat}/>
        </div>
        <div className="chat-body">
          <div className="msg-insert">
            <div className="messages">
              {messages}
            </div>
          </div>
          <div className="chat-text">
            <input id='chat-input' type="text" placeholder="Message" className="form-control"/>
          </div>
          <div className="send">
            <button onClick={this.sendMessage}>SEND</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(Chat);