import { Button, Form, Select } from "antd";
import { useState } from "react";

export default function CarBooking()
{
    const[msg,setMsg]=useState()
    return(
        <div>
            <div className="bForm">
                <Form className="">
                    <Form.Item label="Number of Seats :" labelCol={{span:24}} >
                        <Select name="seats">
                            <Select.Option value="1">1</Select.Option>
                            <Select.Option value="2">2</Select.Option>
                            <Select.Option value="3">3</Select.Option>
                            <Select.Option value="4">4</Select.Option>
                        </Select>
                        <Button type="button">PAY</Button>

                    </Form.Item>
                </Form>
                <div className="message" style={{display:msg!==null?"none":"block"}}>
                    <p>{msg}</p>    
                </div>
            </div>
        </div>
    )
}