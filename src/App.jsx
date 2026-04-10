import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      {/* Mobile App Container: Centered, specific width/height, with a shadow */}
      <div className="w-full max-w-[375px] h-[100dvh] sm:h-[812px] bg-popx-bg sm:rounded-lg sm:shadow-2xl sm:my-8 flex flex-col relative overflow-hidden text-[#1D2226]">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;