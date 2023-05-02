import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Pic from './Pic';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function ProfileNavbar() {
  const navigate = useNavigate()
  if(! localStorage.getItem('user'))navigate('/login')
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            JIGSAW JUNCTION
          </Typography>
          <Link to="/roadmap"><span style={{color : '#fff'}}><Button color='inherit'>puzzles</Button></span></Link>
          <Link to="/leaderboard"><span style={{color : '#fff'}}><Button color='inherit'>leaderboard</Button></span></Link>
          <Pic />
         </Toolbar>
      </AppBar>
    </Box>
  );
}
