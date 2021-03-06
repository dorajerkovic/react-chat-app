import { useState } from "react";

export default function ChatForm({onMessageSent}) {
  const [text, setText] = useState("");

  const submitMessage = (e) => {
    e.preventDefault();
    onMessageSent(text.trim());
    setText("");
  };

  // Slati na chat backend

  return (
    <div>
      <form onSubmit={(e) => submitMessage(e)}>
        <input className="input"
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Type something"
          value={text}
        ></input>
        <button className="button btn btn-outline-light" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
