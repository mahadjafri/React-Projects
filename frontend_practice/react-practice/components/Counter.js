"use client"; // needed when using hooks in the App Router

import { useState } from "react";

export default function Counter({ start = 0 }) {
  const [count, setCount] = useState(start);
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}
