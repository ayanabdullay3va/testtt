
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';
function Navbar() {
    return (
        <>   <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Link to="/Home"> <Button color="inherit">Home</Button></Link>
                    <Link to="/About"><Button color="inherit">About</Button> </Link>

                    <Link to="/contact"><Button color="inherit">Contact</Button></Link>

                    <Link to="/Addcetogory"><Button color="inherit">Addcetogory</Button></Link>

                    <Outlet />
                </Toolbar>
            </AppBar>
        </Box></>
    )
}

export default Navbar