import React, { useState } from 'react';

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

    onAgregar(nuevoProyecto);

    setNuevoProyecto({
      titulo: '',
      categoria: '',
      estado: 'Pendiente'
    });
  };

  return (
    <section className="formulario-seccion">
      <h3>Crear Nuevo Proyecto</h3>
      <form onSubmit={handleSubmit} className="formulario-proyecto">
        <input
          type="text"
          name="titulo"
          placeholder="Nombre del Proyecto"
          value={nuevoProyecto.titulo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoría (Ej: Web, Mobile)"
          value={nuevoProyecto.categoria}
          onChange={handleChange}
        />
        <select 
          name="estado" 
          value={nuevoProyecto.estado} 
          onChange={handleChange}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="En Progreso">En Progreso</option>
          <option value="Completado">Completado</option>
        </select>
        <button type="submit">Guardar Proyecto</button>
      </form>
    </section>
  );
};

export default FormularioProyecto;