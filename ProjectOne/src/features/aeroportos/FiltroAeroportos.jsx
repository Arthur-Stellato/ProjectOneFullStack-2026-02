function FiltroAeroportos({ valor, onChange }) {
  return (
    <div className="filtro-aeroportos">
      <input
        type="text"
        placeholder="Buscar por nome, IATA, ICAO ou região (ex.: America)"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default FiltroAeroportos;