export function extrairAeroportos(voos) {
  const porIata = new Map();

  for (const voo of voos) {
    for (const ponta of [voo.departure, voo.arrival]) {
      if (ponta?.iata && !porIata.has(ponta.iata)) {
        porIata.set(ponta.iata, { nome: ponta.airport, iata: ponta.iata, icao: ponta.icao, timezone: ponta.timezone });
      }
    }
  }

  return [...porIata.values()];
}