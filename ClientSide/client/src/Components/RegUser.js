import { Form, Select, Radio } from "antd";
import Input from "antd/es/input/Input";
import { useReducer } from "react";
import Banner_Img from '../Assests/Banner_Logo.svg';
import "./modules.css";
const initialState = {
    fname: "",
    lname: "",
    dob: null,
    gender: "",
    phone: 0,
    email: "",
    semail: "",
    password: "",
    aadhar_no: null,
    licence: null,
    role: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value };
    }
}


let RegUser = () => {

    const [user, dispatch] = useReducer(reducer, initialState);

    let register = (e) => {

        e.preventDefault();

        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ fname: user.fname, lname: user.lname, dob: user.dob, gender: user.gender, phone: user.phone, email: user.email, semail: user.semail, password: user.password, aadhar_no: user.aadhar_no, licence: user.licence, role: user.role })
        };

        fetch("http://localhost:8080/insertEmp", reqOptions)
            .then(res => res.text())
        //.then(data=>setMsg(data))

    }

    return (<div className="RegUser">

        <div className="RegForm">

            <h1>SIGN UP</h1>
            <form className="">
                <Form.Item label="Role" labelCol={{ span: 24 }} style={{}}>
                    <Select name="role" defaultValue="0" className="" onChange={(e) => { dispatch({ type: 'update', fld: 'role', value: e }) }}>
                        <option value='0'>--Select Type --</option>
                        <option value="2">Car Owner</option>
                        <option value="3">User</option>
                    </Select>
                </Form.Item>

                <Form.Item label="First Name" labelCol={{ span: 24 }}>
                    <Input name="fname" type="text" className="" onChange={(e) => { dispatch({ type: 'update', fld: 'fname', value: e.target.value }) }}></Input>
                </Form.Item>

                <Form.Item label="Last Name" labelCol={{ span: 24 }}>
                    <Input name="lname" type="text" className="" onChange={(e) => { dispatch({ type: 'update', fld: 'lname', value: e.target.value }) }}></Input>
                </Form.Item>

                <Form.Item label="Last Name" labelCol={{ span: 24 }}>
                    <Input type="number" name="phone" className="" onChange={(e) => { dispatch({ type: 'update', fld: 'phone', value: e.target.value }) }}></Input>
                </Form.Item>

                <Form.Item label="Last Name" labelCol={{ span: 24 }}>
                    <Input type="date" name="dob" className="" onChange={(e) => { dispatch({ type: 'update', fld: 'dob', value: e.target.value }) }}></Input>
                </Form.Item>

                {/* <Form.Item label="Gender : " name="gender" labelCol={{span:24}}>
                <Radio.Group value={user.gender} onChange={(e) => { console.log(user.gender); dispatch({ type: 'update', fld: 'gender', value: e.target.value }) }}>
                    <Radio value="M">Male</Radio>
                    <Radio value="F">Female</Radio>
                </Radio.Group>
                </Form.Item> */}
                <label for="gender">Gender : </label>
                <input type="radio" id="gender" style={{width:'fit-content',marginInline:'15px'}} className="" name="gender" value="M" onChange={(e) => { dispatch({ type: 'update', fld: 'gender', value: e.target.value }) }}></input><span>Male</span>
                <input type="radio" id="gender" style={{width:'fit-content',marginInline:'15px'}} name="gender" className="" value="F" onChange={(e) => { dispatch({ type: 'update', fld: 'gender', value: e.target.value }) }}></input><span>Female</span> <br />

                <Form.Item label="Aadhar Number :" labelCol={{ span: 24 }}>
                    <Input type="number" name="aadhar_no" className="" required onChange={(e) => { dispatch({ type: 'update', fld: 'aadhar_no', value: e.target.value }) }}></Input>
                </Form.Item>

                <Form.Item label="Licence Number" labelCol={{ span: 24 }} style={{ display: user.role === "2" ? 'block' : 'none' }}>
                    <Input type="number" placeholder="Licence Number" name="licence" className="" required></Input>
                </Form.Item>

                <Form.Item label="Primary E-Mail" labelCol={{ span: 24 }}>
                    <Input type="email" name="email" className="" onChange={(e) => { dispatch({ type: 'update', fld: 'email', value: e.target.value }) }}></Input>
                </Form.Item>

                <Form.Item label="Secondary E-Mail" labelCol={{ span: 24 }}>
                    <Input type="email" name="semail" className="" onChange={(e) => { dispatch({ type: 'update', fld: 'semail', value: e.target.value }) }}></Input>
                </Form.Item>
                <Form.Item label="Password" labelCol={{ span: 24 }}>
                    <Input type="password" name="pwd" className="" onChange={(e) => { dispatch({ type: 'update', fld: 'pwd', value: e.target.value }) }}></Input>
                </Form.Item>

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="btn btn-primary" onClick={(e) => { register(e) }}>REGISTER</button>
                </div>

                <p className="">{JSON.stringify(user)}</p>
            </form>
        </div>
        <div className="Reg_Img">
            <img src={Banner_Img}></img>
        </div>
    </div>)
}

export default RegUser;
{/* Enter State : <select className="form-select"onChange={(e)=>{dispatch({type:'update', fld:'State', value:e.target.value})}} >
{
    states.map((state)=>{
        return <option>{state}</option>
    })
}
</select>

                Enter City : <select className="form-select"onChange={(e)=>{dispatch({type:'update', fld:'City', value:e.target.value})}} >
                {
                    cities[user.State].map((city)=>{
                        return <option>{city}</option>
                    })
                }
            </select> */}
{/* <select name="state" className="form-control" onChange={(e)=>{dispatch({type:'update', fld:'state', value:e.target.value})}}>
    <option name="state" value="Maharastra">Maharastra</option>
    <option name="state" value="Uttar Pradesh">Uttar Pradesh</option>
</select>
<select name="city" className="form-control" datalist="cities" onChange={(e)=>{dispatch({type:'update',fld:'city',value:e.target.value})}}>
    <option></option>
</select> */}