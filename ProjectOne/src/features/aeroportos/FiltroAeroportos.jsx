function FiltroAeroportos({ valor, onChange }) {
  return (
    <div className="filtro-aeroportos">
      <input
        type="text"
        placeholder="Buscar por nome ou IATA"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default FiltroAeroportos;