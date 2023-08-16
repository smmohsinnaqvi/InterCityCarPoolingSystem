import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState={
    email:"",
    pwd:""
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

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'update' :
            return {...state,[action.fld]:action.value}
        case 'clear':
            return initialState;
    }
}

let Login=()=>{


    const[user,dispatch]=useReducer(reducer,initialState);
    const[msg,setMsg]=useState("");
    let navigate=useNavigate();
    let submitForm=(e)=>
    {
        e.preventDefault();
        let reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({email:user.email, pwd:user.pwd})
        };
        fetch("http://localhost:8080/vlogin",reqOptions)
        .then(res=>res.text())
        .then(data=>{if(data.length>2) navigate("/Main") ; else setMsg("WRONG EMAIL OR PASSWORD") })
    }


    return(<div className="Login">
        <h1>Login To Continue</h1>
        <form className="mb-3 frm">
            Enter Email :
            <input className="form-control" type="email" name="email" onChange={(e)=>{dispatch({type:'update',fld:'email',value:e.target.value})}}></input>
            Enter Password :
            <input className="form-control" type='password' name="pwd" onChange={(e)=>{dispatch({type:'update',fld:'pwd',value:e.target.value})}}></input>
            <button type="submit" className="" onClick={(e)=>{submitForm(e)}}>SUBMIT</button>
        </form>
        <div className="bg-danger" style={{display:msg.length>0?'block':'none'}}>{msg}
            <button type="button" onClick={(e)=>{navigate("/Reg")}}>SIGN UP</button>
        </div>
    </div>)
}

export default Login;