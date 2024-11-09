import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavB from './Components/NavB';
import Nearby from './Components/Nearby';


function App() {
  return (
    <Router>
      <NavB />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nearby" element={<Nearby />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
