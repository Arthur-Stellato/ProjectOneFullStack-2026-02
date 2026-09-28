// src/components/Diferenciais.jsx
import './Diferenciais.css';

function Diferenciais() {
  const itens = [
    'Dados em tempo real',
    'Busca por voo ou companhia',
    'Status de voo atualizado',
    'Interface simples',
  ];

  return (
    <section className="diferenciais">
      <h2>Diferenciais</h2>
      <ul className="lista-diferenciais">
        {itens.map((item) => (
          <li key={item} className="diferencial-card">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Diferenciais;