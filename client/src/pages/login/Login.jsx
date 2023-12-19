import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
import newRequest from "../../../utils/newRequest.util";


function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    
  }

  const googleAuth = async () => {
    window.open(
      `http://localhost:8800/auth/google`,
      "_self"
    )
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input name="username" type="text" placeholder="johndoe" onChange={e=>{setUsername(e.target.value)}} />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          placeholder="johndoe@gmail.com"
          onChange={e=>{setPassword(e.target.value)}}
        />
        <button type="submit">Login</button>
      </form>
      <button className="btnGoogle" onClick={googleAuth}>
          <GoogleIcon className="icon"/>
          <span> Sign In With Google</span>
      </button>
      <Link to="/signup">New user? Sign up</Link>
      
    </div>
  )
}

export default Login