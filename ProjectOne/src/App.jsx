// src/App.jsx  (dono: Pessoa 3)
// Aqui só ficam o layout fixo e o mapa de rotas.
// Nenhuma lógica de tela deve morar neste arquivo.
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './features/home/Home';
import BuscaVoos from './features/voos/BuscaVoos';
import Aeroportos from './features/aeroportos/Aeroportos';
import VooDetalhes from './features/detalhes/VooDetalhes';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voos" element={<BuscaVoos />} />
          <Route path="/aeroportos" element={<Aeroportos />} />
          <Route path="/voo/:id" element={<VooDetalhes />} />
          <Route
            path="*"
            element={
              <section>
                <h2>Página não encontrada</h2>
                <p><Link to="/">Voltar ao início</Link></p>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;