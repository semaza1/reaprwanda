import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Impact from './pages/Impact';
import AsyvModel from './pages/AsyvModel';
import Philosopy from './pages/about-us/Philosopy';
import Team from './pages/about-us/The-team';
import History from './pages/about-us/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/asyv-model" element={<AsyvModel />} />
        <Route path="/philosophy" element={<Philosopy />} />
        <Route path="/team" element={<Team />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
