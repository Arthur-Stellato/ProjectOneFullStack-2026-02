// src/components/ui/EmptyState.jsx
// Estado "nenhum resultado" padrão.
function EmptyState({ texto = 'Nenhum resultado encontrado.' }) {
  return <p className="ui-empty">{texto}</p>;
}

export default EmptyState;
