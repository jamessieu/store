import React, { Component } from 'react';
import $ from 'jquery'; 

class Chat extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    $(".chat-head img").on("click", function() {
      var src = $(".chat-head img").attr("src");

      $(".chat-body").slideToggle("fast");
      if (src == "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png") {
        $(".chat-head img").attr("src", "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_up-16.png");
      } else {
        $(".chat-head img").attr("src", "https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png");
      }
    });

    $(".chat-text textarea").keypress(function(event) {
      var $this = $(this);

      if (event.keyCode == 13) {
        var msg = $this.val();
        $this.val("");
        $(".msg-insert").prepend("<div class='msg-send'>" + msg + "</div>");
      }
    });

  }

  render(){
    return(
      <div className="chat-box">
        <div className="chat-head">
          <h2>Customer Service Rep</h2>
          <img src="https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png" title="Expand Arrow" width="16"/>
        </div>
        <div className="chat-body">
          <div className="msg-insert">
            <div className="msg-send"> 
            Send message
            </div>
            <div className="msg-receive">
            Received message
            </div>
          </div>
          <div className="chat-text">
            <textarea placeholder="Send"></textarea>
          </div>
        </div>
      </div>
    )
  }
}


export default Chat;