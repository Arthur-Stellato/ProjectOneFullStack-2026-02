// src/components/TabelaVeiculos.jsx
function TabelaAvioes() {
  const avioes = [
    { modelo: 'F14', funcao: 'Figher'},
    { modelo: 'MIG-25', funcao: 'Intercepter'},
    { modelo: 'F114', funcao: 'Stealth'},
    { modelo: 'BF109', funcao: 'Intercepter'}
  ];

  return <>
    <table className="tabela-avioes">
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Funcão</th>
        </tr>
      </thead>
      <tbody>
        {avioes.map((v) => (
          <tr key={v.modelo}>
            <td>{v.modelo}</td>
            <td>{v.funcao}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
}

export default TabelaAvioes;