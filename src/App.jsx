import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Accomplishments from './pages/impact/Accomplishments';
import EducationEnrichment from './pages/strategies/EducationEnrichment';
import Philosopy from './pages/about-us/Philosopy';
import Team from './pages/about-us/The-team';
import History from './pages/about-us/History';

import CommunityResilience from './pages/strategies/CommunityResilience';

import AnnualReports from './pages/impact/AnnualReports';

import Careers from './pages/Careers';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/accomplishments" element={<Accomplishments />} />
        <Route path="/community-resilience" element={<CommunityResilience />} />
        <Route path="/annual-reports" element={<AnnualReports />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/education-enrichment" element={<EducationEnrichment />} />
        <Route path="/philosophy" element={<Philosopy />} />
        <Route path="/team" element={<Team />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
