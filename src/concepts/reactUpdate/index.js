import { useState } from "react";

function Child({ label }) {
  const [count, setCount] = useState(0);

  console.log(`${label} rendered`);

  return (
    <div style={{ margin: "1rem 0", padding: "0.5rem", border: "1px solid #ccc" }}>
      <div>{label} - Internal count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

export default function App() {
  const [renderKey, setRenderKey] = useState(0);

  return (
    <div>
      <h1>Force Remount Demo</h1>
      <button onClick={() => setRenderKey(k => k + 1)}>Change key</button>

      <h2>Same key (state persists)</h2>
      <Child label="Same Key Child" />

      <h2>Changing key (state resets)</h2>
      <Child key={renderKey} label="Keyed Child" />
    </div>
  );
}
