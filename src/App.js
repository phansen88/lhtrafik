import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landingpage from './components/Landingpage';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <main className="container mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route element={<Landingpage />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Services />} path="/services" />
          <Route element={<Contact />} path="/Contact" />
          <Route element={<Portfolio />} path="/Portfolio" />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
