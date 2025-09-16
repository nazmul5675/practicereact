import './App.css'
import Batsman from './Batsman'
import Counter from './counter'

function App() {

  function handleClick() {
    alert('i am clicked')
  }

  const handleClick3 = () => {
    alert('click 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>

      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={function handleClick2() {
        alert('clicked 2')
      }}>click me</button>
      <button onClick={handleClick3}>click me 3</button>
      <button onClick={() => alert('alert 44')}>click me 4</button>
      <button onClick={() => handleAdd5(7)}>click add 5</button>
    </>
  )
}

export default App
