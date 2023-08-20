import { useReducer} from "react";

const initialState = {
    fname:"",
    lname:"",
    dob: null,
    gender:"",
    phone:0,
    email:"",
    semail:"",
    password:"",
    aadhar_no:null,
    licence:null,
    role:0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value };
    }
}


let RegUser = () => {

    const [user, dispatch] = useReducer(reducer, initialState);

    let register=(e)=>{

        e.preventDefault();

        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({fname:user.fname,lname:user.lname,dob:user.dob,gender:user.gender,phone:user.phone,email:user.email,semail:user.semail,password:user.password,aadhar_no:user.aadhar_no,licence:user.licence,role:user.role})
        };

        fetch("http://localhost:8080/insertEmp",reqOptions)
        .then(res=>res.text())
        //.then(data=>setMsg(data))

    }

    return (<div className="RegUser">
        <h1>SIGN UP</h1>
        <form className="mb-3">
            
            <select name="role" className="form-select" onChange={(e) =>{dispatch({ type: 'update', fld:'role', value: e.target.value }) }}>
                <option value='0' selected>--Select Type --</option>
                <option value="2">Car Owner</option>
                <option value="3">User</option>
            </select>
            First Name :
            <input name="fname" type="text" className="form-control" onChange={(e) => { dispatch({ type: 'update', fld: 'fname', value: e.target.value }) }}></input>
            Last Name :
            <input name="lname" type="text" className="form-control" onChange={(e) => { dispatch({ type: 'update', fld: 'lname', value: e.target.value }) }}></input>
            Enter Phone Number :
            <input type="number" name="phone" className="form-control" onChange={(e)=>{dispatch({type:'update', fld:'phone', value:e.target.value})}}></input>
            Enter Date Of Birth :
            <input type="date" name="dob" className="form-control" onChange={(e)=>{dispatch({type:'update', fld:'dob',value:e.target.value})}}></input>
            Gender :<input type="radio" className="form-check-input" checked={false} name="gender" value="M" onChange={(e)=>{dispatch({type:'update', fld:'gender',value:e.target.value})}}></input> Male
            <input type="radio" name="gender" className="form-check-input" checked={false} value="F" onChange={(e)=>{dispatch({type:'update', fld:'gender',value:e.target.value})}}></input> Female <br />
            Enter Aadhar Number :
            <input type="number" name="aadhar_no" className="form-control" required onChange={(e)=>{dispatch({type:'update',fld:'aadhar_no', value:e.target.value})}}></input>

            <input type="number" placeholder="Licence Number" name="licence" className="form-control" style={{display:user.role==="2"?'block':'none'}} required></input>

            Enter Email :
            <input type="email" name="email" className="form-control" onChange={(e)=>{dispatch({type:'update',fld:'email', value:e.target.value})}}></input>
            Enter Secondary Email :
            <input type="email" name="semail" className="form-control" onChange={(e)=>{dispatch({type:'update',fld:'semail', value:e.target.value})}}></input>
            Enter Password :
            <input type="password" name="pwd" className="form-control" onChange={(e)=>{dispatch({type:'update',fld:'pwd',value:e.target.value})}}></input>
            <button className="bg-primary" onClick={(e)=>{register(e)}}>REGISTER</button>


            <p className="form-control sm-3">{JSON.stringify(user)}</p>
        </form>
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