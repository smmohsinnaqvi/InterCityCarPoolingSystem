import { useEffect, useState } from "react";
// import { Card, Carousel, Col, Form, Input, Select, Space, TimePicker } from "antd";
// import StatusUpdate from "AdminFuncCompo/StatusUpdate";
import StatusUpdate from './StatusUpdate';
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
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
            <AdminNav/>
            <h1>User Information</h1>
            <table border="1" className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">First Name</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">Gender</th>
                        <th className="text-center">DOB</th>
                        <th className="text-center">aadhar</th>
                        <th className="text-center">licence</th>
                        <th className="text-center">Primary_email</th>
                        <th className="text-center">Secondary_Email</th>
                        <th className="text-center">status</th>
                        <th className="text-center">Approve</th>
                        <th className="text-center">Disable</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((v) => {
                            
                            return (

                                <tr key={v.id}>
                                    <td className="text-center">{v.id}</td>
                                    <td className="text-center">{v.fname}</td>
                                    <td className="text-center">{v.lname}</td>
                                    <td className="text-center">{v.gender}</td>
                                    <td className="text-center">{v.dob}</td>
                                    <td className="text-center">{v.aadhar}</td>
                                    <td className="text-center">{v.licence}</td>
                                    <td className="text-center">{v.primary_email}</td>
                                    <td className="text-center">{v.secondary_email}</td>
                                    <td className="text-center">{v.status}</td>
                                    <td className="text-center"><button type="button" onClick={()=>{updateStatusTrue(v.user_id.id)}}>Allow Access</button></td>
                                    
                                    <td className="text-center" ><button type="button" onClick={()=>{updateStatusFalse(v.user_id.id)}}>Stop Access</button></td>
                                    
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    );
};








