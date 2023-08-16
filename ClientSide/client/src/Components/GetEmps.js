import { useEffect, useState } from "react";

export default function GetEmps()
{
    const[emp,setEmps]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/emps")
        .then(res=>res.json())
        .then(emps=>setEmps(emps))
    },[])
    return(<div>
        <table>
            {
                emp.map(v=>{return <tr key={v.EMPNO}>
                    <td>{v.EMPNO}</td>
                    <td>{v.ENAME}</td>
                    <td>{v.JOB}</td>
                    <td>{v.DEPTNO}</td>
                </tr>})
            }
        </table>
    </div>)
}