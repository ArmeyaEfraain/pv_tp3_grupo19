
export const proyectoService = (() => {
  // arreglo de proyectos 
  let proyectos = [
    { id: 1, titulo: "Proyecto Alpha",
      categoria: "Desarrollo",
      estado: "Pendiente",
      descripcionLarga: "Este proyecto busca revolucionar la gestión de tareas mediante una interfaz intuitiva. Se enfoca en la usabilidad y la velocidad de respuesta en dispositivos móviles.\n\nLa segunda fase contempla la integración con calendarios externos y un sistema de notificaciones inteligentes.",
      recursos: { github: "https://github.com", drive: "https://drive.google.com", pdf: "#" },
      equipo: [
      { nombre: "Elias", rol: "Frontend" },
      { nombre: "Agustin", rol: "Backend" }
      ]
    },
    { id: 2, titulo: "Proyecto Beta", categoria: "Investigación", estado: "En progreso" },
    { id: 3, titulo: "Proyecto Gamma", categoria: "Diseño", estado: "Completado" },
    { id: 4, titulo: "Proyecto Delta", categoria: "Mantenimiento", estado: "Pendiente" },
    { id: 5, titulo: "Proyecto Epsilon", categoria: "Implementación", estado: "En revisión" }
  ];

  // funcion para obtener una copia del arreglo actual
  const obtenerProyectos = () => [...proyectos];
  
  const obtenerProyectoPorId = (id) => proyectos.find(p => p.id === id);
  
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
    obtenerProyectoPorId,
    agregarProyecto,
    eliminarProyecto,
    buscarProyecto
  };
})();

export default proyectoService;
