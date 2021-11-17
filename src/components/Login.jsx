import React,{useState,useEffect} from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAlert } from 'react-alert'
import logo from '../img/logo1.png';
import axios from 'axios';
import '../styles/Login.css'


function Login() {


    const alert = useAlert()
    const [email, setEmail] = useState("");
    const [pass, setpass] = useState("");

    useEffect(() => {
        setEmail("");
        setpass(""); 
    }, []);
    
    function handleLogin() {

        axios.post('http://localhost:5000/login', {
            email: email,
            password: pass
        })
            .then((res) => {
                if (res.status === 400) {
                    alert.show('Invalid Credentials');
                } else {
                    alert.show('Successfull Login');
                    console.log('Succesfully logged in ');
                    window.localStorage.setItem('drift_token', email);

                    window.location.href = './rent'; 
                }
            }, (e) => {
                alert.show('Invalid Credentials');
            });
    }

    return (
        <div className="login">
            <Navbar collapseOnSelect expand="lg" expand="lg" variant="dark" bg="dark" >
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
            
            <div className="login-ct">

            <div className="login-pp">Email <div><input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input></div></div>
            <div className="login-pp">Password <div><input type="password" placeholder="password" onChange={(e)=>{setpass(e.target.value)}}></input></div></div>
            <Button className="login-pp" onClick={handleLogin}> Login ! </Button>    
            </div>
        </div>
    )
}

export default Login
