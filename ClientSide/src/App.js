import logo from "./logo.svg";
import "./App.css";
import RegForm from "./Components/RegForm";
import { Link, Route, Routes } from "react-router-dom";
import GetEmps from "./Components/GetEmps";
import Login from "./Components/Login";
import RegUser from "./Components/RegUser";
import LandingPage from "./Components/LandingPage";
function App() {
  return (
    <div className="App">
      <div className="navigation" style={{ position: "relative" }}>
        <div className="navigation_item">
          <Link to="/RegForm">Register Employee</Link>
        </div>
        <div className="navigation_item">
          <Link to="/GetEmps">Employees</Link>
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
          <Route path="/RegForm" element={<RegForm />}></Route>
          <Route path="/Reg" element={<RegUser />}></Route>
          <Route path="/GetEmps" element={<GetEmps />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Main" element={<LandingPage />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
