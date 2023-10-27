import React from 'react';

 

import './App.css';

 

import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';

 

import Login from './MyComponents/LoginPage';

import Dashboard from './MyComponents/Dashboard';

import Register from './MyComponents/Register';

import ContactUs from './MyComponents/ContactUs';

 

 

 

function App() {

 

  return (

 

    <div className="App">

 

      <Router>

 

        <Routes>

 

           <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard/>} />

          <Route path="/register" element={<Register />} />

          <Route path="/contact" element={<ContactUs />} />

 

 

        </Routes>

 

      </Router>

 

    </div>

 

  );

 

}

 

 

 

export default App;