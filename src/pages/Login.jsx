import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }){
  // setIsLoggedIn=

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if(email === "student@gmail.com" && password === "23456"){
      localStorage.setItem("isLoggedIn", true);

      setIsLoggedIn(true);
      
      navigate("/home");
    }
    else{
      setError("Invalid Email or Password");
    };
  };

  return(
  
   <div className="login-container">
   <div className="login-box">

      <h2 style={{ color: "#0F164A" }}> Login To S-T-M Portal </h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Login</button>
        <button type="cancel" className="btn-space">Cancel</button>
        
      </form>

      <p style={{color:"red"}}>{error}</p> 

    </div>
  </div>

  );
};

export default Login;
