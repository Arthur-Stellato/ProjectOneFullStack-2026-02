// src/components/layout/NavBar.jsx  (dono: Pessoa 3)
// Para adicionar uma tela nova ao menu: acrescente um <li> aqui
// e a <Route> correspondente em src/App.jsx.
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Voos</NavLink></li>
        <li><NavLink to="/aeroportos">Aeroportos</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
