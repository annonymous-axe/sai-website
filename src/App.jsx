import { useTheme } from '@mui/material/styles';

import Header from './components/header';
import Home from './components/home/home';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './components/project/project';
import Founder from './components/about/founder';
import Company from './components/about/company';
import Contact from './components/contact/contact';
import ServicePage from './components/service/servicePage';

function App() {

  const theme = useTheme();

  return (
    <>
      <Router>
        <Header/>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicePage />} />

          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;