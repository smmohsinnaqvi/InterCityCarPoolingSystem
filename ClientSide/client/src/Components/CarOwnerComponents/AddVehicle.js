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
    const [carmod, setCarMod] = useState([]);
    const [msg, setMsg] = useState(null);
    const [formData] = Form.useForm();
    useEffect(() => {

        fetch("http://localhost:8080/getAllCarCompany")
            .then((res) => res.json())
            .then((carcom) => setCarcom(carcom));

    }, []);

    useEffect(() => {
        if (vehicle.car_com !== 0) {
            console.log(vehicle.car_com)
            fetch(`http://localhost:8080/getcarmodelsfromcompanyid?comapnyid=${vehicle.car_com}`)
                .then(res => res.json())
                .then((carmod) => {
                    setCarMod(carmod);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }, [vehicle]);

    
    // const changeCarMod = () => {
    //     fetch(`http://localhost:8080/getcarmodelsfromcompanyid?comapnyid=${vehicle.car_com}`)
    //         .then(res => res.json())
    //         .then((carmod) => {
    //             setCarMod(carmod);
    //         });
    //     }

    const addVehicle = (e) => {
        e.preventDefault();
        const carOwner = JSON.parse(localStorage.getItem("loggedCarOwner"));
        console.log(carOwner.id);
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ userid: carOwner.id, carmodelid: vehicle.car_mod, year: vehicle.year, color: vehicle.color, rc_book: vehicle.rc }),
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

        <>
            <CarOwnerNav />
        <div className="addVehicle">
            <Form form={formData} className="rideForms">
                <Form.Item label="Car Company" labelCol={{ span: 24 }} style={{fontWeight:'bold'}}>
                    <Select name="car_com" placeholder="--Select Car Company --" className="" onChange={(e) => { dispatchv({ type: 'update', fld: 'car_com', value: e }); formData.resetFields(["carCompany"]) }}>
                        {
                            carcom.map((v) => {
                                return (
                                    <Select.Option key={v.id} value={v.id}>{v.company_name}</Select.Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                {/* name="carCompany" -> formData.resetFields(["carCompany"] value */}
                <Form.Item  name="carCompany" label="Car Model" labelCol={{ span: 24 }} style={{fontWeight:'bold'}}>
                    <Select name="car_mod" placeholder="--Select Car Model --" className="" onChange={(e) => { dispatchv({ type: 'update', fld: 'car_mod', value: e }) }}>
                        {
                            carmod.map((v) => {
                                console.log(v);
                                return (
                                    <Select.Option key={v.id} value={v.id}>{v.model_name}</Select.Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Registration Certificate (RC)" labelCol={{ span: 24 }} style={{fontWeight:'bold'}}>
                    <Input type="text" name="rc" onChange={(e) => { dispatchv({ type: 'update', fld: 'rc', value: e.target.value }) }} required></Input>
                </Form.Item>
                <Form.Item label="Year of Registration" labelCol={{ span: 24 }} style={{fontWeight:'bold'}}>
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
                <Form.Item label="Color Of Vehicle" labelCol={{ span: 24 }} style={{fontWeight:'bold'}}>
                    <Select name="color" placeholder="--Select Color --" onChange={(e) => { dispatchv({ type: 'update', fld: 'color', value: e }) }} className="">
                        <Select.Option value="red">Red</Select.Option>
                        <Select.Option value="black">Black</Select.Option>
                        <Select.Option value="green">Green</Select.Option>
                        <Select.Option value="blue">Blue</Select.Option>
                        <Select.Option value="gray">Gray</Select.Option>
                    </Select>
                </Form.Item>
                {/* <p>{JSON.stringify(vehicle)}</p> */}
                <button type="button" className="btn btn-light btn-lg btn-block" onClick={(e) => { addVehicle(e) }}>ADD VEHICLE</button>
                <div className="message" style={{ display: msg !== null ? "block" : "none" }}>
                    <b style={{ color: 'green' }}>{msg}</b>
                </div>
            </Form>
        </div>
        </>

    )
}