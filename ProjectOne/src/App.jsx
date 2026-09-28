// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aeroportos from './pages/Aeroportos';
import VooDetalhes from './pages/VooDetalhes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aeroportos" element={<Aeroportos />} />
        <Route path="/voo/:id" element={<VooDetalhes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
