import logo from "./logo.svg";
import "./App.css";

import { Link, Route, Routes } from "react-router-dom";

import Login from "./Components/Login";
import RegUser from "./Components/RegUser";
import LandingPage from "./Components/LandingPage";
import About from "./Components/About";
function App() {
  return (
    <div className="App">
      <div className="navigation" style={{ position: "relative" }}>
        <div className="navigation_item">
          <Link to="/About">About</Link>
        </div>
        <div className="navigation_item">

          <Link to="/Reg">Register</Link>
        </div>
        <div
          className="navigation_item"
          style={{ position: "absolute", right: "0" }}
        >
          <Link to="/">Login</Link>
        </div>
      </div>
      <header className="App-header">
        <Routes>
        
          <Route path="/Reg" element={<RegUser />}></Route>
        
          <Route path="/About" element={<About />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Main" element={<LandingPage />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
