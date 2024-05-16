import React, { useState } from "react";

const InputSend: React.FunctionComponent<{
  sendMessage: (message: string) => void;
  disabled?: boolean;
}> = ({ sendMessage, disabled }) => {
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
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        className="grow input input-bordered"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn btn-primary" type="submit" disabled={disabled}>
        Send
      </button>
    </form>
  );
};

export default InputSend;
