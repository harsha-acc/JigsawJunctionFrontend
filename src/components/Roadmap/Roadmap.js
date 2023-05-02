import * as React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../ProfileNavbar/ProfileNavbar';
import './Roadmap.css'
import Level from '../Level/Level';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

const steps = [
  {
    title: "Word Hunt",
    description: "Solve the crossword and test your vocabulary skills",
    source: "/wordhunt" ,
    rules: "Solve the crossword by using given clues. \n You can also use hints provided in this puzzle. \n 100 points will be awarded for successful completion of puzzle.",
    hint: "https://www.dictionary.com/browse/synonym"
  },
  {
    title: "Logical",
    description: "Pick the odd one out and test your visibility skills",
    source: "/logical",
    rules:"Pick the odd one out. \n The game starts with 2X2 grid and increases gradually. \n Each level will reward you 1 point and the game ends once you make wrong pick.",
    hint: "https://www.cuemath.com/learn/maths-olympiad-odd-one-out/"
  }
];

export default function Roadmap() {
  const navigate = useNavigate()
  if(! localStorage.getItem('user'))navigate('/login')

  return (
  <>
    <Navbar />
    <div style={{ margin: 34 }}>
      <Typography variant='h2'>Hey <span style={{ color: '#1976d2' }}>{localStorage.getItem('user')}</span>!</Typography><br />
      <Typography variant='h5' color='#b1b1b1'>Solve these puzzles and stand out from the rest by enhancing your <span style={{ color: '#1976d2' }}>soft skills</span>.</Typography>
    </div>
    <Box sx={{ width: '100%' }} className='box'>
      <Stack direction="row">
        {steps.map((label, index) => (
          <Level title={label.title} description={label.description} source={label.source} rules={label.rules} hint={label.hint}/>
        ))}
      </Stack>
    </Box>
    </>
  );
}
