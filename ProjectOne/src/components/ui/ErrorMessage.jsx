// src/components/ui/ErrorMessage.jsx
// Estado "erro" padrão. Recebe a mensagem que veio do catch da API.
function ErrorMessage({ mensagem = 'Algo deu errado. Tente novamente.' }) {
  return <p className="ui-error" role="alert">{mensagem}</p>;
}

export default ErrorMessage;
