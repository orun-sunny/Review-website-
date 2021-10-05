import React from "react";
import "./Footer.css";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {

    // faCoffee,
    // faOpenbook,

    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Online Edu</h1>
                                <p className="mt-4 ">
                                    <small>
                                        Lets get social
                                    </small>
                                </p>
                                <div className="icons-container d-flex text-center p-2 ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>


                                <h3>Sign up </h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                            </div>
                        </div>
                        <div className="col-md-2 mt-4">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>

                                    <li className="footer-menu">Insturctors</li>
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu"> About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 ml-6">
                            <div className="right-footer-container justify-content-center">
                                <div>

                                </div>
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>+18800555 35 35</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <br />
                                    <div>
                                        <p>
                                            160 Badda, Bangladesh NY 10038,
                                            <br /> 102 1st Avenue, Dhaka Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;
