import { Card, Carousel, Col, Row, Select } from "antd";
import Image1 from "../Assests/1.jpg";
import Image2 from "../Assests/4.jpg";
import Image3 from "../Assests/3.jpg";
import "./modules.css";
import { useEffect, useReducer, useState } from "react";

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
  useEffect(() => {
    fetch("http://localhost:8080/getCities")
      .then((res) => res.json())
      .then((cities) => setCities(cities));
  }, []);
  return (
    <>
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
      <div className="lp">
        <h2>Welcome {props.name}</h2>
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
          <button type="button" className="btn btn-secondary">
            Search Ride
          </button>
        </form>

        <div className="rides">
          <p>{JSON.stringify(travel)}</p>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
LandingPage.defaultProps = {
  name: "New User",
};

