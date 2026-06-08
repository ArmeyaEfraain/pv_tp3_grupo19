import React, { useState } from 'react';
import { Paper, Stack, TextField, Button, MenuItem, Typography, Box } from '@mui/material';

const FormularioProyecto = ({ onAgregar }) => {
    
    const [nuevoProyecto, setNuevoProyecto] = useState({
        titulo: '',
        categoria: '',
        estado: 'Pendiente'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoProyecto({ ...nuevoProyecto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!nuevoProyecto.titulo.trim()) {
            alert("Por favor, escribe un título");
            return;
        }

        onAgregar({
            ...nuevoProyecto,
            id: Date.now() 
        });

        setNuevoProyecto({
            titulo: '',
            categoria: '',
            estado: 'Pendiente'
        });
    };

    return (
        <Paper 
            component="form" 
            elevation={0} 
            onSubmit={handleSubmit}
            sx={{ 
                p: 3, 
                borderRadius: 3, 
                backgroundColor: '#fff8e1', 
                border: '1px solid #ffe082',
                mb: 4
            }}
        >
            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                    Crear Nuevo Proyecto
                </Typography>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                
                <TextField 
                    fullWidth 
                    label="Nombre del Proyecto" 
                    name="titulo"
                    variant="outlined" 
                    value={nuevoProyecto.titulo}
                    onChange={handleChange}
                />
                
                <TextField 
                    fullWidth 
                    label="Categoría (Ej: Web, Mobile)" 
                    name="categoria"
                    variant="outlined" 
                    value={nuevoProyecto.categoria}
                    onChange={handleChange}
                />

                <TextField
                    select
                    label="Estado"
                    name="estado"
                    value={nuevoProyecto.estado}
                    onChange={handleChange}
                    sx={{ minWidth: '150px' }}
                >
                    <MenuItem value="Pendiente">Pendiente</MenuItem>
                    <MenuItem value="En progreso">En progreso</MenuItem>
                    <MenuItem value="Completado">Completado</MenuItem>
                </TextField>

                <Button 
                    type="submit" 
                    variant="contained" 
                    color="warning" 
                    size="large"
                    sx={{ minWidth: '220px', fontWeight: 'bold' }}
                >
                    Guardar Proyecto
                </Button>

            </Stack>
        </Paper>
    );
};

export default FormularioProyecto;