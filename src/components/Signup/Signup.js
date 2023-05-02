import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from '../NavBar/Navbar';
import Button from '@mui/material/Button';
import { ReactComponent as SignInImg } from '../../imgs/signup.svg';
import { Stack } from '@mui/system';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function Signup() {

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
      axios.post('https://backend-6wmd.onrender.com/api/signup/user', {
      name : name,
      email : email,
      password : password
    }).then((response) => {
      setName("")
      setEmail("")
      setPassword("")
      if(response.data.status === 200){
        alert(response.data.description)

        navigate('/login')
      }
    }).catch((err) => {
      console.log(err)
      window.location.reload()
    })
  }

  return (
    <>
    <Navbar />
    <Stack direction='row' className='signup'>
    <div className='signup_form'>
      <Typography variant='h2' color='#1976d2'>Get Started</Typography>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
        {/* <Typography variant='h2' color='#1976d2'>Get Started</Typography> */}
        <TextField
          id="Name" name='name' label="Name" variant="outlined"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <TextField
          id="Email" name='email' label="Email" variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
      <TextField
        id="Password" name='password' label="Password" variant="outlined"
        type="password" onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <Button
        variant="contained" className='btn'
        onClick={handleSubmit}
      >
          SIGNUP
      </Button>
    </Box>
    </div>
    <SignInImg className='signup_img' />
    </Stack>
    </>
  );
}
