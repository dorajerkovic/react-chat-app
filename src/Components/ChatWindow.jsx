import React from "react";
import ChatBox from "./ChatBox";

export default class ChatWindow extends React.Component {
  // user je objekt koji u sebi ima clientData (objekt) i id (string) parametre
  renderChatBox = (message) => {
    const { user, text } = message;
    const currUser = this.props.user;
    const isThisMe = user.id === currUser.id;
    const randomId = Math.floor(Math.random() * 10000);

    return (
      <ChatBox
        // useri unutar message imaju client data
        author={user.clientData}
        message={text}
        isThisMe={isThisMe}
        key={randomId}
      />
    );
  };

  render() {
    const { messages } = this.props;

    return messages.map((message) => this.renderChatBox(message));
  }
}
