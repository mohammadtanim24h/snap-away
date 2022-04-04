import React from "react";
import "./Review.css";

const Review = ({ review }) => {
    const { img, name, rating, review: userReview } = review;
    return (
        <div className="user-review shadow">
            <div className="reviewer-img">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="reviewer-details">
                <h3 className="text-secondary">{name}</h3>
                <p className="lead">{userReview}</p>
                <p className="lead">Rating: {rating}</p>
            </div>
        </div>
    );
};

export default Review;
