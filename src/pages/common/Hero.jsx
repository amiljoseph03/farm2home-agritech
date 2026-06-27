import React from 'react';
import { ShoppingBag, Tractor, Search } from 'lucide-react';
import './Hero.css';

export default function Hero({ onExplore }) {
  return (
    <section className="hero-section py-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-bold text-uppercase mb-3 unique-badge">
              🌾 Bridging the Rural-Urban Gap
            </span>
            <h1 className="display-4 fw-extrabold tracking-tight mb-3 hero-title">
              Fresh Farm Produce & Smart Machinery Rentals.{' '}
              <span className="text-success">Direct to You.</span>
            </h1>
            <p className="lead text-muted mb-4 hero-desc">
              Skip the middleman. Subscribe to daily essentials like fresh milk
              and eggs, or book high-quality agricultural machinery seamlessly.
            </p>

            {/* Inline Integrated Search Bar */}
            <div className="d-flex align-items-center bg-white rounded-pill px-3 py-2 w-100 border shadow-sm mb-4 hero-search-container">
              <Search size={18} className="text-secondary me-2" />
              <input
                type="text"
                className="form-control bg-transparent border-0 shadow-none p-0"
                placeholder="Search vegetables, milk subscriptions, tractors..."
              />
              <button
                onClick={onExplore}
                className="btn btn-success rounded-pill px-4 btn-sm ms-2"
              >
                Search
              </button>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <button
                onClick={onExplore}
                className="btn btn-success btn-lg rounded-pill px-4 py-3 shadow fw-bold d-flex align-items-center gap-2 main-cta"
              >
                Start Shopping <ShoppingBag size={18} />
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="position-relative hero-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1592417817098-8f3d6eb18865?auto=format&fit=crop&q=80&w=600"
                alt="Fresh local farm agriculture"
                className="img-fluid rounded-4 shadow-lg w-100 hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
