import React, { useState } from 'react'
// import '../../Css/header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';



function Header() {

  const [showBanner, setShowBanner] = useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

              <Box className="menu">
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
              </Box>
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
              <IconButton>
                <AccountCircleOutlinedIcon className='icon' />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default Header
