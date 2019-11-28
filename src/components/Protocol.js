import React from "react";

export default function Protocol({ author, date, text }) {
  return (
    <div>
      {date} : {author}
      <p>{text}</p>
    </div>
  );
}
