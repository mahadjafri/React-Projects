export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();

  return (
    <main style={{ padding: 24 }}>
      <h1>Users</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} — {u.email} </li>
        ))}
      </ul>
    </main>
  );
}
