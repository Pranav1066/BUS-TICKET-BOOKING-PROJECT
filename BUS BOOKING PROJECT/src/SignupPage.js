import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './SignupPage';
import { Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Style/Style.css';
import './Style/lp1.css';
const LoginPage = () => {
  const [data, setData] = useState(true);

  const history = useNavigate();
  const handle = () => {
    setData(false);
    history('/home');
  };

  return (
    <>
      {data ? (
        <div className='total'>
        <div className='sp'>
          <Typography variant="h2" color="orange" >Login</Typography><br/>
          <form>
            <TextField label="Email / Mobile Number" />
            <TextField label="Password" type="password" />
            <Button  component={Link} to="/" variant="contained" color="primary" onClick={handle}>
              Login
            </Button><br/><br/>
          </form>
        </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default LoginPage;
