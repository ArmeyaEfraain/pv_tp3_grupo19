import React from 'react';
import ProyectoCard from './ProyectoCard';

const ListaProyectos = ({ proyectos, onEliminar }) => {
  return (
    <div className="lista-container">
      <h2>Gestión de Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.length === 0 ? (
          <p>No hay proyectos disponibles.</p>
        ) : (
          proyectos.map((proy) => (
            <ProyectoCard 
              key={proy.id} 
              proyecto={proy} 
              onEliminar={onEliminar} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ListaProyectos;