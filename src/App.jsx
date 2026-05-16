import { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';
import { proyectoService } from './services/proyectoService';
import './css/styles.css';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main id="center">
        {/* Aquí es donde vive tu componente */}
        <ListaProyectos />
      </main>
      <Footer />
    </>
  );
}

export default App;
