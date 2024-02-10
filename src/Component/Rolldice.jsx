import React, { useState } from "react";
import "./Rolldice.css";
export default function Rolldice({
  setScore,
  score,
  setCurrentDice,
  currentDice,
}) {
  let generateRandom = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  let roll = () => {
    const randomNumber = generateRandom(1, 7);
    setCurrentDice((prev) => randomNumber);
  };

  return (
    <div id="div">
      {/* <center> */}
      <div id="roll" onClick={roll}>
          <img src={`/images/image/dice_${currentDice}.jpg`} alt="" />
      </div>
      <p>Click on Dice to Roll</p>
      {console.log(currentDice,"is current dice")}
      <button className="func" onClick={() => setScore((score = 0))}>
        Restart
      </button>
      <br />
      <button className="func">Show Rules</button>
      {/* </center> */}
    </div>
  );
}
