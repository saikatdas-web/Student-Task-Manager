import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Home from "./pages/Home";
import Header from "./components/Header";




function App() {

  // const isLoggedIn = localStorage.getItem("isLoggedIn");

   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    
    <div className={theme}>

      <Router> 

      {/* {isLoggedIn && <Header theme={theme} setTheme={setTheme}/>} */}

      {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} theme={theme} setTheme={setTheme} />}

      <Routes>

         <Route path="/" element={isLoggedIn ? <Navigate to="/home"/> : <Login setIsLoggedIn={setIsLoggedIn}/>} />

         <Route path="/home" element={isLoggedIn ? <Home/> : <Navigate to="/" />} />

         <Route path="/about" element={isLoggedIn ? <About/> : <Navigate to="/" />} /> 

        <Route path="/dashboard" element={isLoggedIn ? <Dashboard/> : <Navigate to="/" />} />

        <Route path="/tasks" element={isLoggedIn ? <Tasks/> : <Navigate to="/" />} />

      </Routes>
      
    
    
     {isLoggedIn && <footer className="footer">
    
    <p className="slide-text">
      
    💻 This Site Is Officially Developed By "SAIKAT DAS" by Using React </p>
        
    </footer>} 
    
     </Router>

    </div>

  );
};
  
export default App;
