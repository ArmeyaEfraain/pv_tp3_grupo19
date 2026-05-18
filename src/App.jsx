import { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';
import DetalleProyecto from './components/DetalleProyecto'; // Importación nueva
import { proyectoService } from './services/proyectoService';
import './css/styles.css';

function App() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null); // Estado nuevo

  useEffect(() => {
    setProyectos(proyectoService.obtenerProyectos());
  }, []);

  const handleVerDetalle = (proyecto) => setProyectoSeleccionado(proyecto);
  const handleCerrarDetalle = () => setProyectoSeleccionado(null);

  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.buscarProyecto(busqueda));
  };

  const handleBusqueda = (texto) => {
    setBusqueda(texto);
    setProyectos(proyectoService.buscarProyecto(texto));
  };

  const handleAgregar = (nuevo) => {
    proyectoService.agregarProyecto(nuevo);
    setProyectos(proyectoService.obtenerProyectos());
  };

  return (
    <>
      <Header />
      <Nav />
      <main id="center">
        <ListaProyectos
          proyectos={proyectos}
          onEliminar={handleEliminar}
          onVerDetalle={handleVerDetalle} // Prop nueva
          onBusqueda={handleBusqueda}
          onAgregar={handleAgregar}
          busqueda={busqueda}
        />
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