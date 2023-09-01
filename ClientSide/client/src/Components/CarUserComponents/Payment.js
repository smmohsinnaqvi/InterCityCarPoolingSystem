import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarUserNav from "./CarUserNav";
const initialState = {
    fname: "",
    lname: "",
    gender: "",
    email: "",
    phone: "",
    aadhar_no: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value }
    }
}

export default function Payment() {

    const [coPassenger, dispatch] = useReducer(reducer, initialState);
    const [pm, setPm] = useState("UPI")
    const [msg, setMsg] = useState(null)

    const user = JSON.parse(localStorage.getItem("loggedCarUser"));
    const book = JSON.parse(localStorage.getItem("book"));

    const navigate = useNavigate();
    const pay = () => {
        let date = new Date().toJSON();
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                user_id: user.id,
                booking_id: book.id,
                amount: book.total_price,
                date_time: date,
                payment_method: pm,
                status: "success"
            }),
        };
        fetch("http://localhost:8080/savePayment", reqOptions)
            .then((res) => res.text())
            .then((data) => {
                if (data.length > 2) {
                    setMsg("Payment Successfull");

                    fetch("http://localhost:8080/changeStatusAfterPayment?bid="+ book.id)
                    .then(res=>res.text())
                    .then((res)=>{
                        if(res===1)
                        console.log(true);
                        else
                        console.log(false);
                    })
                    .catch((e) => {
                        setMsg("Failed to Pay")
                    })

                } else setMsg("Payment Failed");
            })
            .catch((e) => {
                setMsg("Failed to Pay")
            })
        
    }
    const getDummyArray = (length) => {
        const tempArray = [];
        for (let i = 0; i < length-1; i++) {
      tempArray.push(i);
    }
    console.log(length);
    console.log(tempArray);
    return tempArray;
    }
    return (
        <>
        <CarUserNav/>
            <h1 style={{ marginTop: '40px', backgroundColor: '#4682a9', height: '50px', color: "whitesmoke" }}>Payment</h1>
        <div className="payment">


            <div className="co-passenger rideForms" style={{ display: book.no_of_seats > 1 ? "block" : "none" }}>
                
                {
                    
                 (getDummyArray(book.no_of_seats)).map((x, index) => {
                    
                    return        <>
                            <h3>Co-Passenger {index+1}</h3>
                            <Form className="">
                                <Form.Item label="First Name" labelCol={{ span: 24 }}>
                                    <Input name="fname" type="text" onChange={(e) => { dispatch({ type: 'update', fld: 'fname', value: e.target.value }) }}></Input>
                                </Form.Item>
                                <Form.Item label="Last Name" labelCol={{ span: 24 }}>
                                    <Input name="lname" type="text" onChange={(e) => { dispatch({ type: 'update', fld: 'lname', value: e.target.value }) }}></Input>
                                </Form.Item>
                                <Form.Item label="Gender">
                                    <Input type="radio" id="gender" style={{ width: "fit-content", marginInline: "15px" }} className=""
                                        name="gender"
                                        value="M"
                                        onChange={(e) => { dispatch({ type: 'update', fld: 'gender', value: e.target.value }) }}></Input><span> Male</span>
                                    <Input type="radio" id="gender" name="gender"
                                        style={{ width: "fit-content", marginInline: "15px" }}
                                        className=""
                                        value="F"
                                        onChange={(e) => { dispatch({ type: 'update', fld: 'gender', value: e.target.value }) }}></Input> <span>Female</span>
                                </Form.Item>
                                <Form.Item label="E-mail" labelCol={{span:24}}>
                                    <Input type="email" name="email" onChange={(e) => { dispatch({ type: 'update', fld: 'email', value: e.target.value }) }} ></Input>
                                </Form.Item>

                                <Form.Item label="Phone " labelCol={{span:24}}>
                                    <Input type="phone" name="phone" onChange={(e) => { dispatch({ type: 'update', fld: 'phone', value: e.target.value }) }} ></Input>
                                </Form.Item>

                                <Form.Item label="Aadhar Number " labelCol={{span:24}}>
                                    <Input type="text" name="aadhar_no" onChange={(e) => { dispatch({ type: 'update', fld: 'aadhar_no', value: e.target.value }) }} ></Input>
                                </Form.Item>
                                <Button type="button" className="btn btn-primary" style={{display:book.no_of_seats>1?"block":"none"}} onClick={{}}>Add Co-Passenger Info</Button>

                            </Form>

                        </>
                    })
                    
                    
                }
            </div>
            <Form className="pay rideForms" >
                <Form.Item label="Mode Of Payment" labelCol={{ span: 24 }} style={{fontWeight:'bold'}}>
                    <Select name="payment_method" placeholder="--choose method --" onChange={(e) => { setPm(e) }} >
                        <Select.Option value="Credit Card">Credit Card</Select.Option>
                        <Select.Option value="Debit Card">Debit Card</Select.Option>
                        <Select.Option value="UPI">UPI</Select.Option>
                        <Select.Option value="Cashback">Cashback Points</Select.Option>

                    </Select>
                </Form.Item>
                <Button type="button" onClick={() => { pay() }} className="btn btn-primary">PAY</Button>
                <div className="message" style={{ display: msg !== null ? "block" : "none" }}>
                    <p style={{ color: msg === "Payment Failed" ? "red" : "green" }}>{msg}</p>
                    <Button type="button" onClick={() => { navigate("/Main") }} className="btn btn-warning" >Home</Button>
                </div>
            </Form>


        </div>
        </>
    )
}