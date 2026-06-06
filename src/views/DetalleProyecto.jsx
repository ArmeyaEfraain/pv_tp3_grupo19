import React from 'react';

const DetalleProyecto = ({ proyecto, onCerrar }) => {
  if (!proyecto) return null;

  const { titulo, descripcionLarga, recursos, equipo } = proyecto;

  return (
    <div className="detalle-modal">
      <div className="detalle-contenido">
        <button className="btn-cerrar" onClick={onCerrar}>X</button>
        <h2>{titulo}</h2>
        
        <div className="seccion">
          <h3>Descripción del Proyecto</h3>
          <p>{descripcionLarga}</p>
        </div>

        <div className="seccion">
          <h3>Recursos Disponibles</h3>
          <ul>
            <li><a href={recursos.github} target="_blank">Repositorio GitHub</a></li>
            <li><a href={recursos.drive} target="_blank">Documentación en Drive</a></li>
            <li><a href={recursos.pdf} target="_blank">Manual de Usuario (PDF)</a></li>
          </ul>
        </div>

        <div className="seccion">
          <h3>Equipo de Trabajo</h3>
          <div className="equipo-grid">
            {equipo.map((miembro, index) => (
              <p key={index}><strong>{miembro.nombre}</strong> - {miembro.rol}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProyecto;