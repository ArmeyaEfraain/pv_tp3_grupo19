import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Stack, Button, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProyectoCard = ({ proyecto, onEliminar }) => {
    const { id, titulo, categoria, estado } = proyecto;

    const getColorPorEstado = (estado) => {
        if (estado === 'Completado') return 'success';
        if (estado === 'En progreso') return 'warning';
        return 'default'; 
    };

    return (
        // Uso de Card y sx para el contenedor principal
        <Card variant="outlined" sx={{ borderRadius: 3, borderLeft: '6px solid #1976d2', mb: 2, boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
            <CardContent>
                
                {/* Typography para los textos */}
                <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom align="left">
                    {titulo}
                </Typography>

                {/* Stack y Chip para organizar la información */}
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip label={categoria} size="small" variant="outlined" />
                    <Chip label={estado} size="small" color={getColorPorEstado(estado)} />
                </Stack>

                {/* Stack para los botones de acción */}
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                    <Button 
                        variant="outlined" 
                        color="error" 
                        size="small" 
                        startIcon={<DeleteIcon />}
                        onClick={() => onEliminar(id)}
                    >
                        Eliminar
                    </Button>
                    
                    <Button 
                        component={Link} 
                        to={`/proyectos/${id}`} 
                        variant="contained" 
                        size="small"
                        startIcon={<VisibilityIcon />}
                    >
                        Ver Detalle
                    </Button>
                </Stack>
                
            </CardContent>
        </Card>
    );
};

export default ProyectoCard;