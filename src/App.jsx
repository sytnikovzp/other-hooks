import { useEffect, useMemo, useState } from 'react';
import './App.css';

function freezeCompute(numb, pause) {
  console.log('Is frozen');
  let start = new Date().getTime();
  let end = start;
  while (end < start + pause) {
    end = new Date().getTime();
  }
  return numb * 2;
}

function App() {
  const [numb, setNumb] = useState(20);

  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? 'red' : 'teal',
    }),
    [colored]
  );

  useEffect(() => {
    console.log('Styles have been changed');
  }, [styles]);

  const pause = 1000;

  // const calculated = freezeCompute(numb, pause)
  const calculated = useMemo(() => freezeCompute(numb, pause), [numb]);

  return (
    <div className='app'>
      <h1 style={styles}>Compute property: {calculated}</h1>
      <button onClick={() => setNumb((prevNumb) => prevNumb + 1)}>Plus</button>
      <button onClick={() => setNumb((prevNumb) => prevNumb - 1)}>Minus</button>
      <button onClick={() => setColored((prevColored) => !prevColored)}>
        Change color
      </button>
    </div>
  );
}

export default App;
