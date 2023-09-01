import { Button, Form, Input, Select } from "antd";
import { useEffect, useReducer, useState } from "react";
import CarOwnerNav from "./CarOwnerNav";
import { useNavigate } from "react-router-dom";
import addRideImage from '../../Assests/AddRide.jpg'

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

    const navigate = useNavigate();

    const [cities, setCities] = useState([]);

    const [vehicles, setVehicles] = useState([]);

    const[rides,setRides]=useState([]);

    const [disabled,setDisabled]=useState(true);

    const [msg, setMsg] = useState(null);

    const carOwner = JSON.parse(localStorage.getItem("loggedCarOwner"));

    console.log(carOwner.id);

    useEffect(() => {
        fetch("http://localhost:8080/getCities")
            .then((res) => res.json())
            .then((cities) => setCities(cities));

        //getting vehicles for current car owner from car list

        fetch("http://localhost:8080/getVehiclesFromUserid?uid="+carOwner.id)
            .then((res) => res.json())
            .then((vehicles) => setVehicles(vehicles));


        //No two rides on same day
        fetch("http://localhost:8080/getAllRidesById?carowner_id=" + carOwner.id)
            .then((res) => res.json())
            .then((rides) => setRides(rides));


    }, [])


    const addRide = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                carowner_id: carOwner.id,
                start_location: ride.s_city, end_location: ride.e_city,
                date_of_journey: ride.doj,
                vehicle_id: ride.vehicle,
                time_of_departure: ride.d_time, time_of_arival: ride.r_time,
                price_per_seat: ride.price,
                available_seats: ride.seats,
                status: "pending"
            }),
        };
        fetch("http://localhost:8080/addRide", reqOptions)
            .then((res) => res.text())
            .then((data) => {
                if (data.length > 2) {
                    setMsg("Ride Created Successfully");
                } else setMsg("Failed to Create Ride");
            })
            .catch((e) => {
                setMsg("Failed to Create Ride")
            })


    }
    return (
        <div className="rideForm">
            <CarOwnerNav />
            <h3 style={{ marginTop: '40px', backgroundColor: '#4682a9', height: '50px', color: "whitesmoke" }}>Add Ride</h3>
            <div className="message" style={{ display: vehicles.length ? "none" : "block", marginTop: '300px' }}>
                <h4 style={{ margin: '20px' }}>Please Enter Vehicle Information First</h4>
                <Button type="button" className="bg-warning" onClick={() => { navigate("/addVehicle") }}><b>Add Vehicles Information</b></Button>
            </div>
            {
                vehicles.length > 0
                &&
                (
                    <>

                        <form className="rideForms">
                            <Form.Item label="Start City" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }}>
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
                            <Form.Item label="End City" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }}>
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
                            <Form.Item style={{ width: '50%', fontWeight: 'bold' }} label="Date Of Journey" labelCol={{ span: 24 }}>
                                <Input type="date" name="doj" onChange={(e) => { 
                                    //Validating 
                                    const date1=new Date();
                                    const date2=new Date(e.target.value);
                                    if(date1<=date2)
                                    {
                                        setDisabled(false);
                                            rides.map((r)=>{
                                                        if(r.date_of_journey===date2)
                                                         setDisabled(true);
                                                    
                                            })
                                            dispatchr({ type: 'update', fld: 'doj', value: e.target.value })   
                                    }
                                    else if(date1>date2){
                                        e.preventDefault();
                                        setDisabled(true);
                                    }
                                    
                                    }

                                    
                                    
                                    }></Input>


                            </Form.Item>
                            <Form.Item label="Time of Departure" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }}>
                                <input type="time" step="1" name="d_time" onChange={(e) => { dispatchr({ type: 'update', fld: 'd_time', value: e.target.value }) }}></input>
                                {/* <Space wrap>
                        <TimePicker name="d_time" defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" onChange={(e) => { dispatchr({ type: 'update', fld: 'd_time', value: e }) }} />
                    </Space> */}
                            </Form.Item>
                            <Form.Item label="Time of Reaching" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }}>
                                <input type="time" step="1" name="r_time" onChange={(e) => { dispatchr({ type: 'update', fld: 'r_time', value: e.target.value }) }}></input>

                                {/* <Space wrap>
                        <TimePicker name="r_time" defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" onChange={(e) => { dispatchr({ type: 'update', fld: 'r_time', value: e }) }} />
                    </Space> */}
                            </Form.Item>

                            <Form.Item label="Select Car" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }}>
                                <Select name="vehicle" placeholder="--Select Vehicle--" className="" onChange={(e) => { dispatchr({ type: 'update', fld: "vehicle", value: e }) }}>
                                    {
                                        vehicles.map((v) => {
                                            return (
                                                <Select.Option key={v} value={v.id}>{v.carmodels.model_name}</Select.Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Form.Item>

                            <Form.Item label="Price per seat" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }} >
                                <Input type="number" name="price" onChange={(e) => { dispatchr({ type: 'update', fld: "price", value: e.target.value }) }} max="1000"></Input>

                            </Form.Item>

                            <Form.Item label="Number Of Seats" labelCol={{ span: 24 }} style={{ fontWeight: 'bold' }}>
                                <Select name="seats" placeholder="--Select Seats --" className="" onChange={(e) => { dispatchr({ type: 'update', fld: 'seats', value: e }) }}>

                                    <Select.Option value="1">1</Select.Option>
                                    <Select.Option value="2">2</Select.Option>
                                    <Select.Option value="3">3</Select.Option>
                                    <Select.Option value="4">4</Select.Option>
                                    <Select.Option value="5">5</Select.Option>
                                </Select>
                            </Form.Item>
                            <button type="button" disabled={disabled} className="btn btn-light btn-lg btn-block" onClick={(e) => { addRide(e) }}>ADD RIDE</button>
                            <div className="message" style={{ display: msg !== null ? "block" : "none" }}>
                                <p style={{ color: 'green' }}>{msg}</p>
                            </div>
                            {/* <button>ADD RIDE</button> */}
                        </form>

                        {/* <div className="AddRideImg">
                            <img src={addRideImage} alt="addRide Image"></img>
                        </div> */}
                    </>

                )

            }
            {/* <p>{JSON.stringify(ride)}</p> */}
        </div>
    )
}