// src/features/voos/FormBusca.jsx  (dono: Pessoa 1)
// TODO (Pessoa 1): input (ex.: código do voo "LA3456") + botão.
// Receber uma prop onBuscar(termo) e chamá-la no submit do formulário.

function FormBusca( { onBuscar }) {

  function handleSubmit(event) {
    // Impedir que o formulario recarregue a pagina.
    event.preventDefault();

    // Pega o valor digiadoo no input
    const termo = event.target.termo.value;

    //Chama a funçao recebida
    onBuscar(termo);
  }
  return (
    <form className="form-busca" onSubmit={handleSubmit}>
      <label htmlFor="termo">
        Código do voo:
      </label>

      <input
        id="termo"
        name="termo"
        type="text"
        placeholder="Ex.: LA3456"
      />

      <button type="submit">
        Buscar
      </button>

    </form>
  );

}

export default FormBusca;
