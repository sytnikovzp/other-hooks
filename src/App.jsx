import { useEffect, useRef, useState } from 'react';
import './App.css';

// let renCount = 1;

function App() {
	// const [renCount, setRenCount] = useState(1);
	const [test, setTest] = useState('Ok');

  // useEffect(() => {
  //   setRenCount(prev => prev + 1)
  // })
  // With global var
  // useEffect(() => {
  //   renCount++
  // })

  // useRef()

  const rCount = useRef(1);
  const fieldRef = useRef(null);
  const lastState = useRef('');


  useEffect(() => {
    console.dir(rCount)
    rCount.current++
  })

  useEffect(() => {
    lastState.current = test
    console.log(lastState.current)
  })

  const handlerFocus = () => {
    console.dir(fieldRef.current)
    return fieldRef.current.focus()
  }

	return (
		<div className='app'>
			<h1>Number of render : <span>{rCount.current}</span></h1>
			{/* <h2>Count of render: {renCount}</h2> */}
			<h2>Last state: {lastState.current}</h2>
			<input
				ref={fieldRef}
				type='text'
				onChange={(e) => setTest(e.target.value)}
				value={test}
			/>
			<button onFocus={handlerFocus}>Focus</button>
		</div>
	);
}

export default App;