// src/features/detalhes/VooDetalhes.jsx  (dono: Pessoa 3)
// Tela de detalhe (rota "/voo/:id"). O :id é o código IATA do voo (ex.: LA3456).
//
// TODO (Pessoa 3):
//  1. useParams() para pegar o id
//  2. getFlights({ flight_iata: id }) de services/api.js (função criada pela Pessoa 1)
//  3. mostrar horários, atraso, portão, terminal, status
//  4. usar <Loading />, <ErrorMessage /> e <EmptyState /> de components/ui
//  5. botão/link "Voltar" para "/voos"
import { useParams } from 'react-router-dom';

function VooDetalhes() {
  const { id } = useParams();

  return (
    <section className="voo-detalhes">
      <h2>Detalhes do voo {id}</h2>
      <p>Em construção — Pessoa 3.</p>
    </section>
  );
}

export default VooDetalhes;