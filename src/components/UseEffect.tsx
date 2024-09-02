'use client'
import React from 'react'
import { useEffect, useState, useReducer } from 'react'


interface State {
  conter: number
}

type Action = 
| {type: 'increment'}
| {type: 'reset'} 



function UseEffect() {
  const [name, setName] = useState()
  const [count, setCount] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  function handleChange(event: any) {
    const { value } = event.target
    console.log('Eent target value', event.target.value)
    console.log('Event', event)
    console.log(value)
    setName(value)
  }

  const counter = (prevCount: number) => {
    return () => setCount((prevCount) => prevCount + 1)
  }

  const initialState = { conter: 0 }

  //Define the reducer function
  const reducer = (state, action) => {}

  const handleClick = () => {
    console.log(name)
  }
  useEffect(() => {
    console.log(`input value changed ${name}`)
  }, [name])

  useEffect(() => {
    console.log(' Counter Component mounted')
    const intervalId = setInterval(() => {
      setCount((count) => count + 1)
    }, 250)

    return () => {
      console.log('Cleanup initiated')
      clearInterval(intervalId)
      console.log('Cleanup finshed')
    }
  }, [])

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)
    console.log('Added event listener')
  }, [])

  return (
    <>
      <div className="flex basis-3 p-3 m-3">
        <input className="m-3" type="text" placeholder="Enter name here" onChange={handleChange} />

        <button color="success" onClick={handleClick}>
          Name submit
        </button>

        <p className="p-3">Input value: {name}</p>
      </div>

      <p>Window width: {windowWidth}</p>
      <div>Count: {count}</div>
    </>
  )
}

export default UseEffect
