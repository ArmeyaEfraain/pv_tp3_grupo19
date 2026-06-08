import React from 'react';
import { Container, Grid, Typography, Box, TextField } from '@mui/material';
import ProyectoCard from '../components/ProyectoCard';
import FormularioProyecto from '../components/FormularioProyecto';

const ListaProyectos = ({ proyectos, onEliminar, onAgregar, busqueda, onBusqueda }) => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            
            <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <FormularioProyecto onAgregar={onAgregar} />

                {/* Reemplazamos el <input> tradicional por un <TextField> de MUI */}
                <TextField 
                    fullWidth
                    label="Buscar proyecto por título..."
                    variant="outlined"
                    value={busqueda}
                    onChange={(e) => onBusqueda(e.target.value)}
                />
            </Box>

            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                Proyectos Registrados
            </Typography>

            <Grid container spacing={3}>
                {proyectos.map((proy) => (
                    <Grid item xs={12} sm={6} md={4} key={proy.id}>
                        <ProyectoCard 
                            proyecto={proy} 
                            onEliminar={onEliminar} 
                        />
                    </Grid>
                ))}
            </Grid>
            
        </Container>
    );
};

export default ListaProyectos;