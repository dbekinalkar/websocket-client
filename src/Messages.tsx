import { Message } from "./WebsocketHandler";

type MessagesProps = {
  messages: Message[];
};

const Messages = ({ messages }: MessagesProps) => {
  return (
    <>
      {messages.map((message, idx) => (
        <div key={idx}>
          <strong>{message.name}: </strong>
          <span>{message.message}</span>
        </div>
      ))}
    </>
  );
};

export default Messages;
