import React, { useState, useContext } from 'react';
import { Container, Paper, Box, Typography, Divider, List, ListItem, ListItemText, Avatar, Button, TextField, Stack } from '@mui/material';
import { UsuarioContext } from '../context/UsuarioContext';

const Perfil = () => {
    const { usuario, actualizarPerfil } = useContext(UsuarioContext);

    const [modoEdicion, setModoEdicion] = useState(false);

    const [datosFormulario, setDatosFormulario] = useState({
        nombre: usuario?.nombre || '',
        dni: usuario?.dni || '',
        rol: usuario?.rol || '',
        institucion: usuario?.institucion || ''
    });

    const handleChange = (e) => {
        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]: e.target.value
        });
    };

    const handleGuardar = (e) => {
        e.preventDefault();
        actualizarPerfil(datosFormulario);
        setModoEdicion(false);
    };

    if (!usuario) return null;

    return (
        <Container maxWidth="sm" sx={{ py: 5 }}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 4, backgroundColor: '#ffffff' }}>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 70, height: 70, fontSize: '1.8rem', fontWeight: 'bold', mb: 2 }}>
                        {usuario.nombre.charAt(0)}
                    </Avatar>
                    <Typography variant="h5" component="h1" fontWeight="bold" color="text.primary">
                        Perfil Académico
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Información del Integrante
                    </Typography>
                </Box>

                <Divider sx={{ mb: 3 }} />

                {modoEdicion ? (
                    
                    /* --- INTERFAZ 1: FORMULARIO DE EDICIÓN --- */
                    <Box component="form" onSubmit={handleGuardar}>
                        <Stack spacing={2} sx={{ mb: 3 }}>
                            <TextField 
                                label="Nombre Completo" 
                                name="nombre" 
                                value={datosFormulario.nombre} 
                                onChange={handleChange} 
                                fullWidth 
                                required
                            />
                            <TextField 
                                label="DNI" 
                                name="dni" 
                                value={datosFormulario.dni} 
                                onChange={handleChange} 
                                fullWidth 
                            />
                            <TextField 
                                label="Rol en el Proyecto" 
                                name="rol" 
                                value={datosFormulario.rol} 
                                onChange={handleChange} 
                                fullWidth 
                                required
                            />
                            <TextField 
                                label="Institución" 
                                name="institucion" 
                                value={datosFormulario.institucion} 
                                onChange={handleChange} 
                                fullWidth 
                            />
                        </Stack>
                        
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button variant="outlined" color="error" onClick={() => setModoEdicion(false)}>
                                Cancelar
                            </Button>
                            <Button type="submit" variant="contained" color="primary">
                                Guardar Cambios
                            </Button>
                        </Stack>
                    </Box>

                ) : (

                    /* --- INTERFAZ 2: LISTA DE DATOS --- */
                    <>
                        <List disablePadding>
                            <ListItem sx={{ px: 0, py: 1.5 }}>
                                <ListItemText 
                                    primary={<Typography fontWeight="bold" color="text.secondary" variant="caption">NOMBRE COMPLETO</Typography>}
                                    secondary={<Typography variant="body1" fontWeight="500" color="text.primary">{usuario.nombre}</Typography>}
                                />
                            </ListItem>
                            <Divider component="li" />

                            <ListItem sx={{ px: 0, py: 1.5 }}>
                                <ListItemText 
                                    primary={<Typography fontWeight="bold" color="text.secondary" variant="caption">DNI</Typography>}
                                    secondary={<Typography variant="body1" fontWeight="500" color="text.primary">{usuario.dni}</Typography>}
                                />
                            </ListItem>
                            <Divider component="li" />

                            <ListItem sx={{ px: 0, py: 1.5 }}>
                                <ListItemText 
                                    primary={<Typography fontWeight="bold" color="text.secondary" variant="caption">ROL EN EL PROYECTO</Typography>}
                                    secondary={<Typography variant="body1" fontWeight="500" color="text.primary">{usuario.rol}</Typography>}
                                />
                            </ListItem>
                            <Divider component="li" />

                            <ListItem sx={{ px: 0, py: 1.5 }}>
                                <ListItemText 
                                    primary={<Typography fontWeight="bold" color="text.secondary" variant="caption">INSTITUCIÓN</Typography>}
                                    secondary={<Typography variant="body1" fontWeight="500" color="text.primary">{usuario.institucion}</Typography>}
                                />
                            </ListItem>
                        </List>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <Button variant="contained" color="primary" onClick={() => setModoEdicion(true)}>
                                Editar Perfil
                            </Button>
                        </Box>
                    </>
                )}

            </Paper>
        </Container>
    );
};

export default Perfil;