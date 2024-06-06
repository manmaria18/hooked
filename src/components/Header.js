import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, Menu, MenuItem} from "@mui/material";
//import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import WebhookTwoToneIcon from '@mui/icons-material/WebhookTwoTone';

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 , background: "#39A7FF"}}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 0, fontFamily:"Copperplate Gothic Light", fontSize:30}}>
                        <WebhookTwoToneIcon fontSize="large"/>
                        Hooks.com
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem component={Link} href="/" onClick={handleClose}>
                            Home
                        </MenuItem>
                        <MenuItem component={Link} href="/UsualHooks" onClick={handleClose}>
                            Usual Hooks
                        </MenuItem>
                        <MenuItem component={Link} href="/SpecialHooks" onClick={handleClose}>
                            Special Hooks
                        </MenuItem>

                    </Menu>


                </Toolbar>
            </AppBar>
        </Box>
    );
}