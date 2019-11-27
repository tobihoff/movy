import React from "react";
import { addProtocol } from "../api/protocols";

export default function ProtocolForm() {
  const [author, setAuthor] = React.useState("");
  const [date, setDate] = React.useState("");
  const [text, setText] = React.useState("");
  const [error, setError] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const dateObj = new Date(date);
    const today = new Date();
    if (dateObj > today) {
      setError("Date is in the future");
      return;
    }

    const protocol = {
      author,
      date,
      text
    };

    addProtocol(protocol);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author
        <input
          type="text"
          required
          value={author}
          onChange={event => setAuthor(event.target.value)}
        />
      </label>
      <label>
        Date
        <input
          type="date"
          required
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </label>
      <label>
        <textarea
          rows="20"
          required
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </label>
      <button>Submit</button>
      {error && <div>{error}</div>}
    </form>
  );
}
