import { Link } from "react-router-dom"
import { ButtonHome } from "./components/buttonHome"

import React, { useState } from 'react';
import { getJoke } from "../../model/jokes";


export const Homes = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [fullJokesStatement, setJokes1] = useState("")
  const [fullJokesAnswer, setJokes2] = useState("")
  let number = 0;
  
  const updateNumber = () => {
    setCount(count+1);
  }

  const updateNumber2 = () => {
    setCount2(count2+1);
  }

  const updateJokes = async() => {
    const fetchJokes = await getJoke();
    setJokes1(fetchJokes.setup)
    setJokes2(fetchJokes.delivery)
  }


  return (
    <>
      <div>Jokes</div>
      <div>{fullJokesStatement}</div>
      <div>{fullJokesAnswer}</div>
      <div>{number}</div>
      <div> count = {count}</div>
      <div> count2 = {count2}</div>
      <div>Hi from Home</div>
      <button onClick={updateNumber}>click to add number</button>
      <ButtonHome names="Click1" functionClick={updateNumber}/>
      <ButtonHome names="Click2" functionClick={updateNumber2}/>
      <ButtonHome names="show jokes" functionClick={updateJokes}/>
      <Link to = "/community"> Comunity</Link>
    </>
  )
}