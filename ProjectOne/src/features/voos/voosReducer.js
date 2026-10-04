export const estadoInicial = {
  status: 'parado',
  voos: [],
  erro: null,
};

export function voosReducer(state, action) {
  switch (action.type) {
    
    case 'CARREGANDO':
      return {
        ...state,
        status: 'carregando',
        erro: null,
      };

    case 'SUCESSO':
      return {
        ...state,
        status: 'sucesso',
        voos: action.payload,
        erro: null,
      };

    case 'ERRO':
      return {
        ...state,
        status: 'erro',
        erro: action.payload,
      };
      
    default:
      return state;
  }
}
