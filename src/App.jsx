import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/common/Home';
import Marketplace from './pages/buyer/Marketplace';
import FarmerDashboard from './pages/farmer/FarmerDashboard';

function App() {
  const [currentRole, setCurrentRole] = useState('guest'); // 'guest', 'buyer', or 'farmer'

  return (
    <ThemeProvider>
      <Router>
        {/* Quick Design Switcher Bar */}
        <div
          className="bg-dark text-light p-2 d-flex justify-content-between align-items-center px-4 small"
          style={{ zIndex: 9999, position: 'relative' }}
        >
          <span>
            🛠️ <strong>Development Mode:</strong> Simulating{' '}
            <strong>{currentRole.toUpperCase()}</strong> view
          </span>
          <div className="d-flex gap-2">
            <button
              className={`btn btn-sm py-0 px-2 ${currentRole === 'guest' ? 'btn-info text-dark' : 'btn-outline-light'}`}
              onClick={() => setCurrentRole('guest')}
            >
              Public Home Page
            </button>
            <button
              className={`btn btn-sm py-0 px-2 ${currentRole === 'buyer' ? 'btn-success' : 'btn-outline-light'}`}
              onClick={() => setCurrentRole('buyer')}
            >
              Buyer Marketplace
            </button>
            <button
              className={`btn btn-sm py-0 px-2 ${currentRole === 'farmer' ? 'btn-warning text-dark' : 'btn-outline-light'}`}
              onClick={() => setCurrentRole('farmer')}
            >
              Farmer Dashboard
            </button>
          </div>
        </div>

        {/* Navigation Core */}
        <Routes>
          <Route
            path="/"
            element={
              currentRole === 'buyer' ? (
                <Marketplace />
              ) : currentRole === 'farmer' ? (
                <FarmerDashboard />
              ) : (
                <Home
                  onExplore={() => setCurrentRole('buyer')}
                  onJoinAsFarmer={() => setCurrentRole('farmer')}
                />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
