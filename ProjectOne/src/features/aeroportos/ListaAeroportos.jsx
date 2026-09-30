// src/features/aeroportos/ListaAeroportos.jsx  (dono: Pessoa 2)
// TODO (Pessoa 2): renderizar a prop `aeroportos` com .map() mostrando
// nome, código IATA/ICAO e país.
function ListaAeroportos({ aeroportos = [] }) {
  return <ul className="lista-aeroportos">{aeroportos.map(() => null)}</ul>; // TODO: trocar por <li> reais
}

export default ListaAeroportos;
