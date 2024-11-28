import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  return (
    <p>Hola {props.name} tú edad es {props.age}</p>
  )
}


function App() {
  const now = new Date()
  const a = 10
  const b = 15
  const name = "Rafael"
  const age = 30
  const array = ["Rafa","Ricardo"]
  return (
    <div>
      <p>La resta de {a} - {b} es igual a {a-b} y la hora es {now.toString()}</p>
      <Hello name={name} age={age+2}/>
      <p>El valor del array es {array}</p>
    </div>
  )
}

export default App
