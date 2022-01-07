import React from "react";

export default class ChatBox extends React.Component {
  render() {
    return (
      <div className = { this.props.isThisMe ? "this-is-me message-div" : "message-div" } >
        <span className="user"
          style={{ color: this.props.isThisMe ? "grey" : null}}
  
        >
          {this.props.author.username}
        </span>
        <div style={{ color: this.props.author.color }}>
          <p className="message">{this.props.message}</p>
        </div>
      </div>
    );
  }
}
