import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Rent from './components/Rent';
import Login from './components/Login';
import Rentcar from './components/Rentcar';
import Bookings from './components/Bookings';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rent/:name" element={<Rentcar />} />
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/bookings/:email" element={<Bookings />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
