import { useEffect, useState } from "react";
// import { Card, Carousel, Col, Form, Input, Select, Space, TimePicker } from "antd";
export default function ViewUser(){
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/getAllUsers")
            .then((res) => res.json())
            .then((users) => setUser(users));
    })
    return(
           
               
        <div>
//       <h1>User Information</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//              <th>Last Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>aadhar</th>
                <th>licence</th>
                <th>Primary_email</th>
                <th>Secondary_Email</th>
                <th>status</th>
                <th>Approve</th>

//             </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
                <tr key={user.id}>
{/* //                   <td>{user.password}</td> */}
//                   <td>{user.fname}</td>
//                   <td>{user.lname}</td>
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

//                  </tr>
              ))}
//             </tbody>
//           </table>
//         </div>
      );
    };
    
   
    

