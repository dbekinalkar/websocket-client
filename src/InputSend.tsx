import { useState } from "react";

type InputSendProps = {
  sendMessage: (message: string) => void;
  disabled?: boolean;
};

const InputSend = ({ sendMessage, disabled }: InputSendProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (disabled) return;

    if (message.trim() !== "") {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" disabled={disabled}>
        Send
      </button>
    </form>
  );
};

export default InputSend;
