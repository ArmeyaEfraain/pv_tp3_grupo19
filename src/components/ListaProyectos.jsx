import { useState } from "react";
import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [busqueda, setBusqueda] = useState("");
  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: "",
    categoria: "",
    estado: "Pendiente",
  });

  const handleBusqueda = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
    setProyectos(proyectoService.buscarProyecto(texto));
  };

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.buscarProyecto(busqueda));
  };

  const handleAgregar = () => {
    if (!nuevoProyecto.titulo.trim() || !nuevoProyecto.categoria.trim()) {
      alert("Completá el título y la categoría.");
      return;
    }
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
    setBusqueda("");
    setNuevoProyecto({ titulo: "", categoria: "", estado: "Pendiente" });
  };

  return (
    <section className="lista-proyectos">
      <h2>Proyectos</h2>

      {/* Buscador */}
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar proyecto..."
          value={busqueda}
          onChange={handleBusqueda}
        />
      </div>

      {/* Formulario agregar */}
      <div className="formulario-agregar">
        <h3>Agregar Proyecto</h3>
        <input
          type="text"
          placeholder="Título"
          value={nuevoProyecto.titulo}
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Categoría"
          value={nuevoProyecto.categoria}
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value })
          }
        />
        <select
          value={nuevoProyecto.estado}
          onChange={(e) =>
            setNuevoProyecto({ ...nuevoProyecto, estado: e.target.value })
          }
        >
          <option value="Pendiente">Pendiente</option>
          <option value="En progreso">En progreso</option>
          <option value="Completado">Completado</option>
          <option value="En revisión">En revisión</option>
        </select>
        <button onClick={handleAgregar}>Agregar</button>
      </div>

      {/* Lista */}
      {proyectos.length === 0 ? (
        <p className="sin-resultados">No se encontraron proyectos.</p>
      ) : (
        proyectos.map((proyecto) => (
          <div key={proyecto.id} className="card-proyecto">
            <h4>{proyecto.titulo}</h4>
            <p>Categoría: {proyecto.categoria}</p>
            <p>Estado: {proyecto.estado}</p>
            <button
              className="btn-eliminar"
              onClick={() => handleEliminar(proyecto.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </section>
  );
};

export default ListaProyectos;