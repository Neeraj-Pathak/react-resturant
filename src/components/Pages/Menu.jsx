import React, { useState } from 'react';
import Breakfast from '../Menu/Breakfast'; 
import Menuapi from './Menuapi'; 
import './Menu.css'; 

const Menu = () => {
  const [menuData, setMenuData] = useState(Menuapi);
  const [selectedCategory, setSelectedCategory] = useState("breakfast"); 

  const filterItem = (category) => {
    const updatedList = Menuapi.filter((curElem) => curElem.category === category);
    setMenuData(updatedList);
    setSelectedCategory(category); 
  };

  return (
    <>
      <div className="menu-image">
        <div className="menu-image-text">
          <p>MENUS</p>
        </div>
      </div>
      <div className="menu-links-container">
        <nav>
          <ul className="menu-links">
            <li>
              <button
                className={`menu-btn ${selectedCategory === "breakfast" ? "active" : ""}`}
                onClick={() => filterItem("breakfast")}
              >
                Breakfast
              </button>
            </li>
            <li>
              <button
                className={`menu-btn ${selectedCategory === "lunch" ? "active" : ""}`}
                onClick={() => filterItem("lunch")}
              >
                Lunch
              </button>
            </li>
            <li>
              <button
                className={`menu-btn ${selectedCategory === "dinner" ? "active" : ""}`}
                onClick={() => filterItem("dinner")}
              >
                Dinner
              </button>
            </li>
            <li>
              <button
                className={`menu-btn ${selectedCategory === "drinks" ? "active" : ""}`}
                onClick={() => filterItem("drinks")}
              >
                Drinks
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <Breakfast menuData={menuData} />
    </>
  );
};

export default Menu;
