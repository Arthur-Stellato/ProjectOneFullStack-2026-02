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
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFlights } from '../../services/api';

import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';

function Home() {
  const [total, setTotal] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // deps [] = chama a API uma única vez, quando a Home abre
  useEffect(() => {
    getFlights({ flight_status: 'active', limit: 5 })
      .then((resposta) => setTotal(resposta.pagination.total))
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  let conteudo;
  if (carregando) conteudo = <Loading />;
  else if (erro) conteudo = <ErrorMessage mensagem={erro} />;
  else conteudo = <p>Total de voos ativos: {total}</p>;

  return (
    <section className="home">
      <h2>Voos App</h2>
      <p>Acompanhe voos comerciais em tempo real.</p>
      <p><Link to="/voos">Buscar voos</Link> · <Link to="/aeroportos">Ver aeroportos</Link></p>
      {conteudo}
    </section>
  );
}

export default Home;