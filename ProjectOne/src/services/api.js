// src/services/api.js
// Camada central de chamadas à API AviationStack.
// Todas as telas (voos, aeroportos, etc.) devem buscar dados por aqui,
// em vez de fazer fetch() direto dentro dos componentes.

const BASE_URL = 'https://api.aviationstack.com/v1';
const ACCESS_KEY = import.meta.env.VITE_AVIATIONSTACK_KEY;

async function request(endpoint, params = {}) {
  const query = new URLSearchParams({ access_key: ACCESS_KEY, ...params });
  const response = await fetch(`${BASE_URL}/${endpoint}?${query}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar ${endpoint}: ${response.status}`);
  }

  return response.json();
}

// TODO (Pessoa 1): implementar a busca de voos.
// Sugestão de assinatura: getFlights({ flight_iata, flight_status, limit })
export async function getFlights(params = {}) {
  return request('flights', params);
}

// TODO (Pessoa 2): implementar a busca de aeroportos/companhias.
// Sugestão de assinatura: getAirports({ search, limit }) ou getAirlines({ ... })
export async function getAirports(params = {}) {
  return request('airports', params);
}
