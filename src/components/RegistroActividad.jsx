import React from 'react';

const RegistroActividad = ({ fecha }) => {
  if (!fecha) return null;

  const fechaObj = new Date(fecha);

  // Extraemos y formateamos cada elemento asegurando dos dígitos (ej. "05" en vez de "5")
  const dia = String(fechaObj.getDate()).padStart(2, '0');
  const mes = String(fechaObj.getMonth() + 1).padStart(2, '0'); 
  const anio = fechaObj.getFullYear();
  
  const horas = String(fechaObj.getHours()).padStart(2, '0');
  const minutos = String(fechaObj.getMinutes()).padStart(2, '0');

  const mensajeFormateado = `Última actualización de la lista: ${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;

  return (
    // Agregamos una clase de CSS específica para que luego aplicarle estilos
    <div className="registro-actividad-container">
      <p className="registro-actividad-texto">
        {mensajeFormateado}
      </p>
    </div>
  );
};

export default RegistroActividad;