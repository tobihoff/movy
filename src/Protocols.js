import React from "react";
import Protocol from "./Protocol";
import { getProtocols } from "../src/api/protocols";

export default function() {
  const protocols = getProtocols();

  return (
    <div>
      {protocols.map(protocol => (
        <Protocol key={`${protocol.date}.${protocol.author}`} {...protocol} />
      ))}
    </div>
  );
}
