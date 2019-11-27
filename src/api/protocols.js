export function getProtocols() {
  const protocolJSON = localStorage.getItem("protocols") || "[]";
  const protocols = JSON.parse(protocolJSON);
  return protocols;
}

export function setProtocols(protocols) {
  localStorage.setItem("protocols", JSON.stringify(protocols));
}

export function addProtocol(protocol) {
  const protocols = getProtocols();
  protocols.push(protocol);
  setProtocols(protocols);
}
