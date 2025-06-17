import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';
import CreateCapsule from './routes/CreateCapsule';
import CapsuleDetails from './routes/CapsuleDetails';
import Settings from './routes/Settings';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AuthGuard from './components/layout/AuthGuard';
import './styles/theme.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/capsule/:id" element={<CapsuleDetails />} />

        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/create"
          element={
            <AuthGuard>
              <CreateCapsule />
            </AuthGuard>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
