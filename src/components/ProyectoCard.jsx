import React from 'react';

const ProyectoCard = ({ proyecto, onEliminar, onVerDetalle }) => {
  
  const { id, titulo, categoria, estado } = proyecto;

  return (
    <div className="project-card">
      <h3>{titulo}</h3>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Estado:</strong> {estado}</p>
      
      <div className="acciones">
        <button onClick={() => onEliminar(id)}>Eliminar</button>
        <button onClick={() => onVerDetalle(proyecto)}>Ver Detalle</button>
      </div>
    </div>
  );
};

export default ProyectoCard;