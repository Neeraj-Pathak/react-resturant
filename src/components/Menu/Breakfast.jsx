import React, { useEffect, useState } from 'react';
import "./Breakfast.css";
import 'font-awesome/css/font-awesome.min.css';

const Breakfast = ({ menuData }) => {
  const images = [
    "https://img.freepik.com/premium-photo/collection-food-from-companys-website_908344-26875.jpg?semt=ais_hybrid",
    "https://static.photodexia.com/largeweb/repository/u-enblog/437b5b7c16bb6b47d872d449d6d4381cphoto149865489629337aacf113fd9", // Add more images
    "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640770.jpg&fm=jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  const scrollToMenuTop = () => {
    const menuContainer = document.querySelector('.breakfast-scroll-container');
    if (menuContainer) {
      menuContainer.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    }
  };

  return (
    <div className="breakfast-main" style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex]})`,
      backgroundSize: 'cover', }}>

      <h1 className="breakfast-container-title">OUR MENU
        <i className="fa fa-book open"></i>
      </h1>
      <div className="breakfast-scroll-container">
        {menuData.map((curElem) => {
          return (
            <div className="breakfast-container" key={curElem.id}>
              <div className="breakfast-list">
                <div className='Left-Menu'>
                  <div className="Left-Menu-card">
                    <div className="card-content">
                      <div className="card-title">{curElem.name}</div>
                      <div className="card-price">{curElem.price}</div>
                    </div>
                    <p className="card-description">{curElem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="scroll-to-top" onClick={scrollToMenuTop}>
        ↑ Go to Top
      </button>
    </div>
  );
}

export default Breakfast;
