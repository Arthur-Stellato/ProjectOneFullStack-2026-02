// src/features/voos/voosReducer.js  (dono: Pessoa 1)
// Reducer usado pelo useReducer em BuscaVoos.jsx (hook escolhido do projeto).
//
// Formato de estado sugerido:
//   { status: 'parado' | 'carregando' | 'sucesso' | 'erro', voos: [], erro: null }
//
// TODO (Pessoa 1): tratar as actions 'CARREGANDO', 'SUCESSO' e 'ERRO'.

export const estadoInicial = {
  status: 'parado',
  voos: [],
  erro: null,
};

export function voosReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
