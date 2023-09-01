import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";

export default function PassengerReview(){

    const [preview, setPreview] = useState([]);
    useEffect(() => {
            
        fetch("https://localhost:7026/api/PassengersReviews")
            .then(res => res.json())
            .then((preview) => {
                setPreview(preview);
            })
            .catch((e) => {
                console.log(e);
            })
}, []);


    const navigate=useNavigate();

 return(
    <div>
        <AdminNav/>
        <h1>All Passenger review</h1>
        <table className="table table-striped" >
                <thead>
                <tr>
                    <th className="text-center">Id</th>
                    <th className="text-center">Passnger Id</th>
                    <th className="text-center">Ride Id</th>
                    <th className="text-center">Rating</th>
                    <th className="text-center">Comments</th>
                </tr>
             </thead>                    
                <tbody>
                       { preview.map((v) => {

                       return (

                            <tr key={v.id}>       
                                <td className="text-center">{v.id}</td>
                                <td className="text-center">{v.passengerId}</td>
                                <td className="text-center">{v.rideId}</td>
                                <td className="text-center">{v.rating}</td>  
                                <td className="text-center">{v.comments}</td>    
                            </tr>
                        )

                       })
                    
                }
                </tbody>
            </table>
    </div>
    
    );

};
 