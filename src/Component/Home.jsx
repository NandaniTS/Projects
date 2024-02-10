import React, { useState,useEffect } from "react";
import "./Home.css";
export default function Home({score,setScore1,currentDice}) {
 let [selectNo,setSelectNo]=useState(0)
 let match = (e) => {
  let buttonValue = parseInt(e.target.value, 10);
  setSelectNo(buttonValue);
};
 useEffect(() => {
  console.log(currentDice);
  if ( selectNo===currentDice) {
    setScore1((prevScore) => prevScore + currentDice);
    console.log("You win")
  }
  else{
    setScore1((prevScore) => prevScore - currentDice);
  }
  return () => {
      console.log(score);
  };
}, [currentDice]); 



  return (
    <>

      <div>
        <div id="score">
          <h1>{score}</h1>
          <ul>
            <li>
              <button value='1' onClick={(e)=>match(e)}>1</button>
            </li>
            <li>
              <button value='2' onClick={(e)=>match(e)} >2</button>
            </li>
            <li>
              <button value='3' onClick={(e)=>match(e)}>3</button>
            </li>
            <li>
              <button value='4' onClick={(e)=>match(e)}>4</button>
            </li>
            <li>
              <button value='5' onClick={(e)=>match(e)}>5</button>
            </li>
            <li>
              <button value='6' onClick={(e)=>match(e)} >6</button>
            </li>
          </ul>
        </div>
 
        <div id="choose">
          <h3>Total Score</h3>
          {setScore1}
          <h3>Selected Number {selectNo} </h3>
         
        </div>
      </div>
      
    </>
  );
}
