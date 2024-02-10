import React from 'react';
import { useState } from 'react';
// import Display  from './Component/Display';
import Home from './Component/Home';
import Rolldice from './Component/Rolldice'
import Display from './Component/Display';

export default function App() {
  let [score,setScore]=useState(0)
  let [currentDice,setCurrentDice]=useState(0)
  const [isGameStarted, setisGameStarted] = useState(false);
  const handleVerification = () => {
    setisGameStarted((prev)=> !prev)
  };
  return (
    <div>   
      {isGameStarted ?  <>
        <Home score={score} setScore1={setScore} currentDice={currentDice}/>
       <Rolldice setScore={setScore} score={score} currentDice={currentDice} setCurrentDice={setCurrentDice}/> 

        </> : <Display onVerification={handleVerification}/> } 
     
      
    </div>
  )
}

