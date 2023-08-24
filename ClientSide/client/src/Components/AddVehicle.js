import { Form, Input, Select } from "antd";
import { useEffect, useReducer, useState } from "react";
import CarOwnerNav from "./CarOwnerNav";
//import mystate from './CarOwnerLandingPage';
//import carOwner from './CarOwnerLandingPage'
const initialStateVehicle = {

    car_com: 0,
    car_mod: 0,
    rc: "",
    color: "",
    year: 0
}

const reducerV = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value }
    }
}

const year_arr = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

export default function AddVehicle() {
    const [vehicle, dispatchv] = useReducer(reducerV, initialStateVehicle);
    const [carcom, setCarcom] = useState([]);
    const [msg, setMsg] = useState(null);
    useEffect(() => {

        fetch("http://localhost:8080/getAllCarCompany")
            .then((res) => res.json())
            .then((carcom) => setCarcom(carcom));
    }, []);

    const addVehicle = (e) => {
        e.preventDefault();
        const carOwner = JSON.parse(localStorage.getItem("loggedCarOwner"));
        console.log(carOwner.id);
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ userid: carOwner.id, carmodelid: vehicle.car_mod, year: vehicle.year, color: vehicle.year, rc_book: vehicle.rc }),
        };
        fetch("http://localhost:8080/saveVehicle", reqOptions)
            .then((res) => res.text())
            .then((data) => {
                if (data.length > 2) {
                    setMsg("Vehicle Added Successfully");
                } else setMsg("Failed to Add Vehicle");
            });
    }

    return (


        <div className="addVehicle">
            <CarOwnerNav />
            <form className="">
                <Form.Item label="Car Company" labelCol={{ span: 24 }} style={{}}>
                    <Select name="car_com" placeholder="--Select Car Company --" className="" onChange={(e) => { dispatchv({ type: 'update', fld: 'car_com', value: e }) }}>
                        {
                            carcom.map((v) => {
                                return (
                                    <Select.Option key={v.id} value={v.id}>{v.company_name}</Select.Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Car Model" labelCol={{ span: 24 }} style={{}}>
                    <Select name="car_mod" placeholder="--Select Car Model --" className="" onChange={(e) => { dispatchv({ type: 'update', fld: 'car_mod', value: e }) }}>
                        {/* {
                                    carcom[vehicle.car_com].carmodels.map((v)=>
                                    {
                                        console.log(v);
                                        return(
                                            <Select.Option key={v.id} value={v.id}>{v.model_name}</Select.Option>
                                            )
                                        })
                                } */}
                        <Select.Option value="1">Fortuner</Select.Option>
                        <Select.Option value="2">Innova</Select.Option>
                        <Select.Option value="3">Scorpio</Select.Option>
                        <Select.Option value="4">Wagon-R</Select.Option>
                        <Select.Option value="5">Safari</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Registration Certificate (RC)" labelCol={{ span: 24 }}>
                    <Input type="text" name="rc" onChange={(e) => { dispatchv({ type: 'update', fld: 'rc', value: e.target.value }) }} required></Input>
                </Form.Item>
                <Form.Item label="Year of Registration" labelCol={{ span: 24 }}>
                    <Select name="year" placeholder="--Select Year --" onChange={(e) => { dispatchv({ type: 'update', fld: 'year', value: e }) }}>

                        {
                            year_arr.map((v) => {
                                return (

                                    <Select.Option key={v} value={v}>{(v)}</Select.Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Color Of Vehicle" labelCol={{ span: 24 }} style={{}}>
                    <Select name="color" placeholder="--Select Color --" onChange={(e) => { dispatchv({ type: 'update', fld: 'color', value: e }) }} className="">
                        <Select.Option value="red">Red</Select.Option>
                        <Select.Option value="black">Black</Select.Option>
                        <Select.Option value="green">Green</Select.Option>
                        <Select.Option value="blue">Blue</Select.Option>
                        <Select.Option value="gray">Gray</Select.Option>
                    </Select>
                </Form.Item>
                <p>{JSON.stringify(vehicle)}</p>
                <button type="button" onClick={(e) => { addVehicle(e) }}>ADD VEHICLE</button>
                <div className="message" style={{display:msg!==null?"block":"none"}}>
                    <b style={{color:'green'}}>{msg}</b>
                </div>
            </form>
        </div>

    )
}