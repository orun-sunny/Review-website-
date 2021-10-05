import React from 'react';
import { } from 'react-bootstrap';
import "./Home.css";
import Footer from "../Footer/Footer";
// import Insructors from "../Insructors/Instructors";


const Home = () => {
    return (
        <div>
            <div className="banner-container ">
                <div className="banner h-100">
                    <div className="row d-flex banner align-items-center justify-content-center p-4 h-100">
                        {/* <NavBar></NavBar> */}

                        <div className="col-md-6 h-100">
                            <h1 className="title">
                                The New Way To Learn Properly <br /> in With Us!
                            </h1>
                            <p className="text-white text-center mt-3 p-2">
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. */}
                            </p>
                            <button className=" mt-3 about-btn">About Us</button>
                        </div>
                        <div className="col-md-6 h-100">
                            <img className="h-100" src="https://preview.colorlib.com/theme/onlineedu/assets/img/hero/xheroman.png.pagespeed.ic.-tVCH9AISL.webp" alt="" />
                        </div>

                    </div>
                </div>

            </div>

            {/* <div>

                <Instructors>

                </Instructors>

            </div> */}


            <Footer></Footer>
        </div >


    );
};
export default Home;