// src/components/layout/Header.jsx  (dono: Pessoa 3)
import './Header.css';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">Voos App</div>
      <NavBar />
    </header>
  );
}

export default Header;
