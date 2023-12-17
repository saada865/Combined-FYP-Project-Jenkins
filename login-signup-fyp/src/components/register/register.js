import React, {useImperativeHandle, useState} from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name, email, password, reEnterPassword} = user
        if(name && email && password && 
            (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                // alert(res.data.message)
                navigate("/login")
            })
        }
        else{
            // alert("invalid input")
        }
        
    }

    return (
        <div className="register">
            <div className="register-container">
                <h1>Register</h1>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } ></input>
                {/* <input type="email" name="email" value={user.email} placeholder="Enter Email" onChange={ handleChange } pattern=".+@globex\.com" required></input> */}
                <input type="email" name="email" value={user.email} placeholder="Enter Email" onChange={ handleChange } required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" title="Please enter a valid email address"></input>


                <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={ handleChange } required></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter Password" onChange={ handleChange } ></input>

                <div className="button" onClick={register}>Register</div>
                <div>or</div>
                <div className="button" onClick={() =>navigate("/login")}>Login</div>
            </div>
        </div>
    )
}

export default Register
