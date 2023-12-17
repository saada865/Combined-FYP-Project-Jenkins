import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import Navbar from '../addOns/Navbar';
import Footer from '../addOns/Footer';

const Homepage = ({setLoginUser}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState('');
  const [showParent, setShowParent] = useState(false);
  const [deepfakeButton,setdeepfakeButton] = useState(false);

  function handleChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setError(null);
    } else {
      setFile(null);
      setError('Please Upload File to Continue');
    }
  }

  const handleSubmit=(event) =>{
    event.preventDefault();
    if (!file) {
      setError('Please Upload File to Continue');
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowParent(true);
    }, 100);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setdeepfakeButton(true);
    }, 2000);
  }, []);

  return (
    <div className="homepage">
      
    {/* <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src="" alt="" />
          Kashf Sahte
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item1 nav-link active" href="#">
              Home
            </a>
            <a className="nav-item nav-link" href="#">
              Subscription
            </a>
            <a className="nav-item nav-link" href="#">
              Detection
            </a>
          </div>
        </div>
      </nav>
    </div> */}
      {/* <Navbar /> */}
      <div><Navbar /></div>
      
      <div className="AudioUploadForm">
        <form action='/' className="SubmitAudio" onSubmit={handleSubmit}>
          <div className={`parent ${showParent ? 'parent-animation' : ''}`}>
            <div className="file-upload">
              {/* <img src={require('../Images/Image.png')} alt="upload" /> */}
              <h3>Click box to upload</h3>
              {error ? <div>{error}</div> : <div>{fileName}</div>}
              <input onChange={handleChange} type="file" />
            </div>
          </div>
          <div className=''>
          <div className={`AudioSubmitButton ${deepfakeButton ? 'button-animation' : ''}`}>
            <button className="btn btn-outline-primary" type="submit">
              Detect Deepfake
            </button>
            <div className="btn btn-outline-primary" onClick={() => setLoginUser({})}>Logout</div>
          </div>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
      {/* <div className='Footer'>
<div className='name-logo'>
<img className='footer-logo' alt='image' src={require("../Images/Image.png")}></img>
<h5 className='company-name'>Kashf Sahte</h5>
</div>
<div className='company-info'>
<h5>What we are</h5>
<p className='what-we-are-text'>
Detect Deepfakes with our state of the art AI models.</p>

</div>
<div className='contact-info'>
<h5>Contact Us</h5>
<h6 className='email'>KashfSahte@gmail.com</h6>
</div>
</div> */}
  <div><Footer /></div>

    </div>
  );
};

export default Homepage;
