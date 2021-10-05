import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, FormControl, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Instructors = () => {

  const [instructors, setInstructors] = useState([])

  const [displayInstructors, setDisplayInstructors] = useState([])

  //handel all depend on search

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase()

    const matchedInstructor = instructors.filter(instructor => instructor.name.toLowerCase().includes(searchValue))

    setDisplayInstructors(matchedInstructor)

    console.log(matchedInstructor)


  }

  useEffect(() => {
    fetch('/instructorsData.json')
      .then(res => res.json())
      .then(data => {
        setInstructors(data)
        setDisplayInstructors(data)
      })
  }, [])




  return (
    <div>
      <Container className="my-5">
        <Form style={{ width: "40%" }} className="d-flex">
          <FormControl
            type="search"
            placeholder="Search a letter"
            className="me-2"
            aria-label="Search"
            onChange={handleSearch}
          />
        </Form>
        {/* <h2>{displayInstructors.length}</h2> */}
        <div className="container-fluid d-flex justify-content-center my-5 gt-4">
          <Row>

            {
              displayInstructors.map(instructor => (


                <Col md={4} mb={2}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={instructor?.image} />
                    <Card.Body>
                      <Card.Title>Name: {instructor?.name}</Card.Title>

                      <Card.Text>
                        <h4>designation: {instructor?.designation}</h4>
                        <p> id: {instructor?.id}</p>
                        <p>
                          <NavLink
                            to={`/instructors/${instructor?.id}`}
                            activeStyle={{
                              fontWeight: "bold",
                              color: "red",
                            }}
                          >
                            Details
                          </NavLink></p>


                        {/* <NavLink>Go somewhere</NavLink> */}



                      </Card.Text>
                      {/* <NavLink>Go somewhere</NavLink> */}

                    </Card.Body>
                  </Card>

                </Col>





              ))

            }
          </Row>
        </div>



      </Container >
      <Footer></Footer>
    </div>
  );
};

export default Instructors;