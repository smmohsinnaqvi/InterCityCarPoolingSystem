import logo from './logo.svg';
import './App.css';
import RegForm from './Components/RegForm';
import { Link, Route, Routes } from 'react-router-dom';
import GetEmps from './Components/GetEmps';
import Login from './Components/Login';
import RegUser from './Components/RegUser';
import LandingPage from './Components/LandingPage';
function App() {
  return (
    <div className="App">
      <ul className='nav navbar'>
        <li className='nav-item'><Link to="/RegForm">Register Employee</Link></li>
        <li className='nav-item'><Link to="/GetEmps">Employees</Link></li>
        <li className='nav-item '><Link to="/">Login</Link></li>
      </ul>
      <header className="App-header">
        <Routes>
          <Route path="/Main" element={<LandingPage/>}></Route>
        <Route path='/RegForm' element={<RegForm/>}></Route>
          <Route path='/Reg' element={<RegUser/>}></Route>
          <Route  path='/GetEmps' element={<GetEmps/>}></Route>
          <Route path="/" element={<Login/>}></Route>
        </Routes>

      </header>
    </div>
  );
}

export default App;

