import React, { useState } from 'react'
// import '../../Css/header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Button, Divider, IconButton, InputBase, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Login, Logout, PersonAdd, Settings } from '@mui/icons-material';



function Header() {

  const [showBanner, setShowBanner] = useState(true);

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNav = (path) => {
    navigate(path);
    handleClose();
  };

  const [submenu, setSubmenu] = useState(null);
  const [subAnchor, setSubAnchor] = useState(null);

  const handleOpen = (e) => setSubmenu(e.currentTarget);
  const handleClosemenu = () => {
    setSubmenu(null);
    setSubAnchor(null);
  };

  return (
    <div className="container">
      <div className="mainhead">
        {showBanner && (
          <Box className="topBar">
            <Typography className="topText">
              Sign up and get 20% off to your first order.
              <span className="link"> Sign Up Now</span>
            </Typography>

            <IconButton
              className="closeBtn"
              onClick={() => setShowBanner(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        )}

        <AppBar position="static" className="navbar">
          <Toolbar className="toolbar">

            <Box className="leftSection">
              <Typography variant='h2' className="logo">SHOP.CO</Typography>

              {/* <Box className="menu">
                <span onClick={handleClick}>
                  Shop
                  <KeyboardArrowDownIcon fontSize="small" />
                </span>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      'aria-labelledby': 'basic-button',
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>Men</MenuItem>

                  <MenuItem onClick={handleClose}>Women</MenuItem>
                  <MenuItem onClick={handleClose}>Children</MenuItem>
                </Menu>
                <span>On Sale</span>
                <span>New Arrivals</span>
                <span>Brands</span>
              </Box> */}

              <Button style={{ color: 'black' }} onClick={handleOpen}>Shop</Button>

              {/* Main Menu */}
              <Menu anchorEl={submenu} open={Boolean(submenu)} onClose={handleClosemenu}>

                {/* Normal Item */}
                <MenuItem onClick={(e) => setSubAnchor(e.currentTarget)}>Men</MenuItem>

                {/* Sub Menu */}
                <MenuItem
                  onMouseEnter={(e) => setSubAnchor(e.currentTarget)}
                >
                  Women
                </MenuItem>
                <MenuItem
                  onMouseEnter={(e) => setSubAnchor(e.currentTarget)}
                >
                  Children
                </MenuItem>

                {/* Sub Menu List */}
                <Menu
                  anchorEl={subAnchor}
                  open={Boolean(subAnchor)}
                  onClose={() => setSubAnchor(null)}
                  anchorOrigin={{ horizontal: "right", vertical: "top" }}
                >
                  <MenuItem>T-Shirt</MenuItem>
                  <MenuItem>Jeans</MenuItem>
                  <MenuItem>Short</MenuItem>
                  <MenuItem>Shirt</MenuItem>
                </Menu>

              </Menu>
              <Button style={{ color: 'black' , margin: '0px'}} >On Sale</Button>
              <Button style={{ color: 'black' }} >New Arrivals</Button>
              <Button style={{ color: 'black' }} >Brands</Button>
            </Box>

            <Box className="search">
              <SearchIcon className="searchIcon" />
              <InputBase
                placeholder="Search for products..."
                className="searchInput"
              />
            </Box>

            <Box className="rightSection">
              <IconButton className='icon'>
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <AccountCircleOutlinedIcon className='icon' />

              </IconButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={() => handleNav("/product")} >
                <ListItemIcon >
                  <Login fontSize="small" />
                </ListItemIcon>
                Login
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default Header;
