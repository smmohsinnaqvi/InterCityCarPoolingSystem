import { Button, Form, Input } from "antd";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner_Logo from "../Assests/Banner_Logo.svg";
import "./modules.css";
import { useDispatch } from "react-redux";
import  {login} from './slice'
const initialState = {
  email: "",
  pwd: "",
};


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

  const reducerAction=useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ login_id: user.email, password: user.pwd }),
    }
    fetch("http://localhost:8080/checkLogin", reqOptions)
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.text();
        }
        else {
          console.log(res.status);
          throw new Error("Server Error");
        }
      })
      .then((text) => text.length ? JSON.parse(text) : {})
      .then(obj => {
        if (Object.keys(obj).length === 0) {
          setMsg("WRONG EMAIL OR PASSWORD");
        }
        else {
          reducerAction(login());
          localStorage.setItem("loggedUser",JSON.stringify(obj));
          if (obj.status === false) {
            alert("Not Approved By Administrator");
            navigate("/");
          }
          else {
            if (obj.roll_id.id === 1) {
              navigate("/admin")
            }
            else if (obj.roll_id.id === 2) {
              navigate("/CMain");
            }
            else if (obj.roll_id.id === 3) {
              navigate("/Main");
            }
          }
        }
      })
      .catch((e) => {
        alert("Error Signing In");
        // navigate("/Main");
      });
  }

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
