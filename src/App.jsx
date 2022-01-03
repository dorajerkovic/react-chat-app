import React from "react";
import ChatForm from "./Components/ChatForm";
import ChatWindow from "./Components/ChatWindow";

const ROOM_NAME = "observable-room";

export default class App extends React.Component {
  state = {
    messages: [],
    currentUser: {
      username: this.randomName(),
      color: this.randomColor(),
    },
  };

  randomName() {
    const names = [
      "Bozo",
      "Ljuban",
      "Ivan",
      "Mislav",
      "Doris",
      "Nives",
      "Ivona",
      "Medo",
    ];
    const name = names[Math.floor(Math.random() * names.length)];
    const num = Math.floor(Math.random() * 11);

    return `${name}${num}`;
  }

  randomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }

  onMessageSent(newText) {
    // const messages = [...this.state.messages];
    // messages.push({
    //   text: newText,
    //   user: this.state.user,
    // });

    // this.setState({ messages: messages });

    this.drone.publish({
      room: ROOM_NAME,
      message: newText,
    });
  }

  componentDidMount() {
    // Spajanje na Scaledrone preko ClientId-a
    // Salje se ClientId i memberi (useri) koje koristimo
    this.drone = new window.Scaledrone("Fgo7fgCe8z2wdLjQ", {
      data: this.state.currentUser,
    });

    // prilikom opena (spajanja) gledamo ima li error, odnosno jel se dobro spojilo na BE
    // ako je sve ok povuce se clientId i dodjeli se memberu
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const user = { ...this.state.currentUser };
      user.id = this.drone.clientId;
      this.setState({ currentUser: user });
    });

    const room = this.drone.subscribe(ROOM_NAME);
    room.on("data", (data, user) => {
      const messages = this.state.messages;
      messages.push({ user, text: data });
      this.setState({ messages });
    });

    this.onMessageSent = this.onMessageSent.bind(this);
  }

  componentWillUnmount() {
    this.room.unsubscribe();
    this.drone.close();
  }

  render() {
    return (
      <div>
        <ChatWindow
          messages={this.state.messages}
          user={this.state.currentUser}
        />
        <ChatForm onMessageSent={this.onMessageSent} />
      </div>
    );
  }
}
