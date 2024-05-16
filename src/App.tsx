import WebsocketHandler, { WebsocketHandlerType } from "./WebsocketHandler";

import Header from "./Header";
import Connection from "./Connection";
import Messages from "./Messages";
import InputSend from "./InputSend";

function App() {
  const ws: WebsocketHandlerType = WebsocketHandler();

  return (
    <div className="container mx-auto px-8">
      <Header />
      <Connection {...ws} />
      <Messages messages={ws.messages} />
      <InputSend
        sendMessage={ws.sendMessage}
        disabled={!ws.isConnected || ws.isLoading}
      />
    </div>
  );
}

export default App;
