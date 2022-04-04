import React from "react";
import "./Home.css";
import banner from "../../images/banner-cam.png";
import { Container } from "react-bootstrap";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    return (
        <Container>
            <div className="banner-section my-4">
                <div>
                    <h3 className="display-4">Your Next Camera</h3>
                    <h3 className="display-4 fw-normal sub-title">
                        The Best Out There
                    </h3>
                    <p>
                        Capture the best shots of your life and peaks of more
                        decisive moments with our newly developed Camera. Far
                        superior than the previous gen. Provides much sharper
                        images. With 4k Capability and Stabilization, this is a
                        beast everyone wants.
                    </p>
                    <button className="demo-btn">Live Demo</button>
                </div>
                <div className="banner-img">
                    <img className="img-fluid" src={banner} alt="camera" />
                </div>
            </div>
            <hr />
            <div className="mt-5">
                <h2 className="display-5 text-secondary text-center">
                    Customer Reviews(3)
                </h2>
                <div className="reviews-container">
                    {reviews.slice(0, 3).map((review) => (
                        <Review key={review.id} review={review}></Review>
                    ))}
                </div>
                <div className="text-center mt-4 mb-5">
                    <button onClick={() => navigate('/reviews')} className="see-reviews-btn">
                        See All Reviews
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Home;
