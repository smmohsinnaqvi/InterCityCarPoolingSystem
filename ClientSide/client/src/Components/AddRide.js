import { Form, Input, Select, Space, TimePicker } from "antd";
import { useEffect, useReducer, useState } from "react";
import dayjs from 'dayjs';
import CarOwnerNav from "./CarOwnerNav";

const initialStateRide = {

    s_city: null,
    e_city: null,
    doj: null,
    d_time: null,
    r_time: null,
    vehicle: null,
    price: null,
    seats: null,
}

const reducerR = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value }
    }
}
export default function AddRide() {
    const [ride, dispatchr] = useReducer(reducerR, initialStateRide);
    const [cities, setCities] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const[msg,setMsg]=useState(null);
    const carOwner = JSON.parse(localStorage.getItem("loggedCarOwner"));
    console.log(carOwner.id);
    useEffect(() => {
        fetch("http://localhost:8080/getCities")
            .then((res) => res.json())
            .then((cities) => setCities(cities));
        fetch("http://localhost:8080/getVehiclesFromUserid?uid="+carOwner.id)
            .then((res) => res.json())
            .then((vehicles) => setVehicles(vehicles));
    }, [])


    const addRide = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ carowner_id: carOwner.id, start_location: ride.s_city, end_location: ride.e_city, vehicle_id: ride.vehicle, time_and_date_of_departure: ride.d_time,time_of_arival:ride.r_time,price_per_seat:ride.price,Available_seats:ride.seats }),
        };
        fetch("http://localhost:8080/addRide", reqOptions)
            .then((res) => res.text())
            .then((data) => {
                if (data.length > 2) {
                    setMsg("Ride Created Successfully");
                } else setMsg("Failed to Create Ride");
            })
            .catch((e)=>
            {
                console.log(e);
            })


    }
    return (
        <div className="rideForm">
            <CarOwnerNav />
            <form className="">
                <Form.Item label="Start City" labelCol={{ span: 24 }} style={{}}>
                    <Select name="s_city" placeholder="--Select City --" className="" onChange={(e) => { dispatchr({ type: 'update', fld: 's_city', value: e }) }}>
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
                    <Select name="e_city" placeholder="--Select City--" className="" onChange={(e) => { dispatchr({ type: 'update', fld: 'e_city', value: e }) }} >
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

                <Form.Item label="Select Car" labelCol={{ span: 24 }}>
                    <Select name="vehicle" placeholder="--Select Vehicle--" className="" onChange={(e) => { dispatchr({ type: 'update', fld: "vehicle", value: e }) }}>
                        {
                            vehicles.map((v)=>{
                                return(
                                    <Select.Option key={v} value={v.id}>{v.carmodels.model_name}</Select.Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item label="Price per seat" labelCol={{ span: 24 }}>
                    <Input type="number" name="price" onChange={(e) => { dispatchr({ type: 'update', fld: "price", value: e.target.value }) }} max="1000"></Input>

                </Form.Item>

                <Form.Item label="Number Of Seats" labelCol={{ span: 24 }} style={{}}>
                    <Select name="seats" placeholder="--Select Seats --" className="" onChange={(e) => { dispatchr({ type: 'update', fld: 'seats', value: e }) }}>

                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="2">2</Select.Option>
                        <Select.Option value="3">3</Select.Option>
                        <Select.Option value="4">4</Select.Option>
                        <Select.Option value="5">5</Select.Option>
                    </Select>
                </Form.Item>
                <button type="button" onClick={(e)=>{addRide(e)}}>ADD RIDE</button>
                {/* <button>ADD RIDE</button> */}
            </form>
            {/* <p>{JSON.stringify(ride)}</p> */}
        </div>
    )
}