// src/features/voos/BuscaVoos.jsx  (dono: Pessoa 1)
// Tela de busca (rota "/voos"). Junta formulário + lista + estados.
//
// TODO (Pessoa 1):
//  1. useReducer(voosReducer, estadoInicial) para controlar loading/dados/erro
//  2. ao enviar o formulário: dispatch de "carregando" -> getFlights() -> "sucesso" ou "erro"
//  3. renderizar <Loading />, <ErrorMessage /> ou <EmptyState /> conforme o estado
//  4. renderizar <ListaVoos voos={...} /> com os resultados
import FormBusca from './FormBusca';
import ListaVoos from './ListaVoos';

function BuscaVoos() {
  return (
    <section className="busca-voos">
      <h2>Buscar voos</h2>
      <FormBusca />
      <ListaVoos voos={[]} />
      <p>Em construção — Pessoa 1.</p>
    </section>
  );
}

export default BuscaVoos;