import { FaBars } from "react-icons/fa6";
import React, { useState } from 'react'
import "./Navbar.css"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <header>
      <div className="container">
        <nav>
            <div className="logo">
                <h2>Plate Perfection</h2>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
                <li><a href="/home"className="active">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservation">Reserve</a></li>
                <li><a href="/about">About Us</a></li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
        </nav>
    </div>
    </header>
    
    </>
  )
}

export default Navbar;
