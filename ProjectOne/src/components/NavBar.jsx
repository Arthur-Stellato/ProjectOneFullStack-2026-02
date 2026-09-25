// src/components/NavBar.jsx
function NavBar() {
    const categorias = [
      { nome: 'Intercepters', href: '#Intercepters' },
      { nome: 'Fighters', href: '#Fighters' },
      { nome: 'Stealths', href: '#Stealths' },
    ];
    
    const estiloLista = {StylePropertyMap: 'nome'};

    return <>
      <nav className="navbar">
        <ul >
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