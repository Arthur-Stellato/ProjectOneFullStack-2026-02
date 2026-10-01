function ListaAeroportos({ aeroportos = [] }) {
  return (
    <ul className="lista-aeroportos">
      {aeroportos.map((a) => (
        <li key={a.iata}>
          {a.nome} ({a.iata}/{a.icao}) — {a.timezone}
        </li>
      ))}
    </ul>
  );
}

export default ListaAeroportos;