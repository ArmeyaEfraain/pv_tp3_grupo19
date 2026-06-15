import React, { useContext } from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';
import { UsuarioContext } from '../context/UsuarioContext';

const Header = () => {
    const { usuario } = useContext(UsuarioContext);

    return (
        <Box
            component="header"
            sx={{
                p: 3,
                mb: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 3,
                background: 'linear-gradient(135deg, #e3f2fd, #f5fbff)',
                border: '1px solid #bbdefb'
            }}
        >
            <Box>
                <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
                    Gestión Educativa
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Panel de Administración
                </Typography>
            </Box>

            {usuario && (
                <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                            {usuario.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {usuario.rol}
                        </Typography>
                    </Box>
                    
                    <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48, fontWeight: 'bold' }}>
                        {usuario.nombre.charAt(0)}
                    </Avatar>
                </Stack>
            )}
        </Box>
    );
};

export default Header;