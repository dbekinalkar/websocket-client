import React from "react";

import { Message } from "./WebsocketHandler";

const Messages: React.FunctionComponent<{ messages: Message[] }> = ({
  messages,
}) => {
  return (
    <>
      {messages && messages.length > 0 && (
        <table className="table">
          <tbody>
            {messages.map((message, idx) => (
              <tr
                key={idx}
                className={`${message.name == "Client" && "bg-base-200"}`}
              >
                <th className="font-bold">{message.name}: </th>
                <td style={{ whiteSpace: "pre-wrap" }} className="font-mono">
                  {message.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Messages;
