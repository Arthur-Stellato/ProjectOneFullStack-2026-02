// src/App.jsx
import Header from './components/Header';
import Sobre from './components/Sobre';
import Footer from './components/Footer';
import Diferenciais from './components/Diferenciais';
import TabelaAvioes from './components/TabelaAvioes';
import './App.css';

function App() {
  return <>
    <div className="App">
      <Header />
      <Sobre />
      <TabelaAvioes />
      <Diferenciais/>
      {/* outras seções da página entram aqui */}
      <Footer />
    </div>
  </>
}

export default App;