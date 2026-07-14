import React from 'react';
import './Header.css';

export default function Header({ onExplore, onJoinAsFarmer }) {
  return (
    <nav className="navbar navbar-expand-lg px-4 py-3 custom-header sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="navbar-brand fw-extrabold fs-3 text-success m-0 tracking-tight">
          {/* <i className="bi bi-sprout-fill me-2"></i>farm2home */}
        </span>
        <div className="d-flex gap-3">
          <button
            onClick={onExplore}
            className="btn btn-outline-success rounded-pill px-4 fw-semibold header-btn"
          >
            Browse Marketplace
          </button>
          <button
            onClick={onJoinAsFarmer}
            className="btn btn-success rounded-pill px-4 fw-semibold shadow-sm header-btn-primary"
          >
            Farmer Portal
          </button>
        </div>
      </div>
    </nav>
  );
}
