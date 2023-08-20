import { Button, Form, Input } from "antd";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner_Logo from "../Assests/Banner_Logo.svg";
import "./modules.css";

const initialState = {
  email: "",
  pwd: "",
};

// const reducer=(state,action)=>{
//     switch(action.type)
//     {
//         case 'update' :
//             return{...state,[action.fld]:action.value}
//         case 'clear' :
//             return initialState;
//     }
// }

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.fld]: action.value };
    case "clear":
      return initialState;
  }
};

let Login = () => {
  const [user, dispatch] = useReducer(reducer, initialState);
  const [msg, setMsg] = useState("");
  let navigate = useNavigate();
  
  let submitForm = (e) => {
    e.preventDefault();
    let reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ login_id: user.email, password: user.pwd }),
    };
    fetch("http://localhost:8080/checkLogin", reqOptions)
      .then((res) => res.text())
      .then((data) => {
        if (data.length > 2) navigate("/Main");
        else setMsg("WRONG EMAIL OR PASSWORD");
      })
      .catch((e) => {
        alert("Error Signing In");
        navigate("/Main");
      });
  };

  return (
    <div className="Login">
      <div className="banner_login">
        <img src={Banner_Logo} />
      </div>
      <div className="banner_form">
        <h1>Sign In</h1>
        <form className="mb-3 frm">
          <Form.Item label="Email" labelCol={{ span: 24 }}>
            <Input
              className="form-control"
              type="email"
              name="email"
              onChange={(e) => {
                dispatch({
                  type: "update",
                  fld: "email",
                  value: e.target.value,
                });
              }}
            ></Input>
          </Form.Item>
          <Form.Item label="Passsword" labelCol={{ span: 24 }}>
            <Input
              className="form-control"
              type="password"
              name="pwd"
              onChange={(e) => {
                dispatch({ type: "update", fld: "pwd", value: e.target.value });
              }}
            ></Input>
          </Form.Item>
          <Button
            type="submit"
            onClick={(e) => {
              submitForm(e);
            }}
            className="button_primary"
          >
            SUBMIT
          </Button>
        </form>
        <div
          className="bg-danger"
          style={{ display: msg.length > 0 ? "block" : "none" }}
        >
          {msg}
          <Button
            type="button"
            onClick={(e) => {
              navigate("/Reg");
            }}
            className="button_primary"
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
