import DiceImageOne from '../images/dice1.jpg'
import React from 'react'

function diceone() {
  return (
    <>
    <div className='diceOne'>
        <img src={DiceImageOne}alt="" srcset="" /> <br />
        <button>Reset Score</button>
        <br />
       <button className='ShowRules'>Show Rules</button>
    </div>
    </>
  )
}

export default diceone