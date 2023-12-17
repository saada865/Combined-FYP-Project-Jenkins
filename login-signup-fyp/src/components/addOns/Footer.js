import React from 'react';
import './Footer.css';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" type="text/css"></link>


export default function Footer() {
  return (
    <div className='Footer bg-dark'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h5>About Us</h5>
            <p className='first-text'>
              At Kashf Sahte, our mission is to help people detect deepfakes
              with our state-of-the-art AI models.
            </p>
          </div>
          <div className='col-md-4'>
            <h5>Contact Us</h5>
            <p>
              Email us at <a href='mailto:KashfSahte@gmail.com'>KashfSahte@gmail.com</a> or follow us on social media.
            </p>
          </div>
          <div className='col-md-4'>
            <h5>Follow Us</h5>
            <p>Follow us on Facbeook, Instagram, Twiiter.</p>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <a href='#'>
                  <i class='fab fa-facebook-f'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='#'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
