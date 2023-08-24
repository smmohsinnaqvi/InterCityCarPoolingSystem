import { Form, Input, Select } from "antd";
import { useEffect, useReducer, useState } from "react";
import CarOwnerNav from "./CarOwnerNav";
//import mystate from './CarOwnerLandingPage';
//import carOwner from './CarOwnerLandingPage'
const initialStateVehicle = {

    car_com: 0,
    car_mod: 0,
    rc: null,
    color: null,
    year:null
}

const reducerV = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value }
    }
}

const year_arr=[2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];

export default function AddVehicle() {
    const [vehicle, dispatchv] = useReducer(reducerV, initialStateVehicle);
    const [carcom, setCarcom] = useState([]);
    useEffect(() => {

        fetch("http://localhost:8080/getAllCarCompany")
            .then((res) => res.json())
            .then((carcom) => setCarcom(carcom));
    }, []);

    const addVehicle=(e)=>{
        e.preventDefault();
        const carOwner=JSON.parse(localStorage.getItem("loggedCarOwner"));
        console.log(carOwner.id);
        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body : JSON.stringify({carowner_id:carOwner,model_id:vehicle.car_mod, year:vehicle.year,color:vehicle.year,rc_book:vehicle.rc})
        }
    }

    return (


        <div className="addVehicle">
            <CarOwnerNav/>
            <form className="">
                <Form.Item label="Car Company" labelCol={{ span: 24 }} style={{}}>
                    <Select name="car_com" defaultValue="0" className="" onChange={(e) => { dispatchv({ type: 'update', fld: 'car_com', value: e }) }}>
                        <Select.Option value='0'>--Select Car Company --</Select.Option>
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
                    <Select name="car_mod" defaultValue="0" className="" onChange={(e) => { dispatchv({ type: 'update', fld: 'car_mod', value: e }) }}>
                        <option value='0'>--Select Car Model --</option>
                        {/* {
                                    carcom[vehicle.car_com].carmodels.map((v)=>
                                    {
                                        console.log(v);
                                        return(
                                            <Select.Option key={v.id} value={v.id}>{v.model_name}</Select.Option>
                                            )
                                        })
                                } */}
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
                <Form.Item label="Year of Registration" labelCol={{span:24}}>
                    <Select name="year" defaultValue="0" onChange={(e)=>{dispatchv({type:'update', fld:'year',value:e})}}>
                        <Select.Option value="0">--Select Year --</Select.Option>
                        {
                            year_arr.map((v)=>{
                                return(

                                    <Select.Option key={v} value={v}>{(v)}</Select.Option>
                                    )
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Color Of Vehicle" labelCol={{ span: 24 }} style={{}}>
                    <Select name="color" defaultValue="0" onChange={(e) => { dispatchv({ type: 'update', fld: 'color', value: e }) }} className="">
                        <Select.Option value='0'>--Select Color --</Select.Option>
                        <Select.Option value="red">Red</Select.Option>
                        <Select.Option value="black">Black</Select.Option>
                        <Select.Option value="green">Green</Select.Option>
                        <Select.Option value="blue">Blue</Select.Option>
                        <Select.Option value="gray">Gray</Select.Option>
                    </Select>
                </Form.Item>
                <p>{JSON.stringify(vehicle)}</p>
                <button type="button" onClick={()=>{addVehicle()}}>ADD VEHICLE</button>
            </form>
        </div>

    )
}