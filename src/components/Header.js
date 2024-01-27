// Header.jsx
import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AppBar, Tab, Tabs, Typography} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {useSelector} from "react-redux";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const updatedUserProfile = useSelector((state) => state.userCoins);

    const handleChange = (event, newValue) => {
        navigate(newValue);
    };

    return (
        <AppBar position="static" style={{background: 'white', color: "#000"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        XYZ
                    </Typography>

                    <Tabs value={location.pathname} onChange={handleChange}
                          sx={{
                              mr: 2,
                              display: {xs: 'none', md: 'flex'},
                              fontWeight: 700,
                              color: 'inherit',
                              textDecoration: 'none',
                              letterSpacing: '.3rem'
                          }}>
                        <Tab
                            label="Home"
                            value="/"
                            component={Link}
                            to="/home"
                            style={{
                                letterSpacing: '.3rem',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: location.pathname === '/' ? 'blue' : 'inherit'
                            }}
                        />
                        <Tab
                            label="Crypto"
                            value="/crypto"
                            component={Link}
                            to="/crypto"
                            style={{
                                letterSpacing: '.3rem',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: location.pathname === '/crypto' ? 'black' : 'inherit'
                            }}
                        />
                    </Tabs>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
