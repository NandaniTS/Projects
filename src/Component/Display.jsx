import React from 'react'
import "./display.css"

export default function Display({onVerification}) {
  const handleEntry=()=>{
    onVerification(true);
  }
  return (
    <div id='bg'>
        {/* <img src="https://w7.pngwing.com/pngs/56/672/png-transparent-gurps-customer-service-dice-dice-throw-game-service-dice.png" alt="" /> */}
        <div id='head'>
            <h1>DICE GAME</h1>
            <button id='btn' onClick={handleEntry}>PLAY GAME</button>
        </div>

    </div>
  )
}
