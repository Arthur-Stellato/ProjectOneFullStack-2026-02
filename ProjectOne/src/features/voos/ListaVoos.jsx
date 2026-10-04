// src/features/voos/ListaVoos.jsx  (dono: Pessoa 1)
// TODO (Pessoa 1): renderizar a prop `voos` com .map() mostrando companhia,
// origem, destino e status. Usar optional chaining (voo.departure?.airport),
// vários campos da API vêm null.
// Cada item deve linkar para /voo/<código IATA do voo> (tela da Pessoa 3).

import { Link } from 'react-router-dom';

function ListaVoos({ voos = [] }) {
  return (
    <ul className="lista-voos">
      {voos.map((voo) => (
        <li key={voo.flight_iata}>

          {/* companhia aerea */}
          <p>
            <strong>Companhia Aérea:</strong>{' '}
            {voo.airline?.name || 'Não informado'}
          </p>

          {/* aeroporto de origem */}
          <p>
            <strong>Origem:</strong>{' '}
            {voo.departure?.airport || 'Não informado'}
          </p>

          {/* aeroporto destino */}
          <p>
            <strong>Destino:</strong>{' '}
            {voo.arrival?.airport || 'Não informado'}
          </p>

          {/* status do voo */}
          <p>
            <strong>Status:</strong>{' '}
            {voo.flight_status || 'Não informadO'}
          </p>

          {/* link para a tela de detalhes */}
          {voo.flight?.iata && (
            <Link to={`/voo/${voo.flight.iata}`}>
              Ver Detalhes
            </Link>
          )}
          {!voo.flight?.iata && (
            <p>Detalhes não disponíveis</p>
          )}         
        </li>
      ))}
    </ul>
  );
}

export default ListaVoos;
