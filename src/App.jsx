import { useState, useEffect } from "react";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import proyectoService from "./services/proyectoService";

import "./css/styles.css";

function App() {

  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(proyectoService.obtenerProyectos());
  }, []);

  return (
    <>
      <Header />
      <Nav />

      <main>
        <h2>Lista de proyectos</h2>

        {proyectos.map((proyecto) => (
          <div key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
