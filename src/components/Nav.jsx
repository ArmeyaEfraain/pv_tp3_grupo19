import React from 'react';
import { Link } from 'react-router-dom'; 
import { Box, Button } from '@mui/material'; 

const Nav = () => {
    return (
        <Box 
            component="nav" 
            sx={{ 
                display: 'flex', 
                gap: 2, 
                justifyContent: 'flex-end', 
                padding: 2 
            }}
        >
            <Button component={Link} to="/dashboard" color="primary" sx={{ fontWeight: 'bold' }}>
                Dashboard
            </Button>
            
            <Button component={Link} to="/proyectos" color="primary" sx={{ fontWeight: 'bold' }}>
                Proyectos
            </Button>
            
            <Button component={Link} to="/perfil" color="primary" sx={{ fontWeight: 'bold' }}>
                Perfil
            </Button>
        </Box>
    );
};

export default Nav;