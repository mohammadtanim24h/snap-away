import React from "react";
import "./Home.css";
import banner from "../../images/banner-cam.png";
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <div className="banner-section mt-4">
                <div>
                    <h3 className="display-4">Your Next Camera</h3>
                    <h3 className="display-4 fw-normal sub-title">
                        The Best There Is
                    </h3>
                    <p>Capture the best shots of your life and peaks of more decisive moments with our newly developed Camera. Far superior than the previous gen. Provides much sharper images. With 4k Capability and Stabilization, this is a beast everyone wants.</p>
                    <button className="demo-btn">Live Demo</button>
                </div>
                <div className="banner-img">
                    <img className="img-fluid" src={banner} alt="camera" />
                </div>
            </div>
        </Container>
    );
};

export default Home;
