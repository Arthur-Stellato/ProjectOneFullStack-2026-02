// src/features/home/Home.jsx  (dono: Pessoa 3)
// Página inicial (rota "/"): panorama rápido dos voos + atalhos.
//
// TODO (Pessoa 3):
//  1. useState + useEffect (deps []) chamando UMA vez
//     getFlights({ flight_status: 'active', limit: 5 }) de services/api.js
//     (o plano gratuito tem limite: não chame a API mais de uma vez por abertura)
//  2. mostrar um resumo: total de voos ativos (resposta.pagination.total)
//     e os 5 primeiros com companhia, origem -> destino
//  3. cada voo linka para /voo/<voo.flight.iata> (tela de detalhe, também sua)
//  4. dois atalhos: "Buscar voos" (/voos) e "Ver aeroportos" (/aeroportos)
//  5. usar <Loading />, <ErrorMessage /> e <EmptyState /> de components/ui
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home">
      <h2>Voos App</h2>
      <p>Acompanhe voos comerciais em tempo real.</p>
      <p><Link to="/voos">Buscar voos</Link> · <Link to="/aeroportos">Ver aeroportos</Link></p>
      <p>Em construção — Pessoa 3.</p>
    </section>
  );
}

export default Home;