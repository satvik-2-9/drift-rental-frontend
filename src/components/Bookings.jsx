import React, {useState,useEffect} from 'react'
import { Navbar, Container, Nav, Table,Button} from 'react-bootstrap';
import logo from '../img/logo1.png';
import axios from 'axios';
import '../styles/Bookings.css'
function Bookings() {
    

  var user = "";
  const [click, setclick] = useState(false);
  const [bookings, setBookings] = useState([]); 
  
    useEffect(() => {
      var a = window.location.href.split('/');
      console.log(a); 
      user = a[a.length - 1];
      console.log(user);
    }, []);
  
  
  function handleClick() {
    setclick(!click);
    axios.get(`http://localhost:5000/getBookings/${user}`)
      .then((res) => {
        console.log(res);
        setBookings([...bookings,...res.data]);
        console.log(bookings);
      }, (e) => {
        console.log(e); 
    })
  }
  
    return (
        <div className="bookings">
            
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
            
        <div className="bookings-second">
        {click ? null : <Button variant="dark" onClick={() => { handleClick() }}> Get Booking Data</Button>}
        {click ?
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Booker Email</th>
                <th>Booking Date</th>
                <th>Booking Time</th>
                <th>Vehicle Plate Number</th>
                <th>Location</th>
                <th>Car Name</th>
                <th>Rent/day</th>
              </tr>
            </thead>
            <tbody>
      
              {bookings.map((element,i) => {
                return (
                  <>
                  <tr key={i}>
                        <td>{element._id}</td>
                        <td>{element.email}</td>
                        <td>{element.date}</td>
                        <td>{element.time}</td>
                        <td>{element.plate_number}</td>
                        <td>{element.location}</td>
                        <td>{element.car_name}</td>
                        <td>{element.rent_day}</td>
                  </tr>
                  </>
                )
              })}
            
            </tbody>
          </Table>
          : null
          }
          </div>
           
        </div>
    )
}

export default Bookings
