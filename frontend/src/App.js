import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavB from './Components/NavB';
import Nearby from './Components/Nearby';
import MyBookings from './Components/MyBookings';
import MyParkings from './Components/MyParkings';
function App() {
  return (
    <Router>
      <NavB />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/my-parkings" element={<MyParkings />} />
      </Routes>
    </Router>
  );
}

export default App;
