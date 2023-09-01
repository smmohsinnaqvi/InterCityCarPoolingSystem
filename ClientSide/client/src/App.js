import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import LandingPage from "./Components/LandingPage";
import CarOwnerLandingPage from "./Components/CarOwnerLandingPage";
import { useSelector } from "react-redux";
import Logout from "./Components/Logout";
import AddVehicle from "./Components/CarOwnerComponents/AddVehicle";
import AddRide from "./Components/CarOwnerComponents/AddRide";
//import CarOwnerNav from "./Components/CarOwnerComponents/CarOwnerNav";
import AdminLandingPage from "./Components/AdminLandingPage";
import ViewUser from "./Components/AdminFuncCompo/ViewUser";
import StatusUpdate from "./Components/AdminFuncCompo/StatusUpdate";
import About from "./Components/About";
import ViewRides from "./Components/AdminFuncCompo/ViewRides";
import Payment from "./Components/CarUserComponents/Payment";
import RegUser from "./Components/RegUser";
import ViewPayment from "./Components/AdminFuncCompo/ViewPayment";
import PassengerReview from "./Components/AdminFuncCompo/Passenger_Review";
import ViewAllBooking from "./Components/AdminFuncCompo/ViewBooking";
import ViewCarOwnerRides from "./Components/CarOwnerComponents/ViewCarOwnerRides";
import ViewUserBookings from "./Components/CarUserComponents/ViewUserBookings";
import Contact from "./Components/Contact";


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
            <Link to="/about">About</Link>
          </div>
          <div className="navigation_item">
            <Link to="/contact">Contact</Link>
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


          <Route path="/" element={<Login />}></Route>
          <Route path="/reg" element={<RegUser/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/contact" element={<Contact/>}></Route>



          {/* Car User Routes */}
          <Route path="/Main" element={<LandingPage />}></Route>
          <Route path="/payment" element={<Payment/>}></Route>
          <Route path="/U_rides" element={<ViewUserBookings/>}></Route>

          {/* Car Owner Routes */}
          {/* <Route path="/carOwnerNav" element={<CarOwnerNav/>}></Route> */}
          <Route path="/CMain" element={<CarOwnerLandingPage />}></Route>
          <Route path="/addVehicle" element={<AddVehicle />}></Route>
          <Route path="/addRide" element={<AddRide/>}></Route>
          <Route path="/C_rides" element={<ViewCarOwnerRides/>}></Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLandingPage/>}></Route>
          <Route path="/ViewUser" element={<ViewUser/>}></Route>
          <Route path="/StatusUpdate" element={<StatusUpdate/>}></Route>
          <Route path="/viewRides" element={< ViewRides/>}></Route>
          <Route path="/ViewPayment" element={<ViewPayment/>}></Route>
          <Route path="/PassengersReviews" element={<PassengerReview/>}></Route>
          <Route path="/ViewAllBooking" element={<ViewAllBooking/>}></Route>



          



          



          



        </Routes>
      </header>
    </div>
  );
}

export default App;
