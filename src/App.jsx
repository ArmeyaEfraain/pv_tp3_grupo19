import './App.css';
import './css/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProyectos from './components/ListaProyectos';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <ListaProyectos />
      </main>
      <Footer />
    </>
  );
}

export default App;