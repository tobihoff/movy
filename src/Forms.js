import React from "react";
import ProtocolForm from "./components/ProtocolForm";
import Protocols from "./Protocols";

function Form() {
  const [showForm, setShowForm] = React.useState(true);

  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>Toggle</button>
      {showForm && <ProtocolForm />}
      {!showForm && <Protocols />}
    </>
  );
}

export default Form;
