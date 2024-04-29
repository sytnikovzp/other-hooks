import { useCallback, useState } from 'react';
import CallBackItems from './CallBackItems';
import './App.css';

function App() {
  const [count, setCount] = useState(5);

  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'red' : 'teal',
  };

  const createItems = useCallback(() => {
    return new Array(count)
      .fill('')
      .map((element, index) => `Element #${index + 1}`);
  }, [count]);

  return (
    <div className='app'>
      <h1 style={styles}>Computed property: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Minus</button>
      <button onClick={() => setColored((prev) => !prev)}>
        Change colored
      </button>
      <CallBackItems getItems={createItems} />
    </div>
  );
}

export default App;
