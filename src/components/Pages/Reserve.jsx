import React, { useState } from "react";
import "./Reserve.css";

function Reserve() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://www.shutterstock.com/shutterstock/videos/1053715673/thumb/1.jpg?ip=x480", // Restaurant 1
    "https://media.gettyimages.com/id/1145092855/video/interior-of-coffee-shop.jpg?s=640x640&k=20&c=b4gAdFTndX9q_H0i-WSYP-WOErJq7vKhOgZhM-IOsJs=", // Coffee Shop
    "https://www.shutterstock.com/shutterstock/videos/1057937215/thumb/1.jpg?ip=x480", // Restaurant 2
    "https://content.jdmagicbox.com/comp/def_content_category/restaurants/photo-1497644083578-611b798c60f3-restaurants-6-h85ts.jpg",
    "https://wallpapers.com/images/hd/ordered-food-in-kitchen-restaurant-usk5o0dxl2n4qn3k.jpg",
    "https://wallpapercave.com/wp/wp1874165.jpg",
    "https://t4.ftcdn.net/jpg/02/19/54/33/360_F_219543334_7gdCTvUTwJ1MZAB75XVD60s3WZ80GtdD.jpg",
];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made successfully for ${formData.name}!`);
    console.log(formData);
  };

  return (
    <div className="container2">
      <div className="app">
        <h1>Hotel Table Reservation</h1>
        <form onSubmit={handleSubmit} className="reservation-form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label>Number of Guests:</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            min="1"
            onChange={handleChange}
            required
          />

          <button className="submit" type="submit">Reserve Table</button>
        </form>
      </div>

      <div className="slider">
        <div className="slider-container">
          <img
            src={images[currentImageIndex]}
            alt="Hotel View"
            className="slider-image"
          />
          <button className="prev" onClick={prevImage}>
            &#10094;
          </button>
          <button className="next" onClick={nextImage}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
