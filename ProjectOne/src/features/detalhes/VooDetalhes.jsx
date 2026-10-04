// src/features/detalhes/VooDetalhes.jsx  (dono: Pessoa 3)
// Tela de detalhe (rota "/voo/:id"). O :id é o código IATA do voo (ex.: LA3456).
//
// TODO (Pessoa 3):
//  1. useParams() para pegar o id
//  2. getFlights({ flight_iata: id }) de services/api.js (função criada pela Pessoa 1)
//  3. mostrar horários, atraso, portão, terminal, status
//  4. usar <Loading />, <ErrorMessage /> e <EmptyState /> de components/ui
//  5. botão/link "Voltar" para "/voos"
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFlights } from '../../services/api';

import Loading from '../../components/ui/Loading';
import ErrorMessage from '../../components/ui/ErrorMessage';
import EmptyState from '../../components/ui/EmptyState';

// Os horários vêm em formato ISO ("2026-09-24T14:00:00+00:00") e podem ser null
// Mostra no fuso do aeroporto (timeZone vem da API); se o fuso for inválido, usa o do navegador
function formatarHorario(iso, timeZone) {
  if (!iso) return 'Não informado';
  try {
    return new Date(iso).toLocaleString('pt-BR', timeZone ? { timeZone } : undefined);
  } catch {
    return new Date(iso).toLocaleString('pt-BR');
  }
}

// Bloco reutilizado para partida e chegada (os dois têm a mesma estrutura)
function BlocoAeroporto({ titulo, dados }) {
  return (
    <div className="bloco-aeroporto">
      <h3>{titulo}</h3>
      <p>Aeroporto: {dados?.airport ?? 'Não informado'}</p>
      <p>Horário previsto: {formatarHorario(dados?.scheduled, dados?.timezone)}</p>
      <p>Atraso: {dados?.delay ? `${dados.delay} min` : 'Sem atraso'}</p>
      <p>Terminal: {dados?.terminal ?? '-'}</p>
      <p>Portão: {dados?.gate ?? '-'}</p>
    </div>
  );
}

function VooDetalhes() {
  const { id } = useParams();

  const [voo, setVoo] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // deps [id] = busca o voo da URL; busca de novo se o id mudar
  useEffect(() => {
    getFlights({ flight_iata: id })
      .then((resposta) => {
        // se vierem vários registros do mesmo código, prefere o voo de hoje
        const hoje = new Date().toISOString().slice(0, 10);
        const lista = resposta.data ?? [];
        setVoo(lista.find((v) => v.flight_date === hoje) ?? lista[0]);
      })
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, [id]);

  let conteudo;
  if (carregando) conteudo = <Loading />;
  else if (erro) conteudo = <ErrorMessage mensagem={erro} />;
  else if (!voo) conteudo = <EmptyState texto={`Voo ${id} não encontrado.`} />;
  else conteudo = (
    <>
      <p>Companhia: {voo.airline?.name ?? 'Companhia desconhecida'}</p>
      <p>Status: {voo.flight_status ?? 'Não informado'}</p>
      <BlocoAeroporto titulo="Partida" dados={voo.departure} />
      <BlocoAeroporto titulo="Chegada" dados={voo.arrival} />
    </>
  );

  return (
    <section className="voo-detalhes">
      <h2>Detalhes do voo {id}</h2>
      {conteudo}
      <p><Link to="/voos">Voltar</Link></p>
    </section>
  );
}

export default VooDetalhes;