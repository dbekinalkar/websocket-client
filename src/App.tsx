import WebsocketHandler from "./WebsocketHandler";

import Connection from "./Connection";
import Messages from "./Messages";
import InputSend from "./InputSend";

function App() {
  const ws = WebsocketHandler();

  return (
    <>
      <Connection {...ws} />
      <Messages messages={ws.messages} />
      <InputSend
        sendMessage={ws.sendMessage}
        disabled={!ws.isConnected || ws.isLoading}
      />
    </>
  );
}

export default App;
