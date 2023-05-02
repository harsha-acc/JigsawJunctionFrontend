import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

export default function Pic() {
  const navigate = useNavigate()
  if(! localStorage.getItem('user'))navigate('/login')
  const [anchorEl, setAnchorEl] = React.useState(null);
  let avatar = localStorage.getItem('user')
  if(! avatar) avatar = '❌'
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div>
      <Button onClick={handleClick}>
        <Avatar>{avatar[0]}</Avatar>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* <MenuItem>
            <Link to='/dashboard' style={{textDecoration: 'none', color: '#000'}}>
                Dashboard
            </Link>
        </MenuItem> */}
        <MenuItem onClick={handleLogout}>
            Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
