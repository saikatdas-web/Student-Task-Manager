import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Theme from "./Theme";


function Header({ setIsLoggedIn, theme, setTheme }) {


  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");
    
    setIsLoggedIn(false);

    navigate("/");
};

  return(

     <div style={{display:"flex",justifyContent:"space-between",background:"#ddd",padding:"10px"}}>

      <h2> Student Task Manager </h2>

      <div>

        <Link to="/home">🏠Home</Link> {" | "}         
        <Link to="/about">ℹ️About</Link>{" | "}
        <Link to="/dashboard">📊Dashboard</Link> {" | "}
        <Link to="/tasks">📋Tasks</Link> {" | "}

      <Theme theme={theme} setTheme={setTheme} />  

      </div>

<button
  
  onClick={handleLogout} className="logout-btn">Logout
  
</button>

</div>
 
);

};

export default Header;
