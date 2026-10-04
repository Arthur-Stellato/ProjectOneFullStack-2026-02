
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" end>Início</NavLink></li>
        <li><NavLink to="/voos">Voos</NavLink></li>
        <li><NavLink to="/aeroportos">Aeroportos</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;