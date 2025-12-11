import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={()=>setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <h3 style={{marginLeft:10}}>My App</h3>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={()=>setOpen(false)}>
        <List sx={{width:250}}>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ListItem><Link to="/login">Login</Link></ListItem>
          <ListItem><Link to="/forms">Forms</Link></ListItem>
          <ListItem><Link to="/management">Management</Link></ListItem>
          <ListItem><Link to="/help">Help</Link></ListItem>
        </List>
      </Drawer>
    </>
  );
}
