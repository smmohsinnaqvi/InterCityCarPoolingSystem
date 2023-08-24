import { useEffect, useState } from "react";
// import { Card, Carousel, Col, Form, Input, Select, Space, TimePicker } from "antd";
export default function ViewUser(){
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/getAllUsers")
            .then((res) => res.json())
            .then((users) => setCarcom(users));
    })
    return(
           
               
        <div>
//       <h1>User Information</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
                <tr key={user.id}>
//                   <td>{user.password}</td>
//                   <td>{user.fname}</td>
//                   <td>{user.lname}</td>
                     <td>{user.gender}</td>
                     <td>{user.dob}</td>
                     <td>{user.aadhar}</td>
                     <td>{user.licence}</td>
                     <td>{user.primary_email}</td>
                     <td>{user.roll}</td>
                     <td>{user.status}</td>
                     <td> <button onClick={() => StatusUpdate(user.id)}>
                        Update Status
                        </button>
                     </td>

//                  </tr>
              ))}
//             </tbody>
//           </table>
//         </div>
      );
    };
    
   
    


    /*

// import React, { useState, useEffect } from 'react';

// const AdminPanel = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('API_ENDPOINT')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.error('Error fetching user data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>User Information</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
            {/* Add more columns as needed *///}
//             </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   {/* Add more cells corresponding to the columns */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     };
    
//     export default AdminPanel;
    



    // */