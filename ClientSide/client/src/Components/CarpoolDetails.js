import React, { useState } from 'react';
import PassengerReview from './Passenger_Review'; // Adjust the path

const CarpoolDetails = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (reviewData) => {
    setReviews([...reviews, reviewData]);
  };

  return (
    <div className="carpool-details">
      {/* Display carpool details */}
      <h1>Inter-city car System Details</h1>
      {/* Display other relevant information */}
      <PassengerReview onSubmit={handleReviewSubmit} />
      {/* Display existing reviews */}
      <div className="reviews">
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarpoolDetails;

