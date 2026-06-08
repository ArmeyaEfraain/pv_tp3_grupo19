import React from 'react';
import { Alert, Box } from '@mui/material'; // Importamos los componentes de MUI

const RegistroActividad = ({ fecha }) => {
    if (!fecha) return null;

  const fechaObj = new Date(fecha);

  const dia = String(fechaObj.getDate()).padStart(2, '0');
  const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
  const anio = fechaObj.getFullYear();

  const horas = String(fechaObj.getHours()).padStart(2, '0');
  const minutos = String(fechaObj.getMinutes()).padStart(2, '0');

    const mensajeFormateado = `Última actualización de la lista: ${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
            
            <Alert 
                severity="info" 
                variant="standard" 
                sx={{ 
                    borderRadius: 2, 
                    fontWeight: '500',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
            >
                {mensajeFormateado}
            </Alert>
            
        </Box>
    );
};

export default RegistroActividad;