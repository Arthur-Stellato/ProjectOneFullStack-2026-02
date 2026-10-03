// src/features/voos/BuscaVoos.jsx  (dono: Pessoa 1)
// Tela de busca (rota "/voos"). Junta formulário + lista + estados.
//
// TODO (Pessoa 1):
//  1. useReducer(voosReducer, estadoInicial) para controlar loading/dados/erro
//  2. ao enviar o formulário: dispatch de "carregando" -> getFlights() -> "sucesso" ou "erro"
//  3. renderizar <Loading />, <ErrorMessage /> ou <EmptyState /> conforme o estado
//  4. renderizar <ListaVoos voos={...} /> com os resultados
import { useReducer } from 'react';

import FormBusca from './FormBusca';
import ListaVoos from './ListaVoos';

import { estadoInicial, voosReducer } from './voosReducer';
import { getFlights } from '../../services/api';

import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import EmptyState from '../../components/ui/EmptyState';

function BuscaVoos() {
  // useReducer para controlar o estado da busca
  // status:  parado, carregando, sucesso ou erro
  // voos: lista de voos recebidos da API
  // erro:  mensagem de erro caso aconteça

  const [state, dispatch] = useReducer(voosReducer, estadoInicial);

  // funçao chamada pelo FormBusca quando usuario clicar em Buscar
  async function handleBuscar(termo) {

    // evita fazer busca se o campo estiver vazio
    if (!termo.trim()) {
      return;
    }

    // informa ao reducer que a busca começou
    dispatch({
      type: 'CARREGANDO'
    });

    try {

      // chama a função da API para buscar voos
      const resposta = await getFlights({
        flight_iata: termo.trim()
      });

      // se der certo guarda os voos recebidos
      dispatch({
        type: 'SUCESSO',
        payload: resposta.data
      });

    } catch (erro) {
      
      // se der erro informa o erro para o reducer
      dispatch({
        type: 'ERRO',
        payload: erro.message
      });
    }    
  }

  return (
    <section className="busca-voos">

      <h2>Buscar voos</h2>

      {/* Formulario de busca */}
      <FormBusca onBuscar={handleBuscar} />

      {/* Enquanto a API esta buscando */}
      {state.status === 'carregando' && <Loading />}

      {/* Se acontecer algum erro */}
      {state.status === 'erro' && (
        <ErrorMessage mensagem={state.erro} />
      )}

      {/* Se a buscar terminou mas nao encontrou voos */}
      {state.status === 'sucesso' && state.voos.length === 0 && (
        <EmptyState />
      )}

      {/* Mostra a lista quando existem voos */}
      {state.status === 'sucesso' && state.voos.length > 0 && (
        <ListaVoos voos={state.voos} />
      )}

    </section>
  );
}

export default BuscaVoos;