import { useReducer, useState } from "react";


const states=["Maharastra","Uttar Pradesh","Delhi"];
const cities={
                "Maharastra" :["Mumbai","Pune"],
                "Uttar Pradesh" :["Lucknow","Banaras"],
                "Delhi":["Delhi","Delhi NCR"]
             
             };


const initialState = {
    name: "",
    email: "",
    pwd: "",
    phone: 0,
    State: "Maharastra",
    City: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value };
    }
}


let RegUser = () => {

    const [user, dispatch] = useReducer(reducer, initialState);
    return (<div>
        <h1>SIGN UP</h1>
        <form className="mb-3">
            Enter Name :
            <input name="name" type="text" className="form-control" onChange={(e) => { dispatch({ type: 'update', fld: 'name', value: e.target.value }) }}></input>
            Enter Email :
            <input type="email" name="email" className="form-control" onChange={(e)=>{dispatch({type:'update',fld:'email', value:e.target.value})}}></input>
            Enter Password :
            <input type="password" name="pwd" className="form-control" onChange={(e)=>{dispatch({type:'update',fld:'pwd',value:e.target.value})}}></input>
            Enter Phone Number :
            <input type="number" name="phone" className="form-control" onChange={(e)=>{dispatch({type:'update', fld:'phone', value:e.target.value})}}></input>
            Enter State : <select className="form-select"onChange={(e)=>{dispatch({type:'update', fld:'State', value:e.target.value})}} >
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
            </select>
            <button className="bg-primary">REGISTER</button>


            {/* <select name="state" className="form-control" onChange={(e)=>{dispatch({type:'update', fld:'state', value:e.target.value})}}>
                <option name="state" value="Maharastra">Maharastra</option>
                <option name="state" value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
            <select name="city" className="form-control" datalist="cities" onChange={(e)=>{dispatch({type:'update',fld:'city',value:e.target.value})}}>
                <option></option>
            </select> */}
            <p className="form-control">{JSON.stringify(user)}</p>
        </form>
    </div>)
}

export default RegUser;