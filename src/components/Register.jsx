import React,{useState,Link} from 'react'
import {Button,Nav,Navbar,Container,InputGroup} from 'react-bootstrap';
import logo from '../img/logo1.png';
import '../styles/Register.css'
import axios from 'axios'; 
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit() {
        console.log()
        axios.post('http://localhost:5000/register', {
            "email": email,
            "password":password
        })
        .then((res) => {
            console.log('User successfully created');
            window.localStorage.setitem('dirft_token', email); 
            window.location.href = './rent';
        }, (e) => {
            console.log(e); 
        })
    }
    return (
        <div className="register">
            
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
            
            <div className="reg">Registration Form</div>
            <div className="forms">
                <div className="pp">Email <div><input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input></div></div>
                <div className="pp">Password <div><input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input></div></div>
                <div className="pp">Username <div><input type="text" placeholder="Username"></input></div></div>
                <div className="pp">Full Name <div><input type="text" placeholder="Full Name"></input></div></div>
                <div className="pp">Aadhar Number <div><input type="text" placeholder="Aadhar Number"></input></div></div>
                <div className="pp">Contact Number <div><input type="text" placeholder="Email Number"></input></div></div>
                <Button variant="dark" className="sp"onClick={handleSubmit}>
                    Submit
                </Button>
            </div>

            <div>Already have an account? <a href="./login">Login</a></div>
{/*             <div> Already Have an Account ? <Link to="/login"> Login </Link></div>
 */}
           
    
        </div>
    )
}

export default Register
