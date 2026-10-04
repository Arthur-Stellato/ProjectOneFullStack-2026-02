import { useReducer } from 'react';

import FormBusca from './FormBusca';
import ListaVoos from './ListaVoos';

import { estadoInicial, voosReducer } from './voosReducer';
import { getFlights } from '../../services/api';

import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import EmptyState from '../../components/ui/EmptyState';

function BuscaVoos() {

  const [state, dispatch] = useReducer(voosReducer, estadoInicial);

  async function handleBuscar(termo) {

    if (!termo.trim()) {
      return;
    }

    dispatch({
      type: 'CARREGANDO'
    });

    try {

      const resposta = await getFlights({
        flight_iata: termo.trim().toUpperCase()
      });

      dispatch({
        type: 'SUCESSO',
        payload: resposta.data
      });

    } catch (error) {

      dispatch({
        type: 'ERRO',
        payload: error.message
      });
    }
  }

  return (
    <section className="busca-voos">

      <h2>Buscar voos</h2>

      {/* Formulario de busca */}
      <FormBusca
        onBuscar={handleBuscar}
        desabilitado={state.status === 'carregando'}
      />

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