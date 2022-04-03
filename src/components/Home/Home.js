import React from "react";
import "./Home.css";
import banner from "../../images/banner-cam.png";
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <div className="banner-section">
                <div>
                    <h3 className="display-4">Your Next Camera</h3>
                    <h3 className="display-4 fw-normal sub-title">
                        The Best There Is
                    </h3>
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea autem inventore, saepe dicta placeat aliquam delectus magnam exercitationem, esse voluptate eum sequi quia dolor est corporis neque odit quidem!</p>
                    <button className="demo-btn">Live Demo</button>
                </div>
                <div className="banner-img">
                    <img className="img-fluid" src={banner} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Home;
