// src/pages/Home.jsx
// Página inicial. Hoje mostra o conteúdo estático de exemplo (Sobre,
// TabelaAvioes, Diferenciais).
//
// TODO (Pessoa 1): esta é a página onde entra a busca de voos.
// Sugestão: trocar <TabelaAvioes /> por um componente próprio (ex.:
// <BuscaVoos />) que usa getFlights() de services/api.js e um useReducer
// para controlar loading/dados/erro. Ao clicar num voo da lista, navegar
// para /voo/:id (página criada pela Pessoa 3 em VooDetalhes.jsx).
import Sobre from '../components/Sobre';
import TabelaAvioes from '../components/TabelaAvioes';
import Diferenciais from '../components/Diferenciais';

function Home() {
  return (
    <>
      <Sobre />
      <TabelaAvioes />
      <Diferenciais />
    </>
  );
}

export default Home;
