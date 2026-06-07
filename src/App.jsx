import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import RegistroActividad from './components/RegistroActividad';

import ListaProyectos from './views/ListaProyectos';
import DetalleProyecto from './views/DetalleProyecto';
import Perfil from './views/Perfil';

import proyectoService from './services/proyectoService';
import './css/styles.css';

function App() {
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
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
    <Router>
      <Header />
      <Nav />
      
      <main id="center">
        <Routes>
          <Route 
            path="/" 
            element={
              <ListaProyectos
                proyectos={proyectosFiltrados}
                onEliminar={handleEliminar}
                onBusqueda={handleBusqueda}
                onAgregar={handleAgregar}
                busqueda={busqueda}
              />
            } 
          />

          <Route 
            path="/proyectos" 
            element={
              <ListaProyectos
                proyectos={proyectosFiltrados}
                onEliminar={handleEliminar}
                onBusqueda={handleBusqueda}
                onAgregar={handleAgregar}
                busqueda={busqueda}
              />
            } 
          />

          <Route 
            path="/proyectos/:id" 
            element={ <DetalleProyecto /> }
          />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>

        <RegistroActividad fecha={ultimaActualizacion} />
      </main>

      <Footer />
    </Router>
  );
}

export default App;