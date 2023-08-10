import React from 'react'
import Diceone from './Diceone'
function Navbar() {
  return (
    <>
        <div className='scorebar'>
            0 
            <br />
        Total Score
        </div>
    <div className='navbar'>
        <div className='navItem'>1</div>
        <div className='navItem'>2</div>
        <div className='navItem'>3</div>
        <div className='navItem navitem4'>4</div>
        <div className='navItem'>5</div>
        <div className='navItem'>6</div>
 </div>
        <div className='selectnum'>Select Number</div>
      <Diceone/>
      </>
  )
}

export default Navbar