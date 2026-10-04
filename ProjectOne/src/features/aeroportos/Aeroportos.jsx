import { useEffect, useState } from 'react';
import { getFlights } from '../../services/api';

import { extrairAeroportos } from './extrairAeroportos';
import FiltroAeroportos from './FiltroAeroportos';
import ListaAeroportos from './ListaAeroportos';

import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import EmptyState from '../../components/ui/EmptyState';

const COMPANHIAS = ['AD', 'G3', 'LA'];
const POR_PAGINA = 10;

function Aeroportos() {
  const [aeroportos, setAeroportos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [pagina, setPagina] = useState(1);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    Promise.all(
      COMPANHIAS.map((c) => getFlights({ airline_iata: c, limit: 100 }))
    )
      .then((respostas) =>
        setAeroportos(extrairAeroportos(respostas.flatMap((r) => r.data)))
      )
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  function mudarFiltro(valor) {
    setFiltro(valor);
    setPagina(1); // cada nova busca volta para a primeira página
  }

  const termo = filtro.trim().toLowerCase();
  const aeroportosFiltrados = aeroportos.filter((a) =>
    [a.nome, a.iata, a.icao, a.timezone].some((campo) =>
      campo?.toLowerCase().includes(termo)
    )
  );

  const totalPaginas = Math.ceil(aeroportosFiltrados.length / POR_PAGINA);
  const inicio = (pagina - 1) * POR_PAGINA;
  const aeroportosDaPagina = aeroportosFiltrados.slice(inicio, inicio + POR_PAGINA);

  let conteudo;
  if (carregando) conteudo = <Loading />;
  else if (erro) conteudo = <ErrorMessage mensagem={erro} />;
  else if (aeroportosFiltrados.length === 0) conteudo = <EmptyState />;
  else conteudo = (
    <>
      <ListaAeroportos aeroportos={aeroportosDaPagina} />
      <div className="paginacao">
        <button type="button" onClick={() => setPagina(pagina - 1)} disabled={pagina === 1}>
          Anterior
        </button>
        <span>Página {pagina} de {totalPaginas}</span>
        <button type="button" onClick={() => setPagina(pagina + 1)} disabled={pagina === totalPaginas}>
          Próxima
        </button>
      </div>
    </>
  );

  return (
    <section className="aeroportos">
      <h2>Aeroportos</h2>
      <FiltroAeroportos valor={filtro} onChange={mudarFiltro} />
      {conteudo}
      <p>Aeroportos encontrados: {aeroportosFiltrados.length}</p>
    </section>
  );
}

export default Aeroportos;