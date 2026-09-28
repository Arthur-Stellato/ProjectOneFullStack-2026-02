// src/pages/VooDetalhes.jsx
// TODO (Pessoa 3): tela de detalhe de um voo específico.
// A rota é /voo/:id — use useParams() do react-router-dom para pegar o id
// e busque os dados do voo (via services/api.js, reaproveitando o que a
// Pessoa 1 criar) para mostrar horários, atraso, portão, etc.
import { useParams } from 'react-router-dom';

function VooDetalhes() {
  const { id } = useParams();

  return (
    <section className="voo-detalhes">
      <h2>Detalhes do voo</h2>
      <p>Voo selecionado: {id}</p>
      <p>Em construção — Pessoa 3.</p>
    </section>
  );
}

export default VooDetalhes;
