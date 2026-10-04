import { useEffect, useState } from 'react';
import { getFlights } from '../../services/api';

import { extrairAeroportos } from './extrairAeroportos';
import FiltroAeroportos from './FiltroAeroportos';
import ListaAeroportos from './ListaAeroportos';

import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import EmptyState from '../../components/ui/EmptyState';

function Aeroportos() {
  const [aeroportos, setAeroportos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    getFlights({ limit: 100 })
      .then((resposta) => setAeroportos(extrairAeroportos(resposta.data)))
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  const termo = filtro.trim().toLowerCase();
  const aeroportosFiltrados = aeroportos.filter((a) =>
    a.iata.toLowerCase().includes(termo) || a.nome?.toLowerCase().includes(termo)
  );

  let conteudo;
  if (carregando) conteudo = <Loading />;
  else if (erro) conteudo = <ErrorMessage mensagem={erro} />;
  else if (aeroportosFiltrados.length === 0) conteudo = <EmptyState />;
  else conteudo = <ListaAeroportos aeroportos={aeroportosFiltrados} />;

  return (
    <section className="aeroportos">
      <h2>Aeroportos</h2>
      <FiltroAeroportos valor={filtro} onChange={setFiltro} />
      {conteudo}
      <p>Total: {aeroportosFiltrados.length}</p>
    </section>
  );
}

export default Aeroportos;