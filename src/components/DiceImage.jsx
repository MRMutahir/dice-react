import Image from '../images/dices 1.jpg'
import React from 'react'
import Buttons from './Buttons'

function DiceImage() {
  return (
    <div className='dicesection'> 

        <img src={Image} alt="" />

      <h1 className='diceHeading'>DICE GAME</h1>
      <Buttons/>
      </div>
  )
}

export default DiceImage