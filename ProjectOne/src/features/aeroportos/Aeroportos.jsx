// src/features/aeroportos/Aeroportos.jsx  (dono: Pessoa 2)
// Tela de aeroportos (rota "/aeroportos").
//
// TODO (Pessoa 2):
//  1. useState + useEffect: chamar getAirports() de services/api.js ao abrir a tela
//  2. guardar lista, loading e erro em estados
//  3. filtro (useState) por nome/país aplicado sobre a lista já carregada
//  4. usar <Loading />, <ErrorMessage /> e <EmptyState /> de components/ui

import { useEffect, useState } from 'react';
import { getFlights } from '../../services/api';
import voosMock from './flights.json';

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

    // Para Fins de testes new Promise((resolve) => setTimeout(() => resolve({ data: voosMock }), 2000)) para simular atraso de 2s
    // Promise.reject(new Error('Falha de teste')) Para simular erro

    Promise.resolve({ data: voosMock })
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
      <p>Digitou: {filtro}</p>
      {conteudo}
      <p>Total: {aeroportosFiltrados.length}</p>
    </section>
  );
}

export default Aeroportos;
