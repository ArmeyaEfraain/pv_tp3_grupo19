
const proyectoService = (() => {
  // arreglo de proyectos 
  let proyectos = [
    { id: 1, titulo: "Proyecto Alpha", categoria: "Desarrollo", estado: "Pendiente" },
    { id: 2, titulo: "Proyecto Beta", categoria: "Investigación", estado: "En progreso" },
    { id: 3, titulo: "Proyecto Gamma", categoria: "Diseño", estado: "Completado" },
    { id: 4, titulo: "Proyecto Delta", categoria: "Mantenimiento", estado: "Pendiente" },
    { id: 5, titulo: "Proyecto Epsilon", categoria: "Implementación", estado: "En revisión" }
  ];

  // funcion para obtener una copia del arreglo actual
  const obtenerProyectos = () => [...proyectos];

  // funcion para agregar un proyecto al arreglo
  const agregarProyecto = (nuevoProyecto) => {
    // genera id unico (maximo id + 1)
    const maxId = proyectos.length ? Math.max(...proyectos.map(p => p.id)) : 0;
    const proyectoConId = { id: maxId + 1, ...nuevoProyecto };
    proyectos.push(proyectoConId);
    return proyectoConId;
  };

  // funcion para eliminar un proyecto por id
  const eliminarProyecto = (id) => {
    const indice = proyectos.findIndex(p => p.id === id);
    if (indice !== -1) {
      proyectos.splice(indice, 1);
      return true;
    }
    return false;
  };

  // funcion para buscar proyectos por texto en el titulo
  const buscarProyecto = (texto) => {
    const term = texto.trim().toLowerCase();
    if (!term) return obtenerProyectos();
    return proyectos.filter(p => p.titulo.toLowerCase().includes(term));
  };

  // exporta lo necesario
  return {
    obtenerProyectos,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  };
})();

export default proyectoService;
