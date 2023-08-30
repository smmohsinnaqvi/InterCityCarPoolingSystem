import { useEffect, useState } from "react";
import CarOwnerNav from "./CarOwnerNav";
import { Button, Card, Col } from "antd";
import { useNavigate } from "react-router-dom";

export default function ViewCarOwnerRides() {

    const [rides, setRides] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        const cid = JSON.parse(localStorage.getItem("loggedCarOwner")).id;
        fetch("http://localhost:8080/getAllRidesById?carowner_id=" + cid)
            .then((res) => res.json())
            .then((rides) => { setRides(rides); if (rides.length > 0) setFlag(true) })

    }, [rides])

    console.log(rides);
    const navigate=useNavigate();

    const cancelRide=(rid)=>{

        const reqOptions={
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({rid:rid})
        };

        fetch("http://localhost:8080/changeRideStatusById?rid="+rid,reqOptions)
        .then((res)=>res.text())
        .then((text)=> {if(text === "1"){ alert("Ride Cancelled");navigate("/C_rides"); }})
        .catch((e)=>{console.log("Something bad happened")})


    }

    return (
        <div className="viewRides">

            <CarOwnerNav />
                <h2 style={{marginTop:'40px',backgroundColor:'#4682a9',height:'60px',color:"whitesmoke"}}> Ride History </h2>
            <div className="message" style={{display:flag?"none":"block"}}>
                 <h3>No Ride History</h3>
                 <p>Start With your First Ride</p>
                 <Button type="button" className="btn btn-warning" onClick={()=>{navigate("/addRide")}}> Add Ride</Button>
            </div>


            <div className="rides">

                {
                    flag &&
                    (<div>
                        <table border="1" className="table table-primary table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Start Location</th>
                                    <th>End Location</th>
                                    <th>Status</th>
                                    <th>Date Of Journey</th>
                                    <th>Departure Time</th>
                                    <th>Arrival Time</th>
                                    <th>Vehicle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rides.map((r) => {
                                        return (
                                            <tr key={r.id}>

                                                <td>{r.id}</td>
                                                <td>{r.start_location.city}</td>
                                                <td>{r.end_location.city}</td>
                                                <td>{r.status}</td>
                                                <td>{r.date_of_journey}</td>
                                                <td>{r.time_of_departure}</td>
                                                <td>{r.time_of_arival}</td>
                                                <td>{r.vehicles.carmodels.carcompany.company_name} {r.vehicles.carmodels.model_name}</td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {
                            rides.map((r) => {
                                return (

                                    <Col span={16} key={r.id} style={{alignSelf:'center',alignItems:'center',width:'30%'}}>
                                        {
                                            r.status === "pending" &&
                                            <Card title={`${r.start_location.city} to ${r.end_location.city}`} style={{ border: '2px solid black' }} bordered={true}>
                                                {/* <h5>
                                                    {r.users.fname}
                                                    <span> </span>
                                                    {r.users.lname}
                                                </h5> */}
                                                <p>
                                                    <b>Price : {r.price_per_seat}</b><br />
                                                    <b>Seats :{r.available_seats}</b>
                                                </p>
                                                <p>Car :{r.vehicles.carmodels.carcompany.company_name} {r.vehicles.carmodels.model_name}</p>
                                                <p><b>Date: {r.date_of_journey} </b></p>
                                                <p><b>Time of depature: {r.time_of_departure} </b></p>
                                                <p><b>Time of arrival: {r.time_of_arival} </b></p>
                                                <Button type="button" className="btn btn-danger"
                                                onClick={()=>{cancelRide(r.id)}}
                                                > Cancel Ride</Button>

                                            </Card>
                                        }
                                    </Col>
                                )
                            })
                        }

                    </div>)
                }


            </div>
        </div>

    )
}