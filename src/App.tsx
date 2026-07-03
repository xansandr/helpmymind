import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Weather } from './pages/Weather';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ background: '#eee', padding: '0.5rem 1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>
          Главная
        </Link>
        <Link to="/weather">Погода</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
