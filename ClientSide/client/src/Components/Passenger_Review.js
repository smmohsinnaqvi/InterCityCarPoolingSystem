import { useEffect, useState } from "react";

export default function PassengerReview(){
    
    // Validate inputs before submitting
   /* if (rating > 0 && comment.trim() !== '') {
      const reviewData = {
            id,
            passenger_id,
            ride_id,
            rating,
            comment
      };
      onSubmit(reviewData); // Pass the review data to the parent component
      setRating(0);
      setComment('');
    } else {
      // Handle validation error
      // You could display an error message to the user
    }
  };*/

  const [data,setData]=useState([]);
  useEffect(()=>{
        
    fetch("http://localhost:8080/getAllPassenger_Review")
   .then(res=>res.json())
   .then(console.log(data))
    .then(data=>setData(data))
    
    },[]);

 return(
    <div>
        <table className="table table-striped" >
                <tbody>
                <tr>
                    <th className="text-center">Passenger Review</th>
                    <th className="text-center">S.No</th>
                    <th className="text-center">Passnger Id</th>
                    <th className="text-center">Ride Id</th>
                    <th className="text-center">Rating</th>
                    <th className="text-center">Comments</th>
                </tr>
               

                { // here slice used for limited data
                    data.map(v => {
                       
                        return (
                            <tr>                                
                               <td className="text-center">{v.id}</td>
                                <td className="text-center">{v.passenger_id}</td>
                                <td className="text-center">{v.ride_id}</td>
                                <td className="text-center">{v.rating}</td>  
                                <td className="text-center">{v.comments}</td>    
                            </tr>
                        )}
                    
                )}
                
            </tbody>
            </table>
    </div>
 )

}
 