import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Budget from './pages/Budget';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ScrollToTop from './components/ScrollToTop';
import Sucesso from './pages/Sucesso';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-900 text-white">
                <main className="flex-grow">
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/budget" element={<Budget />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/sucesso" element={<Sucesso />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-of-service" element={<TermsOfService />} />
                    </Routes>
                </main>
                <Footer />
                <WhatsAppChat />
            </div>
        </Router>
    );
}

export default App; 