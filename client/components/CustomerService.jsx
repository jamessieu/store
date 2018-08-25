import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render(){
    return(
      <div id="live_chat">
        <header>
          <p>customer service rep</p>
          <a href="#" className="chat-close">x</a>
        </header>
        <div id="chat_window">
          <ul className="pages">
            <li className="chat page">
              <div className="chatArea">
                <ul className="messages"></ul>
              </div>
              <input className="inputMessage" placeholder="Type here..."/>
            </li>
            <li className="login page">
              <div className="form">
                <h3 className="title">What's your nickname?</h3>
                <input className="usernameInput" type="text" />
              </div>
            </li>
          </ul>
          <button>send message</button>
        </div>
      </div>
    )
  }
}


export default Chat;