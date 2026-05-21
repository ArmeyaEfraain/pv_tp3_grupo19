import React from 'react';
import ProyectoCard from './ProyectoCard';
import FormularioProyecto from './FormularioProyecto';

const ListaProyectos = ({ proyectos, onEliminar, onAgregar }) => {
  return (
    <main>
      <FormularioProyecto onAgregar={onAgregar} />

      <div className="lista-container">
        {proyectos.map((proy) => (
          <ProyectoCard 
            key={proy.id} 
            proyecto={proy} 
            onEliminar={onEliminar} 
          />
        ))}
      </div>
    </main>
  );
};

export default ListaProyectos;