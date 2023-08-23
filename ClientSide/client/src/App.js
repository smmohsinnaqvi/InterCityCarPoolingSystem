import logo from "./logo.svg";
import "./App.css";
import RegForm from "./Components/RegForm";
import { Link, Route, Routes } from "react-router-dom";
import GetEmps from "./Components/GetEmps";
import Login from "./Components/Login";
import RegUser from "./Components/RegUser";
import LandingPage from "./Components/LandingPage";
import CarOwnerLandingPage from "./Components/CarOwnerLandingPage";
import { useSelector } from "react-redux";
import Logout from "./Components/Logout";
function App() {

//intitial state of logged
 const mystate=useSelector((state)=>state.logged);

  return (
    <div className="App">
      <div style={{display:mystate.loggedIn?"none":"block"}}>
        <div className="navigation" style={{ position: "relative" }}>
          <div className="navigation_item">
            <Link to="/Reg">Register</Link>
          </div>
          <div className="navigation_item">
            <Link to="/">About</Link>
          </div>
          <div className="navigation_item">
            <Link to="/">Contact</Link>
          </div>
          <div
            className="navigation_item"
            style={{ position: "absolute", right: "0" }}
          >
            <Link to="/">Login</Link>
          </div>
        </div>
      </div>
      <header className="App-header">
        <Routes>
          <Route path="/Reg" element={<RegUser />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Main" element={<LandingPage />}></Route>
          <Route path="/CMain" element={<CarOwnerLandingPage />}></Route>
          <Route path="/" element={<Logout />}></Route>

        </Routes>
      </header>
    </div>
  );
}

export default App;
