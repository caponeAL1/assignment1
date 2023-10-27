import React from 'react';

 

import { Link, useNavigate } from 'react-router-dom';

 

import Register from './Register';

 



 

function Dashboard() {

 

  return (

    <div>

      <h1>Dashboard</h1>

      <nav>

        <Link to = "/home">Home</Link>&nbsp;&nbsp;&nbsp;

        <Link to = "/register">Registration</Link>&nbsp;&nbsp;&nbsp;

        <Link to = "/contact">ContactUs</Link>&nbsp;&nbsp;&nbsp;

      </nav>

 

 

    </div>

 

  );

 

}

 

 

 

export default Dashboard;