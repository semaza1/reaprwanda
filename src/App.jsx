import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Impact from './pages/Impact';
import AsyvModel from './pages/AsyvModel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/asyv-model" element={<AsyvModel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
