import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Roadmap from './components/Roadmap/Roadmap';
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Logical from "./components/Logical/Logical";
import Numerical from "./components/Numerical/Numerical";
import Wordhunt from "./components/Wordhunt/Wordhunt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/logical" element={<Logical />} />
        <Route path="/wordhunt" element={<Wordhunt />} />
        <Route path="/numerical" element={<Numerical />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
