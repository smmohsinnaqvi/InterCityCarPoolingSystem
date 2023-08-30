import {Carousel} from "antd";
import Image1 from "../Assests/1.jpg";
import Image2 from "../Assests/4.jpg";
import Image3 from "../Assests/3.jpg";
import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import CarOwnerNav from "./CarOwnerComponents/CarOwnerNav";



export default function CarOwnerLandingPage() {
  const [carOwner, setCarOwner] = useState();

  useEffect(() => {
    const loginid = JSON.parse(localStorage.getItem("loggedUser")).id;

    fetch("http://localhost:8080/getUser?login_id=" + loginid)
      .then((res) => res.json())
      .then((obj) => {
        localStorage.setItem("loggedCarOwner", JSON.stringify(obj));
        setCarOwner(obj);
        //console.log(carOwner);
      });

  }, []);
  //const mystate = useSelector((state) => state.logged);

  return (
    <>
      <CarOwnerNav/>
      <div>
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
      {/* <Col span={24}>
                <Card title="Start A Ride" style={{ border: '2px solid black' }}>
                    <button type="button" onClick={(e) => { setFm(2) }}>Create Ride</button>
                </Card>
            </Col>
            <Col span={24}>
                <Card title="Add Vehicle" style={{ border: '2px solid black' }}>
                    <button type="button" onClick={(e) => { setFm(1) }}>Register/Add Vehicle</button>
                </Card>
            </Col> */}
      <h1> Welcome {carOwner && carOwner.fname}</h1>
    </>
  );
}
