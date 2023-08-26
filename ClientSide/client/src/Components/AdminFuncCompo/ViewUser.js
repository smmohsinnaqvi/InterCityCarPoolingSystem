import { useEffect, useState } from "react";
// import { Card, Carousel, Col, Form, Input, Select, Space, TimePicker } from "antd";
// import StatusUpdate from "AdminFuncCompo/StatusUpdate";
import StatusUpdate from './StatusUpdate';
import { useNavigate } from "react-router-dom";

export default function ViewUser() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
            
            fetch("http://localhost:8080/getAllUsers")
                .then(res => res.json())
                .then((users) => {
                    setUsers(users);
                })
                .catch((e) => {
                    console.log(e);
                })
    }, []);

    const navigate=useNavigate();

    const updateStatusTrue=(a)=>
    {
        if(users.length>0)
        {

            fetch(`http://localhost:8080/updateStatus?status=true&id=${a}`)
            .then(response => response.json())
            .then(text =>{ if(text==="1") alert("Sucess"); else alert("Acess Given")})
            .catch(error => console.error('Error fetching user data:', error));
            navigate("/ViewUser");

        }
    }

    const updateStatusFalse=(i)=>
    {
        if(users.length>0)
        {

            fetch(`http://localhost:8080/updateStatus?status=false&id=${i}`)
            .then(response => response.text())
            .then(text =>{ if(text==="1") alert("Access Stopped"); else alert("Failed")})
            .catch(error => console.error('Error fetching user data:', error));
            navigate("/ViewUser");
        }
    }

    return (


        <div>
            <h1>User Information</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>aadhar</th>
                        <th>licence</th>
                        <th>Primary_email</th>
                        <th>Secondary_Email</th>
                        <th>status</th>
                        <th>Approve</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((v) => {
                            
                            return (

                                <tr key={v.id}>
                                    <td>{v.fname}</td>
                                    <td>{v.lname}</td>
                                    <td>{v.gender}</td>
                                    <td>{v.dob}</td>
                                    <td>{v.aadhar}</td>
                                    <td>{v.licence}</td>
                                    <td>{v.primary_email}</td>
                                    <td>{v.secondary_email}</td>
                                    <td>{v.status}</td>
                                    <td><button type="button" onClick={()=>{updateStatusTrue(v.user_id.id)}}>Allow Access</button></td>
                                    
                                    <td><button type="button" onClick={()=>{updateStatusFalse(v.user_id.id)}}>Stop Access</button></td>
                                    
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    );
};


{/* <tr key={user.id}>
<td>{user.fname}</td>
<td>{user.lname}</td>
<td>{user.gender}</td>
<td>{user.dob}</td>
<td>{user.aadhar}</td>
<td>{user.licence}</td>
<td>{user.primary_email}</td>
<td>{user.roll}</td>
<td>{user.status}</td>
<td> <button type="button">
    Update Status
</button>
</td>

</tr> */}




