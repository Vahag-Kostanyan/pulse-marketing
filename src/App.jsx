import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import HeroPage from './pages/Hero';
import AboutUsPage from './pages/AboutUs';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import WorkPage from './pages/Work';
import ProcessPage from './pages/Process';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
