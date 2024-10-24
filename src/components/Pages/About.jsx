import React from 'react';
import "./About.css";

// Sample data for the restaurant
const restaurantData = {
  name: "Plate Perfection",
  description: "At Plate Perfection, we blend fresh ingredients with culinary artistry to create unforgettable dining experiences.",
  mission: "To provide exceptional food and service, while celebrating the rich flavors of our local community.",
  values: [
    "Quality Ingredients",
    "Exceptional Service",
    "Sustainability",
    "Community Engagement"
  ],
  team: [
    {
      name: "Chef John Doe",
      position: "Head Chef",
      bio: "With over 15 years of experience, Chef John is passionate about creating innovative dishes that highlight seasonal ingredients.",
    },
    {
      name: "Sarah Smith",
      position: "Restaurant Manager",
      bio: "Sarah ensures that every guest has a memorable experience, bringing her extensive hospitality experience to the team.",
    }
  ]
};

const About = () => {
  return (
    <div className="about-us">
      <h1>About {restaurantData.name}</h1>
      <p>{restaurantData.description}</p>
      
      <h2>Our Mission</h2>
      <p>{restaurantData.mission}</p>

      <h2>Our Values</h2>
      <ul>
        {restaurantData.values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <h2>Meet Our Team</h2>
      <div className="team">
        {restaurantData.team.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p><strong>{member.position}</strong></p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
