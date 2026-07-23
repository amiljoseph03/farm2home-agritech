import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ allowedRoles }) {
  const token = localStorage.getItem('authToken');
  const userContextString = localStorage.getItem('userContext');

  if (!token || !userContextString) {
    return <Navigate to="/login" replace />;
    
  }

  try {
    const user = JSON.parse(userContextString);
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      return <Navigate to="/" replace />; // Kick back to home if role criteria breaks
      
    }
    return <Outlet />;
  } catch (e) {
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }
}


