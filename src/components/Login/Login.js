import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from '../NavBar/Navbar';
import Button from '@mui/material/Button';
import { ReactComponent as LoginImg } from '../../imgs/login.svg';
import { Stack } from '@mui/system';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Login() {

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  const navigate = useNavigate()

  const handleSubmit = () => {
    axios.post('https://backend-6wmd.onrender.com/api/login/user', {
      email : email,
      password : password
    }).then((response) => {
      setEmail("")
      setPassword("")
      if(response.data.status!= 200 || (!response.data.user)){
        alert('No user found with given credentials')
      }
      else {
        localStorage.setItem('user', response.data.user.name)
        localStorage.setItem('userId', response.data.user._id)
        alert('Logged in as ' + response.data.user.name)
        navigate('/roadmap')
      }
    }).catch((err) => {
      alert('Retry')
    })
  }

  return (
    <>
    <Navbar />
    <Stack direction="row">
      <div className = "login_form">
      <Typography variant='h2' color='#1976d2'>Welcome Back</Typography>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        autoComplete="off"
      >
        <TextField
          id="Email" label="Email" variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="Password" label="Password" variant="outlined" type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          variant="contained" className='btn'
          onClick={handleSubmit}
        >
          LOGIN
        </Button>
      </Box>
      </div>
      <LoginImg className="login_img"/>
    </Stack>
    </>
  );
}
