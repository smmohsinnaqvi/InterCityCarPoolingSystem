import { Button, Card, Carousel, Col, Form, Input, Row, Select } from "antd";
import Image1 from "../Assests/1.jpg";
import Image2 from "../Assests/4.jpg";
import Image3 from "../Assests/3.jpg";
import "./modules.css";
import { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useSelector } from "react-redux";
import CarUserNav from "./CarUserComponents/CarUserNav";
import Icon, { CloseCircleFilled } from '@ant-design/icons';

const initialState = {
  startCity: null,
  endCity: null,
  date: ""
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

  //Maintaining cities API
  const [cities, setCities] = useState([]);

  //Maintaining rides API
  const [rides, setRides] = useState([]);

  //use-loggedCarUser object
  const [user, setUser] = useState();


  //For date Validation
  const [disabled, setDisabled] = useState(false);
  //No. of seats
  const [seats, setSeats] = useState();
  //flag for no rides
  const [search, setSearch] = useState(false);

  const [msg, setMsg] = useState(null)
  const [selectedValue, setSelectedValue] = useState("");
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
    //get rides from city 1 to city 2 and on date mentioned by user
    // fetch(`http://localhost:8080/getRidesBetweenTwoCities?start_location=${travel.startCity}&end_location=${travel.endCity}`)
    //   .then((res) => res.json())
    //   .then((rides) => setRides(rides))

    fetch(`http://localhost:8080/getAllRidesFromOneCityToAnotherCityByDate?start_location=${travel.startCity}&end_location=${travel.endCity}&date_of_journey=${travel.date}`)
      .then((res) => res.json())
      .then((rides) => {
        setRides(rides);
        if (rides.length === 0) {
          setSearch(true);
        }
        else
          setSearch(false);

      })
  }
  // useEffect(() => {
  // console.log(rides)
  // }, [rides]);

  let navigate = useNavigate();

  //Adding Booking information into DB
  const addBook = (r) => {
    let date = new Date().toJSON();
    let tot = seats * r.price_per_seat;
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        time: date,
        no_of_seats: seats,
        passenger_id: user.id,
        ride_id: r.id,
        total_price: tot,
        status: "pending"
      })
    };
    fetch("http://localhost:8080/addBooking", reqOptions)
      .then(res => res.text())
      //maintaining local storage and navigating to payment
      .then((data) => { if (data.length > 2) { localStorage.setItem("book", data); navigate("/payment") } else setMsg("Booking Failed") })
      .catch((e) => {
        alert("Failed to Create Ride")
      })
  }

 // const mystate = useSelector((state) => state.logged);
  return (
    <>
      <CarUserNav />
      {/* <div style={{ display: mystate.loggedIn ? "block" : "none" }}>

        <div className="navigation" style={{ position: "relative" }}>
          <div className="navigation_item">
            <Link to="/about">About</Link>
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
        </div> */}
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
      <h2 style={{ color: '#4682a9', margin: '5px' }}>Welcome {user && user.fname}</h2>
      <div className="lp form-container">
        <form className="mb-3 frm">
          <div className="row">
            <div className="col">
              <Form.Item rules={[
        {
          required: true,
          message: 'Please Select Source City',
        },
      ]}>

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
                    setSelectedValue(e);
                  }}
                >
                  <Select.Option value="0" >--Source City --</Select.Option>
                  {cities.map((v) => {
                    return (
                      <Select.Option key={v.id} value={v.id} disabled={selectedValue === v.id}>
                        {v.city}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
            <div class="col">
              <Form.Item rules={[
        {
          required: true,
          message: 'Please Select Destination City',
        },
      ]}>

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
                    setSelectedValue(e);
                  }}
                >
                  <Select.Option value="0">--Destination City --</Select.Option>
                  {cities.map((v) => {
                    return (
                      <Select.Option key={v.id} value={v.id} disabled={selectedValue === v.id}>
                        {v.city}
                      </Select.Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <Form.Item label="Date of Journey" labelCol={{ span: 24 }} >
              <Input type="date" name="date" style={{ width: '30%' }} onChange={(e) => {
                console.log(e);
                const date1 = new Date();
                const date2 = new Date(e.target.value);
                console.log(date1);
                console.log(date2);

                if (date1 <= date2) {
                  setDisabled(false);
                  dispatch({
                    type: "update",
                    fld: "date",
                    value: e.target.value,
                  });
                } else if (date1 > date2) {
                  e.preventDefault();
                  setDisabled(true);
                } else {
                  console.log("date1 and date2 are the same");
                }

              }}></Input>
            </Form.Item>
          </div>

          <Button type="button" disabled={disabled} className="btn btn-secondary" onClick={(e) => { showRide(e) }}>
            Search Ride
          </Button>
        </form>

        {/* <p>{JSON.stringify(travel)}</p> */}
        {

          search &&
          <div className="message">
            <div style={{ textAlign: "center" }}>
              <CloseCircleFilled style={{ color: "#4682a9", fontSize: "large" }} />
            </div>
            <h4 style={{ color: '#4682a9' }}>Ooops No Ride</h4>
          </div>
        }

        {

          rides.length > 0 &&

          <div className="rides">
            <Row gutter={16}>
              {

                rides.map(r => {
                  return (
                    <Col span={8} key={r.id}>
                      <Card title={`${r.start_location.city} - ${r.end_location.city}`} style={{ border: "2px solid black" }} bordered={false}>
                        <h5>
                          {r.users.fname}
                          <span> </span>
                          {r.users.lname}
                        </h5>
                        <p>
                          <b>Price : {r.price_per_seat}</b><br />
                          <b>Seats :{r.available_seats}</b>
                        </p>
                        <p>Car :{r.vehicles.carmodels.carcompany.company_name} {r.vehicles.carmodels.model_name}</p>
                        <p><b>Date: {r.date_of_journey} </b></p>
                        <p><b>Time of depature: {r.time_of_departure} </b></p>
                        <p><b>Time of arrival: {r.time_of_arival} </b></p>

                        <Form className="">
                          <Form.Item label="Number of Seats :" labelCol={{ span: 24 }} >
                            <Select name="seats" onChange={(e) => { setSeats(e) }}>
                              <Select.Option value="1">1</Select.Option>
                              <Select.Option value="2">2</Select.Option>
                              <Select.Option value="3">3</Select.Option>
                              <Select.Option value="4">4</Select.Option>
                            </Select>

                            <Button type="button" style={{ backgroundColor: 'gray' }} onClick={() => { addBook(r) }}>Book</Button>
                          </Form.Item>
                          {/* <div className="payment" style={{ display: pflag === 1 ? "block" : "none" }}>
                          <p style={{color:'blue'}}>{msg}</p>
                          <button type="button" onClick={()=>{addPayment(r)}} >PAY</button>
                        </div> */}
                        </Form>
                      </Card>
                    </Col>
                  );
                })
              }
            </Row>
          </div>
        }
      </div>
    </>
  );
}
LandingPage.defaultProps = {
  name: "New User",
};

