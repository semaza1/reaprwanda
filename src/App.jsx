import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Impact from './pages/Impact';
import AsyvModel from './pages/AsyvModel';
import Philosopy from './pages/about-us/Philosopy';
import Team from './pages/about-us/The-team';
import History from './pages/about-us/History';

import NationalImpact from './pages/NationalImpact';

import Financials from './pages/Financials';

import Careers from './pages/Careers';
import StartAFundraiser from './pages/StartAFundraiser';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/national-impact" element={<NationalImpact />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/start-a-fundraiser" element={<StartAFundraiser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/asyv-model" element={<AsyvModel />} />
        <Route path="/philosophy" element={<Philosopy />} />
        <Route path="/team" element={<Team />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
