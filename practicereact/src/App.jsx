import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './counter'
import Users from './Users'
import Friends from './Friends'
import Peoples from './Peoples'
import Mans from './Mans'
import Counters from './counters'
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
// .then(data => console.log(data))
const fetchFriends = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchPeoples = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

const fetchMans = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}
function App() {
  const peoplesPromise = fetchPeoples();
  const mansPromise = fetchMans()
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
      <Counters></Counters>

      <h1>Vite + React</h1>
      <Suspense fallback={<h1>Loading Mans.......!!!</h1>}>
        <Mans mansPromise={mansPromise}></Mans>
      </Suspense>
      <Suspense fallback={<h1>Loading People....</h1>}>
        <Peoples peoplesPromise={peoplesPromise}></Peoples>
      </Suspense>

      <Suspense fallback={<h1>Data Loding ...........</h1>}>
        <Users fetchUsers={fetchUsers}></Users>

      </Suspense>
      <Suspense fallback={<h1>Loading Friends</h1>}>
        <Friends fetchFriends={fetchFriends}></Friends>
      </Suspense>
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
