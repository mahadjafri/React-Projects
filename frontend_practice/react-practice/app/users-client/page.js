"use client";   // mark it as a client component

import { useEffect, useState } from "react";

export default function UsersClient() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);  // empty dependency array = runs once on mount

  return (
    <main style={{ padding: 24 }}>
      <h1>Users (Client Component)</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} — {u.email} — {u.phone}
          </li>
        ))}
      </ul>
      <ul> Simba </ul>
    </main>
  );
}
