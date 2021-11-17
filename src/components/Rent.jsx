import React from 'react'
import { Navbar, Container, Nav, CardGroup,Button, Card } from 'react-bootstrap';
import logo from '../img/logo1.png';
import i20 from '../img/cars/i20.png'
import baleno from '../img/cars/baleno.png'
import kwid from '../img/cars/kwid.png'
import wagonr from '../img/cars/wagonr.png'
import dzire from '../img/cars/dzire.png'
import amaze from '../img/cars/amaze.png'
import creta from '../img/cars/creta.png'
import brezza from '../img/cars/brezza.png'
import verna from '../img/cars/verna.png'
import audi6 from '../img/cars/audia6.png'
import sonet from '../img/cars/sonet.png'
import '../styles/Rent.css'
function Rent() {
    return (
        <div claasName="rent">
          
          <Navbar className="nv"collapseOnSelect expand="lg" variant="dark" bg="dark">
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
            
            <div className="rent-first">
                <div> Choose a car now! </div>
                <div> What are you waiting for?</div>
            </div>
            <div className="rent-second">

            <CardGroup className="rent-cg">
                <Card className="rent-cd">
                    <Card.Img variant="top" src={i20} />
                    <Card.Body>
                    <Card.Title>i 20</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/i20"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={baleno} />
                    <Card.Body>
                    <Card.Title>Baleno</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/baleno"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={kwid} />
                    <Card.Body>
                    <Card.Title>Kwid</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/kwid"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>

                <CardGroup className="rent-cg">
                <Card>
                    <Card.Img variant="top" src={wagonr} />
                    <Card.Body>
                    <Card.Title>Wagonr</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/wagonr"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={dzire} />
                    <Card.Body>
                    <Card.Title>Dzire</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/dzire"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={amaze} />
                    <Card.Body>
                    <Card.Title>Amaze</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/amaze"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
                <CardGroup className="rent-cg">
                <Card>
                    <Card.Img variant="top" src={creta} />
                    <Card.Body>
                    <Card.Title>Creta</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/creta"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={brezza} />
                    <Card.Body>
                    <Card.Title>Brezza</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/brezza"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={verna} />
                    <Card.Body>
                    <Card.Title>Verna</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/verna"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
            
                </Card>
            </CardGroup>
            <CardGroup className="rent-cg">
                <Card>
                    <Card.Img variant="top" src={sonet} />
                    <Card.Body>
                    <Card.Title>Sonet</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/sonet"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
             
                </Card>
                <Card>
                    <Card.Img variant="top" src={audi6} />
                    <Card.Body>
                    <Card.Title>Audi A6</Card.Title>
                    <Card.Text>
                        <Button variant="dark"> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                    
                </Card>
                <Card>
                    <Card.Img variant="top" src={kwid} />
                    <Card.Body>
                    <Card.Title>Kwid</Card.Title>
                    <Card.Text>
                        <Button variant="dark" onClick={()=>{window.location.href="./rent/kwid"}}> Rent Now ! </Button>
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
            </CardGroup>



            </div>
        </div>
    )
}

export default Rent
