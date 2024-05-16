type ConnectionProps = {
  isLoading: boolean;
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
  uri: string;
  setUri: (uri: string) => void;
};

const Connection = ({
  isLoading,
  isConnected,
  connect,
  disconnect,
  uri,
  setUri,
}: ConnectionProps) => {
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
    <>
      <input
        type="text"
        value={uri}
        onChange={handleChange}
        disabled={isConnected}
      />
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Loading..." : isConnected ? "Disconnect" : "Connect"}
      </button>
    </>
  );
};

export default Connection;
