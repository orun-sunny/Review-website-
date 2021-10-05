import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Typography } from '@mui/material';

const SingleInstructor = () => {
    let { id } = useParams();

    const [InstructorDetails, setInstructorDetails] = useState([]);

    const [singleInstructor, setSingleInstructor] = useState({});

    //  data load here
    useEffect(() => {
        fetch('/instructorDetails.json')
            .then((res) => res.json())
            .then((data) => setInstructorDetails(data.instructor));
    }, []);

    // it will call after loadded
    useEffect(() => {
        const foundInstructor = InstructorDetails.find
            (instructor => instructor.login.id === id)
        setSingleInstructor(foundInstructor);
    }, [InstructorDetails]);

    return (



        <div>
            {/* <h1>{id}</h1> */}

            <Container className=" col-md-6">
                <h2>This is single faculty all details and papers </h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={singleInstructor?.picture?.thumbnail} />
                        </Card>
                    </Col>
                    <Col md={5}>
                        <Card style={{ width: "30rem", height: "18rem" }}>
                            <Card.Body>
                                <Card.Title>{singleInstructor?.name}</Card.Title>
                                <p> paper: {singleInstructor?.paper}</p>
                                {/* <p> Location : {singleInstructor?.location}</p> */}

                                <p> Email: {singleInstructor?.email}</p>


                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div >


    );
};

export default SingleInstructor;
