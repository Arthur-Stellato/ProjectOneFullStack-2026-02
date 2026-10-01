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

function Aeroportos() {

  const [aeroportos, setAeroportos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    Promise.resolve({ data: voosMock })
      .then((resposta) => setAeroportos(extrairAeroportos(resposta.data)))
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  console.log(aeroportos[0])

  return (
    <section className="aeroportos">
      <h2>Aeroportos</h2>
      <FiltroAeroportos />
      <ListaAeroportos aeroportos={aeroportos} />
      <p>Total: {aeroportos.length}</p>
    </section>
  );
}

export default Aeroportos;
