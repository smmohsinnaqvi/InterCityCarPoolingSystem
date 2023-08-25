import { useReducer, useState } from "react";

const initialState={
    empno :0,
    ename : "",
    job : "",
    deptno :0
};

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'update' :
            return{...state,[action.fld]:action.value}
        case 'clear' :
            return initialState;
    }
}

let RegForm=()=>
{
    const[emp,dispatch]=useReducer(reducer,initialState);
    const[msg,setMsg]=useState("...");

    let submitForm=(e)=>{

        e.preventDefault();

        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({empid:emp.empid, ename:emp.ename, job:emp.job, deptno:emp.deptno})
        };

        fetch("http://localhost:8080/insertEmp",reqOptions)
        .then(res=>res.text())
        .then(data=>setMsg(data))

    }

    return(<div>
        <form className="mb-3">

        Enter Employee ID :
        <input type="number" name="empid" className="form-control" value={emp.empid} onChange={(e)=>{dispatch({type:'update',fld:'empid', value:e.target.value})}}></input>
        Enter Employee Name :
        <input type="text" name="ename" className="form-control" value={emp.ename} onChange={(e)=>{dispatch({type:'update',fld:'ename',value:e.target.value})}}></input>
        Enter Employee Job :
        <input type="text" name="job"className="form-control" value={emp.job} onChange={(e)=>{dispatch({type:'update',fld:'job',value:e.target.value})}}></input>
        Enter Department :
        <input type='text' name="deptno" className="form-control" value={emp.value} onChange={(e)=>{dispatch({type:'update',fld:'deptno',value:e.target.value})}}></input>

        <button type="submit" onClick={(e)=>{submitForm(e)}} className="form-field">SUBMIT</button>
        </form>
        <p className="bg-danger">{msg}</p>
    </div>)

} 
export default RegForm;