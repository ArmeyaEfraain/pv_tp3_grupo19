import React from 'react';
import { Container, Box, Typography, Card, CardContent, Stack } from '@mui/material'; // Componentes de Material UI 

const Dashboard = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}> {/* Centra y limita el ancho del contenido */}
            <Box sx={{ p: 4, textAlign: 'center', borderRadius: 3, mb: 4, background: 'linear-gradient(135deg, #e3f2fd, #f5fbff)', border: '1px solid #bbdefb' }}> {/* Contenedor flexible para el encabezado */}
                <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
                    ¡Bienvenido al Dashboard de Gestión de Proyectos!
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                    Aquí puedes visualizar el estado general de tus proyectos académicos y el rendimiento de tu equipo.
                </Typography>
            </Box>

            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                Métricas del Sistema
            </Typography>

            {/* Stack organiza las tarjetas con un diseño responsivo (columna en móviles, fila en pantallas más grandes) */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                
                {/* Tarjeta 1: Total de proyectos */}
                <Card variant="outlined" sx={{ flex: 1, borderRadius: 3, borderLeft: '6px solid #1976d2' }}> {/* Estilo optimizado de Card */}
                    <CardContent> {/* Contenido interno de la tarjeta */}
                        <Typography variant="subtitle1" color="text.secondary" fontWeight="500">
                            Total de Proyectos
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="primary" sx={{ mt: 1 }}>
                            6
                        </Typography>
                    </CardContent>
                </Card>

                {/* Tarjeta 2: Proyectos en curso */}
                <Card variant="outlined" sx={{ flex: 1, borderRadius: 3, borderLeft: '6px solid #2e7d32' }}>
                    <CardContent>
                        <Typography variant="subtitle1" color="text.secondary" fontWeight="500">
                            Proyectos en Curso
                        </Typography>
                        <Typography variant="h3" fontWeight="bold" color="success.main" sx={{ mt: 1 }}>
                            5
                        </Typography>
                    </CardContent>
                </Card>

            </Stack>
        </Container>
    );
};

export default Dashboard;