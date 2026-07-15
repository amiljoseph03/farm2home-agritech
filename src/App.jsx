import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Import pages structured based on your folder tree
import Home from './pages/common/Home';
import AuthContainer from './pages/auth/AuthContainer';
import Marketplace from './pages/buyer/Marketplace';
import Farmerdashboard from './pages/farmer/Farmerdashboard';
import ProtectedRoute from './pages/auth/ProtectedRoute';

// Simple placeholder for Admin Dashboard
const AdminDashboard = () => (
  <div className="p-5 text-danger">
    <h2>Master Administration Control Unit</h2>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Open Landing Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthContainer mode="login" />} />
          <Route path="/register" element={<AuthContainer mode="register" />} />

          {/* Secure Buyer Routes */}
          <Route
            element={
              <ProtectedRoute allowedRoles={['user', 'farmer', 'admin']} />
            }
          >
            <Route path="/marketplace" element={<Marketplace />} />
          </Route>

          {/* Secure Isolated Farmer Dashboard */}
          <Route element={<ProtectedRoute allowedRoles={['farmer']} />}>
            <Route path="/farmer-dashboard" element={<Farmerdashboard />} />
          </Route>

          {/* Secure Isolated Admin Enterprise Dashboard */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
