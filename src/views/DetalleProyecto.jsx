import React from 'react';
import { useParams } from 'react-router-dom';
import proyectoService from '../services/proyectoService';

const DetalleProyecto = () => {
  const { id } = useParams();

  const proyecto = proyectoService.obtenerProyectoPorId(id);

  if (!proyecto) {
    return <h2>Proyecto no encontrado</h2>;
  }

  const { titulo, descripcionLarga, recursos, equipo } = proyecto;

  return (
    <div className="detalle-modal">
      <div className="detalle-contenido">
        <h2>{titulo}</h2>

        <div className="seccion">
          <h3>Descripción del Proyecto</h3>
          <p>{descripcionLarga}</p>
        </div>

        {recursos && (
          <div className="seccion">
            <h3>Recursos Disponibles</h3>
            <ul>
              <li>
                <a href={recursos.github} target="_blank" rel="noreferrer">
                  Repositorio GitHub
                </a>
              </li>
              <li>
                <a href={recursos.drive} target="_blank" rel="noreferrer">
                  Documentación en Drive
                </a>
              </li>
              <li>
                <a href={recursos.pdf} target="_blank" rel="noreferrer">
                  Manual de Usuario (PDF)
                </a>
              </li>
            </ul>
          </div>
        )}

        {equipo && (
          <div className="seccion">
            <h3>Equipo de Trabajo</h3>

            <div className="equipo-grid">
              {equipo.map((miembro, index) => (
                <p key={index}>
                  <strong>{miembro.nombre}</strong> - {miembro.rol}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetalleProyecto;