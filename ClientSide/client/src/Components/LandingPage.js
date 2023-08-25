import { Button, Card, Carousel, Col, Row, Select } from "antd";
import Image1 from "../Assests/1.jpg";
import Image2 from "../Assests/4.jpg";
import Image3 from "../Assests/3.jpg";
import "./modules.css";
import { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const initialState = {
  startCity: null,
  endCity: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.fld]: action.value };
    case "reset":
      return initialState;
  }
};

export default function LandingPage(props) {
  const [travel, dispatch] = useReducer(reducer, initialState);

  const [cities, setCities] = useState([]);

  const [rides, setRides] = useState([]);

  const [user, setUser] = useState();

  const navigate=useNavigate();
  useEffect(() => {

    const loginid = JSON.parse(localStorage.getItem("loggedUser")).id;
    fetch(`http://localhost:8080/getUser?login_id=${loginid}`)
      .then(res => res.json())
      .then(obj => {
        console.log(obj)
        localStorage.setItem("loggedCarUser", JSON.stringify(obj))
        setUser(obj);
      });

    fetch("http://localhost:8080/getCities")
      .then((res) => res.json())
      .then((cities) => setCities(cities));

  }, []);

  const showRide = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/getRidesBetweenTwoCities?start_location=${travel.startCity}&end_location=${travel.endCity}`)
      .then((res) => res.json())
      .then((rides) => setRides(rides))
  }
    // useEffect(() => {
    // console.log(rides)
    // }, [rides]);

  const mystate = useSelector((state) => state.logged);
  return (
    <>
      <div style={{ display: mystate.loggedIn ? "block" : "none" }}>

        <div className="navigation" style={{ position: "relative" }}>
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
            <Link to="/logout">Logout</Link>
          </div>
        </div>
        <div>
        </div>
        <Carousel autoplay>
          <div className="car_Image">
            <img src={Image1} alt="1" />
            <p className="car_caption">Look for a nearby ride.</p>
          </div>
          <div className="car_Image">
            <img src={Image2} alt="2" />
            <p className="car_caption">Offer rides.</p>
          </div>
          <div className="car_Image">
            <img src={Image3} alt="3" />
            <p className="car_caption">Save yourself from city hassles.</p>
          </div>
        </Carousel>
      </div>
      <div className="lp">
        <h2>Welcome {user && user.fname}</h2>
        <form className="mb-3 frm">
          <div className="row">
            <div className="col">
              <Select
                name="startCity"
                type="text"
                className="form-control si"
                defaultValue="0"
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fld: "startCity",
                    value: e,
                  });
                }}
              >
                <Select.Option value="0">--Source City --</Select.Option>
                {cities.map((v) => {
                  return (
                    <Select.Option key={v.id} value={v.id}>
                      {v.city}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <div class="col">
              <Select
                name="endCity"
                type="text"
                className="form-control si"
                defaultValue="0"
                onChange={(e) => {
                  dispatch({
                    type: "update",
                    fld: "endCity",
                    value: e,
                  });
                }}
              >
                <Select.Option value="0">--Destination City --</Select.Option>
                {cities.map((v) => {
                  return (
                    <Select.Option key={v.id} value={v.id}>
                      {v.city}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
          </div>
          <Button type="button" className="btn btn-secondary" onClick={(e) => { showRide(e) }}>
            Search Ride
          </Button>
        </form>

        <p>{JSON.stringify(travel)}</p>
        <div className="rides">
          <Row gutter={16}>
            {
                rides.map(r => {
                  return (
                    <Col span={8}>
                      <Card title={`${r.start_location.city} - ${r.end_location.city}`} style={{ border: "2px solid black" }} bordered={false}>
                        <h5>
                          {r.users.fname}
                          <span> </span>
                          {r.users.lname}
                        </h5>
                        <p>
                          <b>Price : {r.price_per_seat}</b><br/>
                          <b>Seats :{r.available_seats}</b>
                        </p>
                        <p>Car :{r.vehicles.carmodels.carcompany.company_name} {r.vehicles.carmodels.model_name}</p>
                        <p><b>Time of depature: {r.time_and_date_of_departure} </b></p>
                        <p><b>Time of arrival: {r.time_of_arival} </b></p>
                        <Button type="button" style={{backgroundColor:'gray'}} onClick={()=>{navigate("/carBook")}}>Book</Button>
                      </Card>
                    </Col>
                  );
                })
            }
          </Row>
        </div>
      </div>
    </>
  );
}
LandingPage.defaultProps = {
  name: "New User",
};

