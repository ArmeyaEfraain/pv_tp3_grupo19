import { useState, useEffect } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';

import proyectoService from './services/proyectoService';

import './css/styles.css';

function App() {

  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const datos = proyectoService.obtenerProyectos();
    setProyectos(datos);
  }, []);

  return (
    <>
      <Header />
      <Nav />

      <main id="center">
        <ListaProyectos proyectos={proyectos} />
      </main>

      <Footer />
    </>
  );
}

export default App;