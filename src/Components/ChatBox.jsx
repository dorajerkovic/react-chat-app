import React from "react";

export default class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <span
          style={{ border: this.props.isThisMe ? "1px solid green" : null }}
        >
          {this.props.author.username}
        </span>
        <div style={{ color: this.props.author.color }}>
          <p>{this.props.message}</p>
        </div>
      </div>
    );
  }
}
