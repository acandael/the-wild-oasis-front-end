"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>Users: {users.length}</p>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
