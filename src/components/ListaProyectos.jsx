import React, { useState } from 'react';
import { proyectoService } from '../services/proyectoService';

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos()); // Actualizamos el estado
  };

  const handleBuscar = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
    const filtrados = proyectoService.buscarProyecto(texto);
    setProyectos(filtrados);
  };

  return (
    <main>
      <h2>Gestión de Proyectos</h2>
      
      <input 
        type="text" 
        placeholder="Buscar proyecto..." 
        value={busqueda}
        onChange={handleBuscar}
      />

      <div className="lista-container">
        {proyectos.map((proy) => (
          <div key={proy.id} className="card">
            <h3>{proy.titulo}</h3>
            <p><strong>Categoría:</strong> {proy.categoria}</p>
            <p><strong>Estado:</strong> {proy.estado}</p>
            
            <button onClick={() => handleEliminar(proy.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ListaProyectos;