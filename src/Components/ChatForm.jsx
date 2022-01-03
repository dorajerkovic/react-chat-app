import { useState } from "react";

export default function ChatForm({onMessageSent}) {
  const [text, setText] = useState("");

  const submitMessage = (e) => {
    e.preventDefault();
    onMessageSent(text);
    setText("");
  };

  // Slati na chat backend

  return (
    <div>
      <form onSubmit={(e) => submitMessage(e)}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Type something"
          value={text}
        ></input>
        <button className="btn btn-secondary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
