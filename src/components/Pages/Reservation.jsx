import React from 'react'
import "./Reservation.css"
import Reserve from './Reserve'

const Reservation = () => {
  return (
    <>
    <div>
        <div className="rest-image">
            <div className="rest-image-text">
                <p>RESERVE A TABLE</p>
             </div>
        </div>  
    </div>
    <Reserve/>
    </>
  )
}

export default Reservation
