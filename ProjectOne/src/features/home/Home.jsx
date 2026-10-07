import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFlights } from '../../services/api';

import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import EmptyState from '../../components/ui/EmptyState';

const POR_PAGINA = 5;

function Home() {
  const [voos, setVoos] = useState([]);
  const [total, setTotal] = useState(0);
  const [pagina, setPagina] = useState(1);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // deps [] = chama a API uma única vez, quando a Home abre
  useEffect(() => {
    getFlights({ flight_status: 'active', limit: 50 })
      .then((resposta) => {
        setVoos(resposta.data);
        setTotal(resposta.pagination.total);
      })
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  const totalPaginas = Math.ceil(voos.length / POR_PAGINA);
  const inicio = (pagina - 1) * POR_PAGINA;
  const voosDaPagina = voos.slice(inicio, inicio + POR_PAGINA);

  let conteudo;
  if (carregando) conteudo = <Loading />;
  else if (erro) conteudo = <ErrorMessage mensagem={erro} />;
  else if (voos.length === 0) conteudo = <EmptyState texto="Nenhum voo ativo no momento." />;
  else conteudo = (
    <>
      <p>Total de voos ativos: {total}</p>
      <ul className="lista-voos-ativos">
        {voosDaPagina.map((voo, indice) => {
          const codigo = voo.flight?.iata;
          const companhia = voo.airline?.name ?? 'Companhia desconhecida';
          const origem = voo.departure?.airport ?? 'Origem desconhecida';
          const destino = voo.arrival?.airport ?? 'Destino desconhecido';

          return (
            <li key={codigo ?? indice}>
              {codigo ? <Link to={`/voo/${codigo}`}>{codigo}</Link> : 'Sem código'} — {companhia}: {origem} → {destino}
            </li>
          );
        })}
      </ul>
      {totalPaginas > 1 && (
        <div className="paginacao">
          <button type="button" onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
            Anterior
          </button>
          <span>Página {pagina} de {totalPaginas}</span>
          <button type="button" onClick={() => setPagina(pagina + 1)} disabled={pagina === totalPaginas}>
            Próxima
          </button>
        </div>
      )}
    </>
  );

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