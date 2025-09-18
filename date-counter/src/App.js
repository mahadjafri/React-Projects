import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [Count, setCount] = useState(0);
  const dateToday = new Date();
  dateToday.setDate(dateToday.getDate() + Count);
  console.log(dateToday);
  console.log(Math.abs(Count));

  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count: {Count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      {Count === 0 && <p>Today is {dateToday.toDateString()}</p>}
      {Count > 0 && (
        <p>
          {Math.abs(Count)} days from today is {dateToday.toDateString()}
        </p>
      )}
      {Count < 0 && (
        <p>
          {Math.abs(Count)} days ago was {dateToday.toDateString()}
        </p>
      )}
    </div>
  );
}
