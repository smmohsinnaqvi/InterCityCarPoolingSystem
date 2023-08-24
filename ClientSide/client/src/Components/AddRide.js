import { Form, Input, Select, Space, TimePicker } from "antd";
import { useEffect, useReducer, useState } from "react";
import dayjs from 'dayjs';

const initialStateRide = {

    s_city: null,
    e_city: null,
    doj: null,
    d_time: null,
    r_time: null,
    seats: null,
}

const reducerR = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value }
    }
}
export default function AddRide()
{
    const [ride, dispatchr] = useReducer(reducerR, initialStateRide);
    const [cities, setCities] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/getCities")
            .then((res) => res.json())
            .then((cities) => setCities(cities));
    })
    return (
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
    )
}