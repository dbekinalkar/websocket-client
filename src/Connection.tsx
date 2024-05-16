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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
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
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : isConnected ? "Disconnect" : "Connect"}
      </button>
    </form>
  );
};

export default Connection;
