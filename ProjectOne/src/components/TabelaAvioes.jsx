// src/components/TabelaAvioes.jsx
// Conteúdo estático de exemplo, no formato que a API AviationStack retorna
// para voos comerciais (número do voo, companhia, status).
//
// TODO (Pessoa 1): substituir esse array fixo pelo resultado real de
// getFlights() em services/api.js.
function TabelaAvioes() {
  const voos = [
    { numero: 'LA3456', companhia: 'LATAM', status: 'Ativo' },
    { numero: 'G31234', companhia: 'GOL', status: 'Agendado' },
    { numero: 'AD4321', companhia: 'Azul', status: 'Pousado' },
    { numero: 'TP54', companhia: 'TAP Portugal', status: 'Cancelado' },
  ];

  return <>
    <table className="tabela-voos">
      <thead>
        <tr>
          <th>Voo</th>
          <th>Companhia</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {voos.map((v) => (
          <tr key={v.numero}>
            <td>{v.numero}</td>
            <td>{v.companhia}</td>
            <td>{v.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
}

export default TabelaAvioes;