import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Budget from './pages/Budget';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/budget" element={<Budget />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App; 