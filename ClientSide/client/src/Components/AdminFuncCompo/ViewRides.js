import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Row, Select } from "antd";
// import StatusUpdate from './StatusUpdate';
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

    useEffect(()=>{
      console.log(rides);
    },[rides])

    return (
      <div>
      <h1>Rides Information</h1>
      <table border="1" className="table-collapse">
          <thead>
              <tr>
                  <th>Ride Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Start_Location</th>
                  <th>End Location</th>
                  <th>Company Name</th>
                  <th>Model Name</th>
                  <th>Time of depature</th>
                  <th>Time of arrival</th>
                  <th>status</th>
                

              </tr>
          </thead>
          <tbody>
            {/* {
              rides.map((r)=>{
                <tr key={r.}>

                </tr>
              })
            } */}
              
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





