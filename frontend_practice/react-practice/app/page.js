import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main style={{ padding: 245 }}>
      <h1>Hello, React + Next.js 👋</h1>
      <p>This is your first page.</p>
      <p>Start editing to see some magic happen!</p>
      <b>Yada Yada</b>
      <Counter start={5} />
      <Counter />
    </main>
  );
}
