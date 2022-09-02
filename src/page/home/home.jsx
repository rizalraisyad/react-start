import { Link } from "react-router-dom"
import { ButtonHome } from "./components/buttonHome"
import React, { useState } from 'react';
import { getJoke } from "../../model/jokeapi"


import React, { useState } from 'react';
import { getJoke } from "../../model/jokes";


export const Homes = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [jokes, setJokes] = useState("");
  let number = 0;
  const update = () => {
    number++;
    setCount(count+1);
  }
  const update2 = () => {
    setCount2(count2+1);
  }
  const updateJokes = async () => {
    const jokes = await getJoke();
    const result = jokes.setup
    setJokes(result);
  }
  return (
    <>
      <div>{jokes? jokes : "Tidak ada jokes"}</div>
      <div>{number}</div>
      <div>{count}</div>
      <div>{count2}</div>
      <div>Hi from Home</div>
      <button  names="Click" onClick={update}>Click me</button>
      <ButtonHome functionOnClick={update2} names="Click" />
      <ButtonHome functionOnClick={updateJokes} names="Click to get Joke" />
    </>
  )
}