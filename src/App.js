import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const counterSqr = () => {
    console.log("expensive calculation")
    return counter * counter
  }

  const memoizedSquareValue = useMemo(counterSqr, [counter])

  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h3>Counter Square: {memoizedSquareValue}</h3>
      <br/>
      <h3>Counter 2: {counter2}</h3>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
}

export default App;
