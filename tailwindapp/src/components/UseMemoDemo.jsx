import { useState, useMemo } from "react";

function    UseMemoDemo() {
  const [count, setCount] = useState(2);
  const [clicks, setClicks] = useState(0);

  const square = useMemo(() => {
    console.log("Square calculate hua");
    return count * count;
  }, [count]);

  return (
    <>
      <h2>Square: {square}</h2>
      <h3>Clicks: {clicks}</h3>

      <button onClick={() => setClicks(clicks + 1)}>
        Increase Clicks
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </>
  );
}

export default UseMemoDemo;
