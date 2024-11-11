import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Header from './Header'
import { FaClock, FaCocktail, FaParking, FaSnowflake, FaTshirt, FaUtensils, FaWifi } from 'react-icons/fa'


const HotelServices = () => {
    return (
        <>
            <Container className='mb-2'>
                <Header title={"Our Services"} />
                <Row className='mt-4'>
                    <h4 className='text-center'>
                        Services at <span className='hotel-color'>Megenagna Hotel</span>
                        <span className='gap-2'>
                            <FaClock className='ml-5'/> - 24-Hour Front Desk
                        </span>
                    </h4>
                </Row>
                <hr />
                <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaWifi />WiFi
                                </Card.Title>
                                <Card.Text>
                                    Stay connected Free high-speed WiFi access.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaUtensils />Breakfast
                                </Card.Title>
                                <Card.Text>
                                    Start your Day with a Delicous Breakfast buffet.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaTshirt />Laundary
                                </Card.Title>
                                <Card.Text>
                                    Keep your clothes Clean and Fresh with our Laundary service.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaCocktail />Mini-bar
                                </Card.Title>
                                <Card.Text>
                                    Enjoy a refreshing Drink or Snack from our in-room min-bar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaParking />Parking
                                </Card.Title>
                                <Card.Text>
                                    Park your car Conveniently in our on-site Parking lot.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="hotel-color">
                                    <FaSnowflake />Air conditioning
                                </Card.Title>
                                <Card.Text>
                                    Stay Cool and Comfortable with our Air Conditioning system.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </>
    )
}

export default HotelServices
