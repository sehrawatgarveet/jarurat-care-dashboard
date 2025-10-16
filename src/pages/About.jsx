import React from 'react';
import { FaHandsHelping, FaRibbon, FaUsers } from 'react-icons/fa';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Jarurat Care</h1>

        <div className="about-section">
          <p>
            Join us on our mission to establish the largest cancer care community in India.
            We are dedicated to raising awareness about preventive measures for once rare cancers,
            providing vital caregiver mentorship, and building a sustainable support network.
          </p>
        </div>

        <div className="about-section highlight">
          <p>
            <FaRibbon className="icon" /> Our goal is to ensure that every family facing cancer receives 
            the support they need through our expansive community network.
          </p>
        </div>

        <div className="about-section">
          <p>
            <FaHandsHelping className="icon" /> At Jarurat Care, we believe that no one should face cancer alone. 
            Our community connects patients, caregivers, and volunteers to share knowledge, experiences, 
            and emotional support.
          </p>
        </div>

        <div className="about-section highlight">
          <p>
            <FaUsers className="icon" /> We invite everyone to join our growing network – whether as a caregiver, 
            volunteer, or supporter – to help us build a compassionate and informed community that stands 
            together against cancer.
          </p>
        </div>
      </div>
    </div>
  );
}
