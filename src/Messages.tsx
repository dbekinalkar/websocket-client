import { Message } from "./WebsocketHandler";

type MessagesProps = {
  messages: Message[];
};

const Messages = ({ messages }: MessagesProps) => {
  return (
    <>
      {messages.map((message, idx) => (
        <div key={idx} className="flex gap-4">
          <h3 className="font-bold">{message.name}: </h3>
          <p style={{ whiteSpace: "pre-wrap" }} className="font-mono">
            {message.message}
          </p>
        </div>
      ))}
    </>
  );
};

export default Messages;
