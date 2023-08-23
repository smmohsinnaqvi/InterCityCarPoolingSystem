import { Card, Carousel, Col, Form, Input, Select, Space, TimePicker } from "antd";
import Image1 from "../Assests/1.jpg";
import Image2 from "../Assests/4.jpg";
import Image3 from "../Assests/3.jpg";
import dayjs from 'dayjs';
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const initialStateVehicle = {

    car_com: null,
    car_mod: null,
    rc: null,
    color: null
}

const reducerV = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value }
    }
}

const initialStateRide = {

    s_city: null,
    e_city: null,
    doj: null,
    d_time: null,
    r_time: null,
    seats: null
}

const reducerR = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value }
    }
}

export default function CarOwnerLandingPage() {

    const [vehicle, dispatchv] = useReducer(reducerV, initialStateVehicle);
    const [ride, dispatchr] = useReducer(reducerR, initialStateRide);

    const [fm, setFm] = useState(0);
    const [carcom, setCarcom] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/getAllCarCompany")
            .then((res) => res.json())
            .then((carcom) => setCarcom(carcom));
        fetch("http://localhost:8080/getCities")
            .then((res) => res.json())
            .then((cities) => setCities(cities));
    }, []);
    const mystate = useSelector((state) => state.logged);

    return (
        <>
            <div style={{display:mystate.loggedIn?"block":"none"}}>

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
                        <Link to="/">Logout</Link>
                    </div>
                </div>
            </div>
            <div>
                <Carousel autoplay>
                    <div className="car_Image">
                        < img src={Image1} alt="1" />
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
            <Col span={24}>
                <Card title="Start A Ride" style={{ border: '2px solid black' }}>
                    <button type="button" onClick={(e) => { setFm(2) }}>Create Ride</button>
                </Card>
            </Col>
            <Col span={24}>
                <Card title="Add Vehicle" style={{ border: '2px solid black' }}>
                    <button type="button" onClick={(e) => { setFm(1) }}>Register/Add Vehicle</button>
                </Card>
            </Col>
            {fm === 1 &&

                <div className="addVehicle">
                    <form className="">
                        <Form.Item label="Car Company" labelCol={{ span: 24 }} style={{}}>
                            <Select name="car_com" defaultValue="0" className="" onChange={(e) => { dispatchv({ type: 'update', fld: 'car_com', value: e }) }}>
                                <option value='0'>--Select Car Company --</option>
                                {
                                    carcom.map((v) => {
                                        return (
                                            <option key={v.id} value={v.id}>{v.company_name}</option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="Car Model" labelCol={{ span: 24 }} style={{}}>
                            <Select name="car_mod" defaultValue="0" className="" onChange={(e) => { dispatchv({ type: 'update', fld: 'car_mod', value: e }) }}>
                                <option value='0'>--Select Car Model --</option>

                                <option value="1">Fortuner</option>
                                <option value="2">Innova</option>
                                <option value="3">Scorpio</option>
                                <option value="4">Wagon-R</option>
                                <option value="5">Safari</option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Registration Certificate (RC)" labelCol={{ span: 24 }}>
                            <Input type="number" name="rc" onChange={(e) => { dispatchv({ type: 'update', fld: 'rc', value: e.target.value }) }} required></Input>
                        </Form.Item>
                        <Form.Item label="Color Of Vehicle" labelCol={{ span: 24 }} style={{}}>
                            <Select name="color" defaultValue="0" onChange={(e) => { dispatchv({ type: 'update', fld: 'color', value: e }) }} className="">
                                <Select.Option value='0'>--Select Color --</Select.Option>
                                <Select.Option value="1">Red</Select.Option>
                                <Select.Option value="2">Black</Select.Option>
                                <Select.Option value="3">Green</Select.Option>
                                <Select.Option value="4">Blue</Select.Option>
                                <Select.Option value="5">Gray</Select.Option>
                            </Select>
                        </Form.Item>
                        <p>{JSON.stringify(vehicle)}</p>
                    </form>
                </div>
            }
            {fm === 2 &&

                <div className="rideForm">
                    <form className="">
                        <Form.Item label="Start City" labelCol={{ span: 24 }} style={{}}>
                            <Select name="s_city" className="" onChange={(e) => { dispatchr({ type: 'update', fld: 's_city', value: e }) }}>
                                <Select.Option value='0'>--Select City --</Select.Option>
                                {
                                    cities.map((v) => {
                                        return (
                                            <Select.Option key={v.id} value={v.id}>{v.city}</Select.Option>
                                        )
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="End City" labelCol={{ span: 24 }} style={{}}>
                            <Select name="e_city" className="" onChange={(e) => { dispatchr({ type: 'update', fld: 'e_city', value: e }) }}>
                                <Select.Option value='0'>--Select City --</Select.Option>
                                {
                                    cities.map((v) => {
                                        return (
                                            <Select.Option key={v.id} value={v.id}>{v.city}</Select.Option>
                                        )
                                    })
                                }

                            </Select>
                        </Form.Item>
                        <Form.Item style={{ width: '50%' }} label="Date Of Journey" labelCol={{ span: 24 }}>
                            <Input type="date" name="doj" onChange={(e) => { dispatchr({ type: 'update', fld: 'doj', value: e.target.value }) }}></Input>
                        </Form.Item>
                        <Form.Item label="Time of Departure" labelCol={{ span: 24 }} style={{}}>
                            <Space wrap>
                                <TimePicker name="d_time" defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" onChange={(e) => { dispatchr({ type: 'update', fld: 'd_time', value: e }) }} />
                            </Space>
                        </Form.Item>
                        <Form.Item label="Time of Reaching" labelCol={{ span: 24 }} style={{}}>
                            <Space wrap>
                                <TimePicker name="r_time" defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" onChange={(e) => { dispatchr({ type: 'update', fld: 'r_time', value: e }) }} />
                            </Space>
                        </Form.Item>

                        <Form.Item label="Number Of Seats" labelCol={{ span: 24 }} style={{}}>
                            <Select name="seats" defaultValue="0" className="" onChange={(e) => { dispatchr({ type: 'update', fld: 'seats', value: e }) }}>
                                <Select.Option value='0'>--Select Seats --</Select.Option>
                                <Select.Option value="1">1</Select.Option>
                                <Select.Option value="2">2</Select.Option>
                                <Select.Option value="3">3</Select.Option>
                                <Select.Option value="4">4</Select.Option>
                                <Select.Option value="5">5</Select.Option>
                            </Select>
                        </Form.Item>
                        <p>{JSON.stringify(ride)}</p>
                    </form>
                </div>
            }




        </>
    )
}
