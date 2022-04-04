import React from "react";
import "./NotFound.css";
import error from "../../images/404.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="not-found">
                <div className="not-found-text my-5">
                    <h2>
                        {" "}
                        <span className="text-danger display-4">
                            Page Not Found!
                        </span>
                    </h2>
                    <h3>Oops! The page you're looking for isn't available.</h3>
                    <p className="lead">
                        You might have the wrong address, or the page may have
                        moved.
                    </p>
                </div>
                <div className="error-img">
                    <img
                        className="img-fluid"
                        src={error}
                        alt="404"
                    />
                </div>
            </div>
            <div className="text-center mt-3">
                <button onClick={() => navigate("/")} className="btn btn-outline-danger">Back to Home</button>
            </div>
        </>
    );
};

export default NotFound;
