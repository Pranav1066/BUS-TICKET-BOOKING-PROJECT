import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import './Style/Style.css';
import './Style/lp1.css';


const LoginPage = () => {

  const history = useNavigate();
  function change(){
    history('/home');
  }

  return (
    <>
    <div className='lp1'>
        <div className='lp'>
          <Typography variant="h2"color="orange">Sign Up</Typography><br/>
          <form>
            <TextField label="Email" required />
            <TextField label="Mobile Number" required/>
            <TextField label="Password" type="password" required/>
            <TextField label="Confirm Password" type="password"required />
            <Button  component={Link} to="/" variant="contained" color="primary" onClick={change}>
              Sign Up
            </Button><br/><br/>
          </form>
        </div>
        </div>
    </>
  );
};

export default LoginPage;
