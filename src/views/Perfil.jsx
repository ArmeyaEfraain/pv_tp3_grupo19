import React from 'react';
import { Container, Paper, Box, Typography, Divider, List, ListItem, ListItemText, Avatar } from '@mui/material'; // Componentes oficiales de MUI

const Perfil = () => {
    return (
        // Container centra el contenido y limita su ancho máximo en pantallas grandes
        <Container maxWidth="sm" sx={{ py: 5 }}> 
            
            {/* Paper crea la superficie blanca elegante con bordes redondeados y sombra */}
            <Paper elevation={4} sx={{ p: 4, borderRadius: 4, backgroundColor: '#ffffff' }}>
                
                {/* Contenedor superior para la presentación visual del perfil */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                    {/* Generamos un Avatar circular elegante con las iniciales del estudiante */}
                    <Avatar sx={{ bgcolor: 'primary.main', width: 70, height: 70, fontSize: '1.8rem', fontWeight: 'bold', mb: 2 }}>
                        E
                    </Avatar>
                    <Typography variant="h5" component="h1" fontWeight="bold" color="text.primary">
                        Perfil Académico
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Información del Integrante - Trabajo Práctico N° 3
                    </Typography>
                </Box>

                <Divider sx={{ mb: 2 }} /> {/* Línea divisoria decorativa de MUI */}

                {/* Lista organizada para mostrar los datos requeridos por la cátedra  */}
                <List disablePadding>
                    <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemText 
                            primary={<Typography fontWeight="bold" color="text.secondary" variant="caption">NOMBRE COMPLETO</Typography>}
                            secondary={<Typography variant="body1" fontWeight="500" color="text.primary">Elías Alberto Mamani</Typography>}
                        />
                    </ListItem>
                    <Divider component="li" />

                    <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemText 
                            primary={<Typography fontWeight="bold" color="text.secondary" variant="caption">ROL EN EL PROYECTO</Typography>}
                            secondary={<Typography variant="body1" fontWeight="500" color="text.primary">Coordinador de UI, Layout y Documentación</Typography>}
                        />
                    </ListItem>
                    <Divider component="li" />

                    <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemText 
                            primary={<Typography fontWeight="bold" color="text.secondary" variant="caption">CARRERA</Typography>}
                            secondary={<Typography variant="body1" fontWeight="500" color="text.primary">Analista Programador Universitario</Typography>}
                        />
                    </ListItem>
                    <Divider component="li" />

                    <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemText 
                            primary={<Typography fontWeight="bold" color="text.secondary" variant="caption">INSTITUCIÓN</Typography>}
                            secondary={<Typography variant="body1" fontWeight="500" color="text.primary">Facultad de Ingeniería - Universidad Nacional de Jujuy</Typography>}
                        />
                    </ListItem>
                    <Divider component="li" />

                    <ListItem sx={{ px: 0, py: 1.5 }}>
                        <ListItemText 
                            primary={<Typography fontWeight="bold" color="text.secondary" variant="caption">EQUIPO DE TRABAJO</Typography>}
                            secondary={<Typography variant="body1" fontWeight="500" color="text.primary">Grupo 19</Typography>}
                        />
                    </ListItem>
                </List>

            </Paper>
        </Container>
    );
};

export default Perfil;