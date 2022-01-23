import React from "react";

export default class ChatBox extends React.Component {


  
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.em.scrollIntoView({ behavior: 'smooth'});
    this.em.scrollTop -= 10;
  }


  render() {
    return (
      <div ref={em => { this.em = em; }} className = { this.props.isThisMe ? "this-is-me message-div" : "message-div" } >
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
