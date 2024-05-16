import { useState } from "react";

export type Message = {
  name: string;
  message: string;
};

const WebsocketHandler = () => {
  const [uri, setUri] = useState<string>("");
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const connect = () => {
    try {
      setIsLoading(true);
      if (ws) {
        ws.close();
      }
      const newWs = new WebSocket(uri);
      newWs.onopen = () => {
        console.log("connected");
        setIsConnected(true);
        setIsLoading(false);
      };
      newWs.onmessage = (msg) => {
        setMessages((prev) => [...prev, { name: "Server", message: msg.data }]);
      };
      newWs.onerror = () => {
        console.log("disconnected");
        setIsConnected(false);
        setIsLoading(false);
      };
      newWs.onclose = () => {
        console.log("disconnected");
        setIsConnected(false);
        setIsLoading(false);
      };
      setWs(newWs);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const disconnect = () => {
    setIsLoading(true);
    if (ws) {
      ws.close();
    }
    setIsLoading(false);
  };

  const sendMessage = (message: string) => {
    if (ws) {
      ws.send(message);
      setMessages((prev) => [...prev, { name: "Client", message }]);
    }
  };

  return {
    uri,
    setUri,
    isConnected,
    isLoading,
    connect,
    disconnect,
    messages,
    sendMessage,
  };
};

export default WebsocketHandler;
