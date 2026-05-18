import React, { useState } from 'react';
import ProyectoCard from './ProyectoCard';

const ListaProyectos = ({ proyectos, onEliminar, onVerDetalle, onBusqueda, onAgregar, busqueda }) => {
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: '',
    categoria: '',
    estado: 'Pendiente',
  });

  const { titulo, categoria, estado } = nuevoProyecto;

  const handleAgregar = () => {
    if (!titulo.trim() || !categoria.trim()) {
      alert('Completá el título y la categoría.');
      return;
    }
    onAgregar(nuevoProyecto);
    setNuevoProyecto({ titulo: '', categoria: '', estado: 'Pendiente' });
  };

  return (
    <div className="lista-container">
      <h2>Gestión de Proyectos</h2>

      {/* Buscador */}
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar proyecto..."
          value={busqueda}
          onChange={(e) => onBusqueda(e.target.value)}
        />
      </div>

      {/* Formulario agregar */}
      <div className="formulario-agregar">
        <h3>Agregar Proyecto</h3>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value })}
        />
        <select
          value={estado}
          onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, estado: e.target.value })}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="En progreso">En progreso</option>
          <option value="Completado">Completado</option>
          <option value="En revisión">En revisión</option>
        </select>
        <button onClick={handleAgregar}>Agregar</button>
      </div>
      {/* Lista */}
      <div className="proyectos-grid">
        {proyectos.length === 0 ? (
          <p>No se encontraron proyectos.</p>
        ) : (
          proyectos.map((proy) => (
            <ProyectoCard
              key={proy.id}
              proyecto={proy}
              onEliminar={onEliminar}
              onVerDetalle={onVerDetalle}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ListaProyectos;