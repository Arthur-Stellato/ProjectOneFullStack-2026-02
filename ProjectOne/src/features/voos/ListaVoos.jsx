import { Link } from 'react-router-dom';

function ListaVoos({ voos = [] }) {
  return (
    <ul className="lista-voos">
      {voos.map((voo) => (
        <li key={`${voo.flight?.iata}-${voo.flight_date}`}>

          <p>
            <strong>Companhia Aérea:</strong>{' '}
            {voo.airline?.name || 'Não informado'}
          </p>

          <p>
            <strong>Origem:</strong>{' '}
            {voo.departure?.airport || 'Não informado'}
          </p>

          <p>
            <strong>Destino:</strong>{' '}
            {voo.arrival?.airport || 'Não informado'}
          </p>

          <p>
            <strong>Status:</strong>{' '}
            {voo.flight_status || 'Não informado'}
          </p>

          {voo.flight?.iata && (
            <Link to={`/voo/${voo.flight.iata}`}>
              Ver detalhes
            </Link>
          )}

        </li>
      ))}
    </ul>
  );
}

export default ListaVoos;
