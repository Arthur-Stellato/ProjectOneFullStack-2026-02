// src/features/aeroportos/Aeroportos.jsx  (dono: Pessoa 2)
// Tela de aeroportos (rota "/aeroportos").
//
// TODO (Pessoa 2):
//  1. useState + useEffect: chamar getAirports() de services/api.js ao abrir a tela
//  2. guardar lista, loading e erro em estados
//  3. filtro (useState) por nome/país aplicado sobre a lista já carregada
//  4. usar <Loading />, <ErrorMessage /> e <EmptyState /> de components/ui
import FiltroAeroportos from './FiltroAeroportos';
import ListaAeroportos from './ListaAeroportos';

function Aeroportos() {
  return (
    <section className="aeroportos">
      <h2>Aeroportos</h2>
      <FiltroAeroportos />
      <ListaAeroportos aeroportos={[]} />
      <p>Em construção — Pessoa 2.</p>
    </section>
  );
}

export default Aeroportos;
