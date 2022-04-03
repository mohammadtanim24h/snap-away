import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>Reviews Section</h2>
            {
                reviews?.slice(0, 3)?.map(review => console.log(review))
            }
        </div>
    );
};

export default Reviews;