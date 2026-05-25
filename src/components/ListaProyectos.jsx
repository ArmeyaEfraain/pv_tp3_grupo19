import React, { useState } from 'react';
import ProyectoCard from './ProyectoCard';
import FormularioProyecto from './FormularioProyecto';

const ListaProyectos = ({ proyectos, onEliminar, onAgregar, onVerDetalle, busqueda, onBusqueda}) => {
  return (
    <main>
      <FormularioProyecto onAgregar={onAgregar} />
      
      <div className="buscador-wrapper">
        <input
          type="text"
          placeholder="Buscar proyecto por título..."
          value={busqueda}
          onChange={(e) => onBusqueda(e.target.value)}
          className="buscador-input"
        />
      </div>

      <div className="lista-container">
        {proyectos.map((proy) => (
          <ProyectoCard 
            key={proy.id} 
            proyecto={proy} 
            onEliminar={onEliminar}
            onVerDetalle={onVerDetalle} 
          />
        ))}
      </div>
    </main>
  );
};

export default ListaProyectos;