import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-hero">
      <div className="floating-shapes">
  <div className="circle circle1"></div>
  <div className="circle circle2"></div>
  <div className="circle circle3"></div>
</div>

      <div className="animated-bg"></div>
      <div className="home-container">
        <h1>Welcome to Jarurat Care</h1>
        <p>Manage and view patient records easily and efficiently.</p>
        <Link to="/patients" className="get-started-btn">View Patients</Link>
      </div>
    </div>
  );
}
