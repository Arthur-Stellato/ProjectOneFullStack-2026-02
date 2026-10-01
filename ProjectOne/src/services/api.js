// src/services/api.js  (compartilhado)
// Camada central de chamadas à API AviationStack.
// As telas NUNCA fazem fetch() direto: sempre importam uma função daqui.
//
// Cada função devolve o JSON inteiro da API: { pagination, data: [...] }.
// A lista de itens fica em `resposta.data`.
// Erros (rede ou status != 200) viram `throw new Error(...)`: use try/catch.
//
// Atenção: o plano gratuito tem limite de requisições. Não dispare a
// busca a cada tecla digitada.

const BASE_URL = 'https://api.aviationstack.com/v1';
const ACCESS_KEY = import.meta.env.VITE_AVIATIONSTACK_KEY;

async function request(endpoint, params = {}) {
  const query = new URLSearchParams({ access_key: ACCESS_KEY, ...params });
  const response = await fetch(`${BASE_URL}/${endpoint}?${query}`);

  if (!response.ok) {
    const corpo = await response.json().catch(() => null);
    throw new Error(corpo?.error?.message ?? `Erro ao buscar ${endpoint}: ${response.status}`);
  }

  return response.json();
}

// Pessoa 1 é dona desta função; Pessoa 3 também a usa (detalhe do voo).
// Parâmetros úteis: flight_iata (ex.: 'LA3456'), flight_status, limit.
export async function getFlights(params = {}) {
  return request('flights', params);
}

// Pessoa 2 é dona desta função.
// Parâmetros úteis: search, limit.
export async function getAirports(params = {}) {
  return request('airports', params);
}
