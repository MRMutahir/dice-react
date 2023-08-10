import React from 'react'
import { Link } from 'react-router-dom'

function Buttons() {
  return (
 <>  
 <Link to={'/home'}><button className='playbtn'>Play Now</button></Link>
      
 </>
  //  <Link to={'/'}> <button className='playbtn'>Play Now</button></Link>
  //  <Link to={'/home'}> <button className='playbtn'>Play Now</button></Link>

  )
}

export default Buttons