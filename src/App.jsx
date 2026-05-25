import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';
import DetalleProyecto from './components/DetalleProyecto';
import proyectoService from './services/proyectoService';
import RegistroActividad from './components/RegistroActividad';
import './css/styles.css';

function App() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);

  const primerRender = useRef(true);

  useEffect(() => {
    setProyectos(proyectoService.obtenerProyectos());
  }, []);

  useEffect(() => {
    if (primerRender.current) {
      primerRender.current = false;
      return;
    }

    setUltimaActualizacion(new Date());
  }, [proyectos]);

  const handleVerDetalle = (proyecto) => setProyectoSeleccionado(proyecto);
  const handleCerrarDetalle = () => setProyectoSeleccionado(null);

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.buscarProyecto(busqueda));
  };

  const handleBusqueda = (texto) => {
    setBusqueda(texto);
  };

  const handleAgregar = (nuevo) => {
    proyectoService.agregarProyecto(nuevo);
    setProyectos(proyectoService.obtenerProyectos());
  };
  
  const proyectosFiltrados = proyectos.filter((proy) =>
    proy.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <Header />
      <Nav />
      <main id="center">
        <ListaProyectos
          proyectos={proyectosFiltrados}
          onEliminar={handleEliminar}
          onBusqueda={handleBusqueda}
          onAgregar={handleAgregar}
          busqueda={busqueda}
          onVerDetalle={handleVerDetalle}
        />

        <RegistroActividad fecha={ultimaActualizacion} />

        {proyectoSeleccionado && (
          <DetalleProyecto
            proyecto={proyectoSeleccionado}
            onCerrar={handleCerrarDetalle}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;