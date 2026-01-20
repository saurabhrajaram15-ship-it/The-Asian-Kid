
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, CheckCircle, Mail, Phone, ExternalLink, Globe, Star, ArrowRight, MessageCircle } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import CountriesPage from './pages/CountriesPage';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Exams & Countries', path: '/countries' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-navy p-2 rounded-lg">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold text-navy tracking-tight uppercase">The Asian<span className="text-blue-600"> Kid</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.path) ? 'text-blue-600' : 'text-slate-600 hover:text-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-navy text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Book Free Demo
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-navy focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-navy text-white px-3 py-4 rounded-md text-base font-bold mt-4">
              Book Free Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="text-blue-400 w-8 h-8" />
              <span className="text-2xl font-bold tracking-tight uppercase">The Asian<span className="text-blue-400"> Kid</span></span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Premium international online tutoring. Expert 1-to-1 and 3-to-1 coaching for students in UK, Australia, and USA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><ExternalLink size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Phone size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2 inline-block">Curricula</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/countries" className="hover:text-blue-400 transition-colors">UK GCSE & A-Levels</Link></li>
              <li><Link to="/countries" className="hover:text-blue-400 transition-colors">Australia NAPLAN & ATAR</Link></li>
              <li><Link to="/countries" className="hover:text-blue-400 transition-colors">USA SAT & AP Exams</Link></li>
              <li><Link to="/countries" className="hover:text-blue-400 transition-colors">1-to-1 Coaching</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Our Vision</Link></li>
              <li><Link to="/how-it-works" className="hover:text-blue-400 transition-colors">The Asian Method</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Book a Demo</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-800 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3"><Mail className="text-blue-400 shrink-0 mt-1" size={18} /><span>support@theasiankid.com</span></li>
              <li className="flex items-start space-x-3"><Phone className="text-blue-400 shrink-0 mt-1" size={18} /><span>+91 98765 43210</span></li>
              <li className="flex items-start space-x-3"><MessageCircle className="text-green-500 shrink-0 mt-1" size={18} /><span>WhatsApp: +91 98765 43210</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} The Asian Kid. All rights reserved. Professional 1-to-1 and 3-to-1 Tutoring.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
