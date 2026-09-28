// src/components/NavBar.jsx
import { Link } from 'react-router-dom';

function NavBar() {
    // Navegação real da SPA (rotas do App.jsx).
    // Categorias abaixo refletem os status de voo reais da AviationStack
    // (flight_status: active, scheduled, landed...), usados no exemplo
    // estático de TabelaAvioes.
    const categorias = [
      { nome: 'Ativos', href: '#Ativos' },
      { nome: 'Agendados', href: '#Agendados' },
      { nome: 'Pousados', href: '#Pousados' },
    ];

    const estiloLista = {StylePropertyMap: 'nome'};

    return <>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/aeroportos">Aeroportos</Link></li>
          {categorias.map((cat) => (
            <li style={estiloLista} key={cat.href}>
              <a href={cat.href}>{cat.nome}</a>
            </li>
          ))}
        </ul>
      </nav>
      </>
  }
  
  export default NavBar;