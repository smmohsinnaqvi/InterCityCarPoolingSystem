import { Form, Select } from "antd";
import Input from "antd/es/input/Input";
import { useReducer, useState } from "react";
import Banner_Img from "../Assests/6.svg";
import "./modules.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd/es/radio";

const initialState = {
  role: { value: 0, touched: false, valid: false, error: "" },
  fname: { value: "", touched: false, valid: false, error: "" },
  lname: { value: "", touched: false, valid: false, error: "" },
  phone: { value: 0, touched: false, valid: false, error: "" },
  dob: { value: null, touched: false, valid: false, error: "" },
  gender: { value: "", touched: false, valid: false, error: "" },
  email: { value: "", touched: false, valid: false, error: "" },
  semail: { value: "", touched: false, valid: false, error: "" },
  pwd: { value: "", touched: false, valid: false, error: "" },
  aadhar: { value: null, touched: false, valid: false, error: "" },
  licence: { value: null, touched: false, valid: true, error: "" },
  formvalid: false,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      const { name, value, touched, valid, error, formvalid } = action.data;
      //console.log(formvalid)
      return { ...state, [name]: { value, touched, valid, error }, formvalid };

    case "reset":
      return initialState;
  }
};

let RegUser = () => {
  const [user, dispatch] = useReducer(reducer, initialState);

  const [division, setDivision] = useState(0);

  const [msg, setMsg] = useState(null);

  let navigate = useNavigate();

  const validateData = (name, value) => {
    let valid = false;
    let error = "";
    switch (name) {
      case "fname":
        var pattern = /^[A-Z][a-z]{2,15}$/;
        if (pattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error =
            "Name should start with capital alphabet rest small alphabets";
        }
        break;
      case "lname":
        var pattern = /^[A-Z][a-z]{2,15}$/;
        if (pattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error =
            "Name should start with capital alphabet rest small alphabets";
        }
        break;
      case "email":
        var pattern = /^[A-Za-z0-9_.-]{3,15}@gmail.com$/;
        if (pattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Email invalid";
        }
        break;
      case "semail":
        var pattern = /^[A-Za-z0-9_.-]{3,15}@gmail.com$/;
        if (pattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Email invalid";
        }
        break;
      case "pwd":
        var pattern =
          /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{8,}$/;
        if (pattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error =
            "Password should contain atleast 1 numeric,special,uppercase and lowercase letter and length atleast of 8 letters";
        }
        break;
      case "phone":
        var pattern = /^[0-9]{10}$/;
        if (pattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Phone Number should be of 10 digits";
        }
        break;
      case "aadhar":
        var pattern = /^[0-9]{12}$/;
        if (pattern.test(value)) {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Aadhar Number Invalid";
        }
        break;
      case "licence":
        if (user.role === "3") {
          valid = true;
          error = "";
        } else {
          var pattern =
            /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;
          if (pattern.test(value)) {
            valid = true;
            error = "";
          } else {
            valid = false;
            error = "Invalid Licence Number";
          }
        }
        break;
      case "gender":
        if (value === "M" || value === "F") {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Please Select Gender";
        }
        break;
      case "role":
        console.log(value);
        if (value === "2" || value === "3") {
          console.log("YES");
          valid = true;
          error = "";
        } else {
          console.log("NO");
          valid = false;
          error = "Please Select Role";
        }
        break;
      case "dob":
        if (value !== "") {
          valid = true;
          error = "";
        } else {
          valid = false;
          error = "Please Select Date Of Birth";
        }
        break;
    }
    return { valid, error };
  };

  const handleChange = (name, value) => {
    const { valid, error } = validateData(name, value);
    let formvalid = true;
    /*if(state.firstName.valid === true && state.lastName.valid === true && state.email.valid === true && state.password.valid === true && state.confirmpassword.valid === true)
            formvalid = true;*/
    for (const key in user) {
      console.log(key + " : " + user[key].valid);
      if (user[key].valid === false) {
        formvalid = false;
        break;
      }
    }
    console.log(formvalid);
    dispatch({
      type: "update",
      data: { name, value, touched: true, valid, error, formvalid },
    });
  };

  const onFocusout = (name, value) => {
    const { valid, error } = validateData(name, value);
    let formvalid = true;
    /*if(state.firstName.valid === true && state.lastName.valid === true && state.email.valid === true && state.password.valid === true && state.confirmpassword.valid === true)
            formvalid = true;*/
    for (const key in user) {
      console.log(key + " : " + user[key].valid);
      if (user[key].valid === false) {
        formvalid = false;
        break;
      }
    }
    dispatch({
      type: "update",
      data: { name, value, touched: true, valid, error, formvalid },
    });
  };

  let register = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        fname: user.fname.value,
        lname: user.lname.value,
        dob: user.dob.value,
        gender: user.gender.value,
        phone_no: user.phone.value,
        primary_email: user.email.value,
        secondary_email: user.semail.value,
        password: user.pwd.value,
        aadhar: user.aadhar.value,
        licence: user.licence.value,
        select: user.role.value,
      }),
    };

    fetch("http://localhost:8080/regUser", reqOptions)
      .then((res) => res.text())
      .then((data) => {
        if (data.length > 2) {
          setMsg("Register Successfully");
        } else setMsg("Registration Failed");
      });
  };

  return (
    <div className="RegUser">
      <div className="RegForm">
        <h1>SIGN UP</h1>
        <form className="">
          {division === 0 && (
            <div>
              <Form.Item label="Role" labelCol={{ span: 24 }} style={{}}>
                <Select
                  name="role"
                  defaultValue="0"
                  className=""
                  required
                  onChange={(e) => handleChange("role", e)}
                //onBlur={(e) => onFocusout("role", e)}
                >
                  <Select.Option value="0">--Select Type --</Select.Option>
                  <Select.Option value="2">Car Owner</Select.Option>
                  <Select.Option value="3">User</Select.Option>
                </Select>
                <div
                  style={{
                    display: user.role.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.role.error}
                </div>
              </Form.Item>
              <Form.Item label="First Name" labelCol={{ span: 24 }}>
                <Input
                  name="fname"
                  type="text"
                  className=""
                  onChange={(e) => handleChange("fname", e.target.value)}
                  onBlur={(e) => onFocusout("fname", e.target.value)}
                ></Input>
                <div
                  style={{
                    display: user.fname.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.fname.error}
                </div>
              </Form.Item>
              <Form.Item label="Last Name" labelCol={{ span: 24 }}>
                <Input
                  name="lname"
                  type="text"
                  className=""
                  onChange={(e) => handleChange("lname", e.target.value)}
                  onBlur={(e) => onFocusout("lname", e.target.value)}
                ></Input>
                <div
                  style={{
                    display: user.lname.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.lname.error}
                </div>
              </Form.Item>
              <Form.Item label="Phone Number" labelCol={{ span: 24 }}>
                <Input
                  type="number"
                  name="phone"
                  className=""
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={(e) => onFocusout("phone", e.target.value)}
                ></Input>
                <div
                  style={{
                    display: user.phone.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.phone.error}
                </div>
              </Form.Item>
              <Form.Item
                style={{ width: "50%" }}
                label="Date Of Birth"
                labelCol={{ span: 24 }}
              >
                <Input
                  type="date"
                  name="dob"
                  className=""
                  onChange={(e) => handleChange("dob", e.target.value)}
                  onBlur={(e) => onFocusout("dob", e.target.value)}
                ></Input>
                <div
                  style={{
                    display: user.dob.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.dob.error}
                </div>
              </Form.Item>
              <label for="gender">Gender : </label>
              <input
                type="radio"
                id="gender"
                style={{ width: "fit-content", marginInline: "15px" }}
                className=""
                name="gender"
                value="M"
                onChange={(e) => handleChange("gender", e.target.value)}
                onBlur={(e) => onFocusout("gender", e.target.value)}
              ></input>
              <span>Male</span>
              <input
                type="radio"
                id="gender"
                style={{ width: "fit-content", marginInline: "15px" }}
                name="gender"
                className=""
                value="F"
                onChange={(e) => handleChange("gender", e.target.value)}
                onBlur={(e) => onFocusout("gender", e.target.value)}
              ></input>
              <span>Female</span> <br />
              <div
                style={{
                  display: user.gender.error.length > 0 ? "block" : "none",
                  color: "red",
                  marginTop: "5px",
                }}
              >
                {user.gender.error}
              </div>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  setDivision(1);
                }}
              >
                Next
              </button>
            </div>
          )}

          {division === 1 && (
            <div>
              <Form.Item label="Aadhar Number :" labelCol={{ span: 24 }}>
                <Input
                  type="text"
                  name="aadhar"
                  className=""
                  onChange={(e) => handleChange("aadhar", e.target.value)}
                  onBlur={(e) => onFocusout("aadhar", e.target.value)}
                ></Input>
                <div
                  style={{
                    display: user.aadhar.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.aadhar.error}
                </div>
              </Form.Item>

              <Form.Item
                label="Licence Number"
                labelCol={{ span: 24 }}
                style={{ display: user.role.value === "2" ? "block" : "none" }}
                required
              >
                <Input
                  type="text"
                  placeholder="Licence Number"
                  name="licence"
                  className=""
                  onChange={(e) => handleChange("licence", e.target.value)}
                  onBlur={(e) => onFocusout("licence", e.target.value)}
                ></Input>
                <div
                  style={{
                    display: user.licence.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.licence.error}
                </div>
              </Form.Item>

              <Form.Item label="Primary E-Mail" labelCol={{ span: 24 }}>
                <Input
                  type="email"
                  name="email"
                  className=""
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={(e) => onFocusout("email", e.target.value)}
                ></Input>
                <div
                  style={{
                    display: user.email.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.email.error}
                </div>
              </Form.Item>

              <Form.Item label="Secondary E-Mail" labelCol={{ span: 24 }}>
                <Input
                  type="email"
                  name="semail"
                  className=""
                  onChange={(e) => handleChange("semail", e.target.value)}
                  onBlur={(e) => onFocusout("semail", e.target.value)}
                ></Input>
                <div
                  style={{
                    display: user.semail.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.semail.error}
                </div>
              </Form.Item>
              <Form.Item label="Password" labelCol={{ span: 24 }}>
                <Input
                  type="password"
                  name="pwd"
                  className=""
                  onChange={(e) => handleChange("pwd", e.target.value)}
                  onBlur={(e) => onFocusout("pwd", e.target.value)}
                ></Input>
                <div
                  style={{
                    display: user.pwd.error.length > 0 ? "block" : "none",
                    color: "red",
                    marginTop: "5px",
                  }}
                >
                  {user.pwd.error}
                </div>
              </Form.Item>
              <button
                type="button"
                className="btn btn-warning"
                style={{ margin: "10px" }}
                onClick={() => {
                  setDivision(0);
                }}
              >
                Previous
              </button>

              <div class="d-grid gap-2 col-6 mx-auto">
                <Button
                  type="button"
                  //   className="btn btn-primary"
                  disabled={!user.formvalid}
                  onClick={(e) => {
                    register(e);
                  }}
                >
                  REGISTER
                </Button>
                <div
                  className="message"
                   style={{ display: msg !== null ? "block" : "none" }}
                >
                  <b style={{ color:msg==="Register Successfully"?'green':'red' }}>{msg}</b>
                  <Button type="button" onClick={()=>{navigate("/")}}>SIGN IN</Button>
                </div>
              </div>
            </div>
          )}
          {/* <p className="">{JSON.stringify(user)}</p> */}
        </form>
      </div>
      <div className="Reg_Img">
        <img src={Banner_Img} alt="Image"></img>
      </div>
    </div>
  );
};

export default RegUser;
