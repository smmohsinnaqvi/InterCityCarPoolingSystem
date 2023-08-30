import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Row, Select } from "antd";
// import StatusUpdate from './StatusUpdate';
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
export default function ViewRides() {
    const [rides, setRides] = useState([]);

    useEffect(() => {
            
            fetch("http://localhost:8080/getallrides")
                .then(res => res.json())
                .then((rides) => {
                    setRides(rides);
                })
                .catch((e) => {
                    console.log(e);
                })
    }, []);

const navigate=useNavigate();
const pendingRides=(a)=>
{
    if(rides.length>0)
    {

        fetch(`http://localhost:8080/getAllRidesByStatus?status=pending&id=${a}`)
        .then(res => res.json())
            .then((rides) => {
                setRides(rides);
            })
            .catch((e) => {
                console.log(e);
            })
        navigate("/ViewRides");

    }
}
const activeRides=(a)=>
    {
        if(rides.length>0)
        {

            fetch(`http://localhost:8080/getAllRidesByStatus?status=active&id=${a}`)
            .then(res => res.json())
                .then((rides) => {
                    setRides(rides);
                })
                .catch((e) => {
                    console.log(e);
                })
            navigate("/ViewRides");

        }
    }

    useEffect(()=>{
      console.log(rides);
    },[rides])

    return (
      <div>
        <AdminNav/>
        {/* <AdminNav/> */}
         <button type="button" onClick={()=>{pendingRides()}}>Pending Rides</button>
                                    
                                    <button type="button" onClick={()=>{activeRides()}}>Active Rides</button>
                           
      <h1>Rides Information</h1>
      <table border="1" className="table table-striped">
          <thead>
              <tr>
                  <th className="text-center">Ride Id</th>
                  <th className="text-center">First Name</th>
                  <th className="text-center">Last Name</th>
                  <th className="text-center">Start_Location</th>
                  <th className="text-center">End Location</th>
                  <th className="text-center">Company Name</th>
                  <th className="text-center">Model Name</th>
                  <th className="text-center">Time of depature</th>
                  <th className="text-center">Time of arrival</th>
                  <th className="text-center">status</th>
                

              </tr>
          </thead>
          <tbody>
            {
               rides.map((v) => {
                            
                return (
               <tr key={v.id}>
               {/* <td>{v.fname}</td>
               <td>{v.lname}</td> */}
               <td className="text-center">{v.id}</td>
               <td className="text-center">{v.users.fname}</td>
               <td className="text-center">{v.users.lname}</td>
               <td className="text-center">{v.start_location.city}</td>
               <td className="text-center">{v.end_location.city}</td>
               <td className="text-center">{v.vehicles.carmodels.model_name}</td>
               <td className="text-center">{v.time_of_departure}</td>
               <td className="text-center">{v.time_of_arival}</td>
               <td className="text-center">{v.date_of_journey}</td>
               <td className="text-center">{v.status}</td>
              
              
               
            
               </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    );
};






//         <div className="rides">
//           <Row gutter={16}>
//             {
//                 rides.map(r => {
//                   return (
//                     <Col span={8}>
//                       <Card title={`${r.start_location.city} - ${r.end_location.city}`} style={{ border: "2px solid black" }} bordered={false}>
//                         <h5>
//                           {r.users.fname}
//                           <span> </span>
//                           {r.users.lname}
//                         </h5>
//                         <p>
//                           <b>Price : {r.price_per_seat}</b><br/>
//                           <b>Seats :{r.available_seats}</b>
//                         </p>
//                         <p>Car :{r.vehicles.carmodels.carcompany.company_name} {r.vehicles.carmodels.model_name}</p>
//                         <p><b>Time of depature: {r.time_and_date_of_departure} </b></p>
//                         <p><b>Time of arrival: {r.time_of_arival} </b></p>
                       
//                       </Card>
//                     </Col>
//                   );
//                 })
//             }
//           </Row>
//         </div>
//     );
// };


// {/* <tr key={user.id}>
// <td>{user.fname}</td>
// <td>{user.lname}</td>
// <td>{user.gender}</td>
// <td>{user.dob}</td>
// <td>{user.aadhar}</td>
// <td>{user.licence}</td>
// <td>{user.primary_email}</td>
// <td>{user.roll}</td>
// <td>{user.status}</td>
// <td> <button type="button">
//     Update Status
// </button>
// </td>

// </tr> */}





