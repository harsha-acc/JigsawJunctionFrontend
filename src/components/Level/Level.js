import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Stack } from '@mui/material'
import { Button, CardActionArea, Modal, Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Level.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};


export default function Level({title, description, source, rules, hint}) {
  const navigate = useNavigate()
  if(! localStorage.getItem('user'))navigate('/login')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card className='card'>
      <CardActionArea className='card-body'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Button onClick={handleOpen}>PLAY</Button>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                RULES
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {rules}
              </Typography>
              <Stack direction='row'>
                <Link to={source}><span style={{color : '#1976d2'}}><Button>PLAY</Button></span></Link>
              </Stack>
            </Box>
          </Modal>


        </CardContent>
      </CardActionArea>
    </Card>
  );
}
