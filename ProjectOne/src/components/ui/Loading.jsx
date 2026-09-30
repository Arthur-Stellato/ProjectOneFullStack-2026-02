// src/components/ui/Loading.jsx
// Estado "carregando" padrão. Todas as telas devem usar este componente
// (Pessoas 1 e 2 não precisam criar o seu próprio).
function Loading({ texto = 'Carregando...' }) {
  return <p className="ui-loading">{texto}</p>;
}

export default Loading;
