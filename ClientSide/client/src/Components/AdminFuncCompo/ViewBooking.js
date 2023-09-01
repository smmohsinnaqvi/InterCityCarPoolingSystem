import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";

export default function ViewAllBooking(){

    const [booking, setBooking] = useState([]);
    useEffect(() => {
            
        fetch("https://localhost:7026/api/Bookings")
            .then(res => res.json())
            .then((booking) => {
                setBooking(booking);
            })
            .catch((e) => {
                console.log(e);
            })
            
}, []);


    const navigate=useNavigate();

 return(
    <div>
        <AdminNav/>
        <h1>All Booking Details</h1>
        <table className="table table-striped" >
                <thead>
                <tr>
                    <th className="text-center">Id</th>
                    <th className="text-center">Passenger Id</th>
                    <th className="text-center">Ride Id </th>
                    <th className="text-center">Time of journey</th>
                    <th className="text-center">No of Seats</th>
                    <th className="text-center">Total price </th>
                    <th className="text-center">Status of booking</th>
                    {/* <th className="text-center">Passenger Id </th>
                    <th className="text-center">Payment Status</th>
                    <th className="text-center">Ride Status</th> */}
                </tr>
             </thead>                    
                <tbody>
                       { booking.map((v) => {

                       return (

                            <tr key={v.id}>       
                                <td className="text-center">{v.id}</td>
                                <td className="text-center">{v.passengerId}</td>
                                <td className="text-center">{v.rideId}</td>
                                <td className="text-center">{v.time}</td>  
                                <td className="text-center">{v.noOfSeats}</td>    
                                <td className="text-center">{v.totalPrice}</td> 
                                <td className="text-center">{v.status}</td>  
                                {/* <td className="text-center">{v.passenger}</td>    
                                <td className="text-center">{v.payments}</td> 
                                <td className="text-center">{v.ride}</td>  */}
                            </tr>
                        )

                       })
                    
                }
                </tbody>
            </table>
    </div>
    
    );

};
 /*
 
 "id": 1,
    "passengerId": 1,
    "rideId": 1,
    "time": "1998-03-13T11:58:58",
    "noOfSeats": 4,
    "totalPrice": 8000,
    "status": "success",
    "passenger": null,
    "payments": [],
    "ride": null
  },
  
  */