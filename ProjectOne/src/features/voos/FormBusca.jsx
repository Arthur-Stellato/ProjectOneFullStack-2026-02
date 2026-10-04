function FormBusca({ onBuscar, desabilitado = false }) {

  function handleSubmit(event) {

    event.preventDefault();

    const termo = event.target.termo.value;

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

      <button type="submit" disabled={desabilitado}>
        Buscar
      </button>

    </form>
  );

}

export default FormBusca;
