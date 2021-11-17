import React,{useState,useEffect} from 'react'
import { Navbar, Container, Nav, Button, Row, Col } from 'react-bootstrap';
import '../styles/Rentcar.css';
import logo from '../img/logo1.png';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAlert } from 'react-alert'
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

    function Rentcar() {
        const alert = useAlert(); 
    
        const [name, setName] = useState("");
        const [plate_num, setplatenum] = useState("");
        const [location, setlocation] = useState("");
        const [rent, setrent] = useState("");
        const [available, setavailable] = useState(true);
        const [date, setDate] = useState(new Date());
        const [time, setTime] = useState("");
        const [user_email, setuserEmail] = useState("");
        
    useEffect(() => {
        console.log(window.location);
        var a = window.location.href.split('/');
        setuserEmail(window.localStorage.getItem('drift_token')); 
        setName(a[a.length - 1]);
    }, []);
        
        useEffect(() => {
            console.log(name);
            if (name) {
                axios.post(`http://localhost:5000/deets/${name}`)
                    .then((res) => {
                        console.log(res);
                        setplatenum(res.data[0]["plate_number"]);
                        setlocation(res.data[0]["location"]);
                        setrent(res.data[0]["rent_day"]);
                        setavailable(res.data[0]["available"]);
                    }, (e) => {
                        console.log(e);
                    });
            }

        }, [name]);
        
        function handleBook() {
            /* first get the profile data of the current user that has logged in  */
            
            if (!user_email) {
                alert.show('Please Login , Redirecting to Login Page .');
                window.location.href = './login';
            }else{

            axios.post('http://localhost:5000/booking', {
                email: user_email,
                date: date,
                time: time,
                plate_number: plate_num,
                location:location,
                car_name:name,
                rent_day:rent
            })
                .then((res) => {
                    alert.show('successfully booked , Redirecting to Bookings');
                    window.location.href = `http://localhost:3000/bookings/${user_email}`;
                }, (e) => {
                    console.log(e);
                });
            
            }
            
        }
        
    return (
        <div className="rentcar">
             
            <Navbar className="nv"collapseOnSelect expand="lg" variant="dark" bg="dark" >
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
            
            
        <div className="rentcar-first">
            <Row>
                <Col><img className="img-car" src={`https://calm-ravine-99748.herokuapp.com/Images/${name}.png`} alt="car-pic"  ></img></Col>
                    <Col> <div>
                    <ul className="ls">
                        <li>Model Name : {name}</li>
                        <li>License Plate Number : {plate_num}</li>
                        <li>Location : {location}</li>
                        <li>Rent : {rent}/day</li>
                         {available?<li>Available :)</li>:<li>Car aleady booked :( </li>} 
                    </ul> </div> </Col>
                </Row>
        </div>
        
        <div className="rentcar-second">
            {available ?
                 <>
                        <div className="rentcar-head">Booking Details</div>
                        <div className="rentcar-body">
                        <div className="k"> Booking Date : <DatePicker selected={date} onChange={(date) => setDate(date)} />  </div>
                        <div className="k"> Booking Time :<div> <input placeholder=" Military time standard" onChange={(e)=>{setTime(e.target.value)}} ></input></div></div>    
                        <Button className="bk" onClick ={handleBook}> Book my ride ! </Button>
                        </div>
                  </>
             :null}
        </div>
              
        </div>

    )
}

export default Rentcar
