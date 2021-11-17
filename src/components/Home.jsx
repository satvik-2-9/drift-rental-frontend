import React from 'react'
import { Navbar, Container, Nav,Button,Row,Col} from 'react-bootstrap';
import logo from '../img/logo1.png';
import '../styles/Home.css';
function Home() {

    return (
        <div className="home">
            <Navbar className="nv"collapseOnSelect expand="lg" bg="light" >
                <Container>
                <Navbar.Brand href="/"><img src={logo} alt="company_logo" className="home-logo" ></img></Navbar.Brand>    
                <Navbar.Brand href="/">Drift-Rentals</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link eventKey={2} href="/rent">
                        Rent
                            </Nav.Link>
                    <Nav.Link eventKey={3} href="/">
                        About Us
                    </Nav.Link>

                            <Nav.Link eventKey={4} href="/register">
                                Register
                            </Nav.Link>
                            <Nav.Link eventKey={5} href="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link eventKey={5} href="/">
                                Log Out
                            </Nav.Link>
                           
                        </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="first">
                <div className="fd">
                <Button  variant="outline-light" onClick={() => { window.location.href = "./register" }} ><div className="sz fdf">Register !</div></Button>{' '}
                <Button  variant="outline-light" onClick={()=>{window.location.href="./login"}} ><div className="sz fds">Login !</div></Button>{' '}
                </div>
            </div>
            <div className="second">
                <div className="heading"> About Us</div>
                <div className="data">We have the Car keys for you to enjoy journey as you drive away with your Family & Friends . Choice Of more than 20+ car models and rent by the day, week or month. Enjoy Drive to the roads in the Cars you Enjoy from "Drift Rentals", India's leading self drive cars rental service. Get us in your neighborhood with our fleet spread over in multi cities. So whenever you Travel, "Drift Rentals" will always be near with 100+ pick-up locations. Now Be Ready to drive yourself to your next adventure journey in anywhere in India. </div>
            </div>
            <div className="third">
                <Row className="v">
                    <Col> <div className="a">Any Locations Rent</div> <div className="b">We provide car rental for any location all over India.</div></Col>
                    <Col> <div className="a">Secure and Safer Rides</div> <div className="b">Know exactly what you’re paying us for</div></Col>
                    <Col> <div className="a">Price Match Guarantee</div> <div className="b">Found the same deal for less? We’ll match the price.</div></Col>
                </Row>
                <Row>
                    <Col> <div className="a">Flexible Rentals</div> <div className="b">Cancel or change bookings for free up to 48 hours before pick-up.</div></Col>
                    <Col> <div className="a">No Hidden Cost</div> <div className="b"> Free to book with no other extra charges and costs.</div></Col>
                    <Col> <div className="a">Online 24 / 7 Support</div> <div className="b">We provide 24 /7 online support for own rental customers.</div></Col>
                </Row>
            </div>
            
        </div>
    )
}

export default Home
