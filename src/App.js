import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Categoria from './Categoria';
import Comentarios from './Comentarios';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/users">Usuarios</Link></li>
          <li><Link to="/categorias">Categorias</Link></li>
          <li><Link to="/comments">Comentarios</Link></li>
        </ul>
      </nav>

        <Routes>
          <Route path="/" exact Component={Inicio} />
          <Route path="/about" exact Component={AcercaDe} />
          <Route path="/contact" exact Component={Contacto} />
          <Route path="/users" exact Component={Usuarios} />
          <Route path="/categorias" exact Component={Categoria} />
          <Route path="/comments" exact Component={Comentarios} />
        </Routes>
    </Router>
  );
}

export default App;
