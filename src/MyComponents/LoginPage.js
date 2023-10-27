import React, { useState } from 'react';

 

import { useNavigate } from 'react-router-dom';

 

function LoginPage() {

 

  const [email, setEmail] = useState('');

 

  const [password, setPassword] = useState('');

 

  const [attempts, setAttempts] = useState(0);

 

  const maxAttempts = 5;

 

  const [loggedIn, setLoggedIn] = useState(false);

 

  const  navigate = useNavigate();

 

 

 

  const handleLogin = () => {

 

    // Replace this with your actual authentication logic

 

    const validEmail = 'user1@gmail.com';

 

    const validPassword = '12345';

 

 

 

    if (email === validEmail && password === validPassword) {

 

      setLoggedIn(true);

 

    } else {

 

      alert('Login failed. Please try again.');

 

      setAttempts(attempts + 1);

 

 

 

      if (attempts >= maxAttempts - 1) {

 

        localStorage.setItem('blocked', 'true');

 

        alert('You have exceeded the maximum number of login attempts. You are now blocked.');

 

      }

 

    }

 

  };

 

 

 

  const handleLogout = () => {

 

    setLoggedIn(false);

 

  };

 

 

 

  return (

 

    <div>

 

      {loggedIn ?

 

      (

 

        navigate('/dashboard')

 

      )

 

      : localStorage.getItem('blocked') === 'true' ? (

 

        <div>

 

          <h1>You are blocked!</h1>

 

          <p>You have exceeded the maximum number of login attempts. Please contact support for assistance.</p>

 

        </div>

 

      ) : (

 

        <div>

 

          <h1>Login</h1>

 

          <input type="email" placeholder="Email"  value={email}                    

 

            onChange={(e) => setEmail(e.target.value)}  required />

 

           

 

         

 

          <input type="password" placeholder="Password" value={password}            

 

            onChange={(e) => setPassword(e.target.value)}  required />          

 

          <button onClick={handleLogin}>Login</button>

 

        </div>

 

       

 

      )

 

      }

 

     

 

    </div>

 

   

 

  );

 

}

 

 

 

export default LoginPage;