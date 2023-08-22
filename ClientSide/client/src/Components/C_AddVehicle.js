// import dayjs from 'dayjs';
// import { Form, Input, Select, Space, TimePicker } from "antd";

// export default function C_AddVehicle()
// {
//     return(<div className="rideForm">
//     <form className="">
//     <Form.Item label="Car Company" labelCol={{ span: 24 }} style={{}}>
//             <Select name="car_com" defaultValue="0" className="">
//                 <option value='0'>--Select Car Company --</option>
//                 <option value="1">Honda</option>
//                 <option value="2">Maruti</option>
//                 <option value="3">Toyota</option>
//                 <option value="4">Mahindra</option>
//                 <option value="5">Tata</option>
//             </Select>
//         </Form.Item>
//         <Form.Item label="Car Model" labelCol={{ span: 24 }} style={{}}>
//             <Select name="car_mod" defaultValue="0" className="">
//                 <option value='0'>--Select Car Model --</option>
//                 <option value="1">Fortuner</option>
//                 <option value="2">Innova</option>
//                 <option value="3">Scorpio</option>
//                 <option value="4">Wagon-R</option>
//                 <option value="5">Safari</option>
//             </Select>
//         </Form.Item>
//         <Form.Item label="Registration Certificate (RC)" labelCol={{ span: 24 }}>
//             <Input type="number" name="rc" required></Input>
//         </Form.Item>
//         <Form.Item label="Color Of Vehicle" labelCol={{ span: 24 }} style={{}}>
//             <Select name="seats" defaultValue="0" className="">
//                 <option value='0'>--Select Color --</option>
//                 <option value="1">Red</option>
//                 <option value="2">Black</option>
//                 <option value="3">Green</option>
//                 <option value="4">Blue</option>
//                 <option value="5">Gray</option>
//             </Select>
//         </Form.Item>
//         <Form.Item label="Start City" labelCol={{ span: 24 }} style={{}}>
//             <Select name="Start City" className="">
//                 <option value='0'>--Select Type --</option>
//                 <option value="1">Mumbai</option>
//                 <option value="2">Pune</option>
//             </Select>
//         </Form.Item>
//         <Form.Item label="End City" labelCol={{ span: 24 }} style={{}}>
//             <Select name="End City" className="">
//                 <option value='0'>--Select Type --</option>
//                 <option value="1">Mumbai</option>
//                 <option value="2">Pune</option>
//             </Select>
//         </Form.Item>
//         <Form.Item style={{ width: '50%' }} label="Date Of Journey" labelCol={{ span: 24 }}>
//             <Input type="date" name="doj"></Input>
//         </Form.Item>
//         <Form.Item label="Time of Departure" labelCol={{ span: 24 }} style={{}}>
//             <Space wrap>
//                 <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
//             </Space>
//         </Form.Item>
//         <Form.Item label="Time of Reaching" labelCol={{ span: 24 }} style={{}}>
//             <Space wrap>
//                 <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
//             </Space>
//         </Form.Item>

//         <Form.Item label="Number Of Seats" labelCol={{ span: 24 }} style={{}}>
//             <Select name="seats" defaultValue="0" className="">
//                 <option value='0'>--Select Seats --</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//             </Select>
//         </Form.Item>
//     </form>
// </div>)
// }