import './App.css';
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import AboutUs from './components/about/AboutUs';

import {
  BrowserRouter as Router, Routes, Route, Link}
   from "react-router-dom";
import {useState} from "react";

function App() {

  const [user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <nav>
          {/* <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul> */}
        </nav>
        <Routes>
          {/* <Route exact path="/" element={user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>} /> */}
          <Route exact path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>} />

          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus"element={<AboutUs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

{/* <Route exact path="/">{
  user&& user_id
  ?
  <Homepage/>
  :
  <Login/>
}</Route> */}


export default App;
