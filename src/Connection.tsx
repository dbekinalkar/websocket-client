import React from "react";

const Connection: React.FunctionComponent<{
  isLoading: boolean;
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
  uri: string;
  setUri: (uri: string) => void;
}> = ({ isLoading, isConnected, connect, disconnect, uri, setUri }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUri(event.target.value);
  };

  const handleClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="grow input input-bordered"
        type="text"
        value={uri}
        onChange={handleChange}
        disabled={isConnected}
      />
      <button
        className={`${
          isLoading ? "btn-warning" : isConnected ? "btn-error" : "btn-success"
        } btn`}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
};

export default Connection;
