import React from "react";
import { Link } from "react-router-dom";


const Homepage = () => {
  return(
    <div className="App">
      <header className="header">
        <h1>IdealClass</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Your Collaborative Learning Hub</h2>
        <div className="Description">
          <img className="image-container"src="/src/assets/edu.jpg" alt="homepage image" />
          <p className="Paragraph">The IdealClass LMS web application is a comprehensive platform designed to streamline the management, delivery and tracking of educational courses and materials.</p>          
          <a href="#features" className="btn">Get Started</a>
        </div>
      </section>

      <div>
        <h1 className="core-features">FEATURES</h1>
      </div>
      <section className="features">
        <div className="elementsid">
          <img className="image-container" src="/src/assets/accesstomaterials.jpg" alt="Feature-1" />
          <p>Seamless sharing of Resources</p>
          <button className='btn'>More info</button>
        </div>
        
      </section>

      <footer className="footer">
        <h3>IdealClass</h3>
        <p>Email: info@idealclass.com</p>
        <p>Phone: +234 209-500-133</p>
        <p>&copy; 2024 Your Learning Platform</p>
      </footer>
    </div>
  );
};
export default Homepage;