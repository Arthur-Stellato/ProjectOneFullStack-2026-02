// src/features/voos/ListaVoos.jsx  (dono: Pessoa 1)
// TODO (Pessoa 1): renderizar a prop `voos` com .map() mostrando companhia,
// origem, destino e status. Usar optional chaining (voo.departure?.airport),
// vários campos da API vêm null.
// Cada item deve linkar para /voo/<código IATA do voo> (tela da Pessoa 3).
function ListaVoos({ voos = [] }) {
  return <ul className="lista-voos">{voos.map(() => null)}</ul>; // TODO: trocar por <li> reais
}

export default ListaVoos;
