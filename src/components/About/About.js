import React from "react";

const About = () => {
    return (
        <div className="container">
            <h2 className="display-5 text-center my-4">About Us</h2>
            <div>
                <p className="lead">Snap Away is a camera-centered store located in Bangladesh. We sell various kinds of cameras. Both flagship and entry level cameras are available in our store. We are located in a convenient and very beautiful place. It is easy to travel here. Our way of work is Eco Friendly. We believe that sustainability is essential to success. As consumer groups continue to publish studies about the rising demand for more environmentally-friendly practices in business, it's easy to see why green initiates are becoming so important. We are being pushed to think beyond the basics of our CSR initiatives, and start making a real difference in the world.</p>
            </div>
            <div className="text-center">
                <h3 className="display-6 my-3">Visit Our Social Media</h3>
                <button className="btn btn-outline-primary px-4 py-2 mx-2 my-3"><i class="fa-brands fa-facebook me-2"></i>Facebook</button>
                <button className="btn btn-outline-primary px-4 py-2 mx-2 my-3"><i class="fa-brands fa-twitter me-2"></i>Twitter</button>
            </div>
        </div>
    );
};

export default About;
