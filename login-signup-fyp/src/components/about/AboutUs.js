import React from 'react';
import './AboutUs.css';
import Navbar from '../addOns/Navbar';
import Footer from '../addOns/Footer';


export default function AboutUs() {
  return (
    <div className='AboutUs'>
        <div><Navbar /></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 middle-text'>
            <h2>About Us</h2>
            <p>
              At our deepfake detection company, we are committed to using state-of-the-art technology and machine learning models to combat the harmful effects of deepfakes on society.
            </p>
            <p>
              Our team of experts includes leading AI researchers, computer scientists, and data analysts who are passionate about creating a safer and more secure world for all.
            </p>
          </div>
          <div className='col-md-6 middle-image'>
            <img src='https://via.placeholder.com/600x400' alt='Team' />
          </div>
        </div>
      </div>
      <div><Footer /></div>
    </div>
  );
}
