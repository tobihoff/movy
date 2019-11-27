import React from "react";
import PropTypes from "prop-types";

export default function Protocol({ author, date, text }) {
  return (
    <div>
      {date} : {author}
      <p>{text}</p>
    </div>
  );
}
