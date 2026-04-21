import React, { useState } from 'react'
// import '../../Css/header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Avatar, Box, Button, Divider, IconButton, InputBase, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Login, Logout, PersonAdd, Settings } from '@mui/icons-material';
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../Redux/Slice/auth.slice';
import { useDispatch, useSelector } from 'react-redux';

const routeMap = {
  Men: {
    "T-Shirt": "/men/tshirt"
  }
}


function Header() {

  const [showBanner, setShowBanner] = useState(true);
  const navigate = useNavigate();

  const auth = useSelector(state => state.auth);
  // console.log(auth.user);


  const dispatch = useDispatch();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const subCategories = {
    Men: ["T-Shirt", "Shirt", "Jeans"],
    Women: ["Dress", "Top", "Kurti", "Sari", "Western", "Jwelary"],
    Children: ["Kids Wear", "Shorts", "Toys"]
  }

  const [subMenu, setSubMenu] = useState(null);
  const [subAnchor, setSubAnchor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleOpen = (event) => {
    setSubMenu(event.currentTarget)
  }

  const handleClosemenu = () => {
    setSubMenu(null);
    setSubAnchor(null)
  }

  const handleSubCategoryClick = (category, subcategory) => {
    const path = routeMap[category][subcategory];

    navigate(path);

    setSubAnchor(null);
    setSubMenu(null);
  };



  return (
    <div className="container header">
      <div className="mainhead ">
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
              <Typography variant='h2' className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>SHOP.CO</Typography>

              <Button style={{ color: 'black', textTransform: "capitalize" }} className='headernav' onClick={handleOpen}>Shop <FaAngleDown className='shop'  /></Button>

              <Menu anchorEl={subMenu} open={Boolean(subMenu)} onClose={handleClosemenu}>
                <MenuItem
                  onMouseEnter={(e) => {
                    setSubAnchor(e.currentTarget);
                    setSelectedCategory("Men");
                  }}
                >
                  Men
                </MenuItem>

                <MenuItem
                  onMouseEnter={(e) => {
                    setSubAnchor(e.currentTarget);
                    setSelectedCategory("Women");
                  }}
                >
                  Women
                </MenuItem>

                <MenuItem
                  onMouseEnter={(e) => {
                    setSubAnchor(e.currentTarget);
                    setSelectedCategory("Children");
                  }}
                >
                  Children
                </MenuItem>

                <Menu
                  anchorEl={subAnchor}
                  open={Boolean(subAnchor)}
                  onClose={() => setSubAnchor(null)}
                  anchorOrigin={{ horizontal: "right", vertical: "top" }}
                >
                  {subCategories[selectedCategory]?.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleSubCategoryClick(selectedCategory, item)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </Menu>
              {/* Main Menu */}

              <Button style={{ color: 'black', textTransform: "capitalize" }} className='headernav' >On Sale</Button>
              <Button style={{ color: 'black', textTransform: "capitalize" }} className='headernav' >New Arrivals</Button>
              <Button style={{ color: 'black', textTransform: "capitalize" }} className='headernav' >Brands</Button>
            </Box>

            <Box className="search">
              <SearchIcon className="searchIcon" />
              <InputBase
                placeholder="Search for products..."
                className="searchInput"
              />
            </Box>

            <Box className="rightSection">
              <IconButton className='icon' onClick={() => navigate("/cart")}>
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                className='icon'
              >
                <AccountCircleOutlinedIcon  />

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
              {
                auth.user ?
                  <MenuItem onClick={() => dispatch(logoutUser(auth.user._id))} >
                    <ListItemIcon >
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Log Out
                  </MenuItem> :
                  <MenuItem onClick={() => navigate("/auth")} >
                    <ListItemIcon >
                      <Login fontSize="small" />
                    </ListItemIcon>
                    Login
                  </MenuItem>
              }
            </Menu>
          </Toolbar>
        </AppBar>
        
      </div>
      <Divider sx={{ borderColor: "#c5c5c5"  }} />
    </div>
  )
}

export default Header;
