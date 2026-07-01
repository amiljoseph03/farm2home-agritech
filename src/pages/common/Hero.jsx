import React from 'react';
// import { ShoppingBag, Tractor, Search } from 'lucide-react';
import './Hero.css';

export default function Hero({ onExplore }) {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade vh-100 position-relative"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      {/* 1. Carousel Indicators (Bottom lines) */}
      <div className="carousel-indicators unique-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* 2. Carousel Inner Slides (Full Screen Backgrounds) */}
      <div className="carousel-inner h-100">
        {/* Slide 1: General Agriculture Ecosystem */}
        <div className="carousel-item active h-100">
          <div
            className="carousel-bg-img"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/1200x/d3/79/8f/d3798f5a7b9112f52de9d06c2f31113c.jpg')`,
            }}
          ></div>
          <div className="carousel-caption custom-caption text-start">
            <span className="badge bg-success px-3 py-2 rounded-pill fw-bold text-uppercase mb-3">
              🌾 Direct Agriculture Node
            </span>
            <h1 className="display-3 fw-extrabold tracking-tight mb-3">
              Fresh Farm Produce & Smart Machinery Rentals.
            </h1>
            <p className="lead mb-4 max-w-md">
              Skip the middleman completely. Subscribe to fresh community
              essentials or book premium agricultural machinery seamlessly.
            </p>
          </div>
        </div>

        {/* Slide 2: Daily Subscriptions Focus */}
        <div className="carousel-item h-100">
          <div
            className="carousel-bg-img"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/1200x/60/0a/2f/600a2faf2f3525e57ddddf2a93cc8a93.jpg')`,
            }}
          ></div>
          <div className="carousel-caption custom-caption text-start">
            <span className="badge bg-primary px-3 py-2 rounded-pill fw-bold text-uppercase mb-3">
              🥛 Morning Essentials Delivered
            </span>
            <h1 className="display-3 fw-extrabold tracking-tight mb-3">
              Flexible Daily & Monthly Subscriptions
            </h1>
            <p className="lead mb-4 max-w-md">
              Get organic milk, fresh eggs, and harvest greens dropped at your
              doorstep every morning. Pause or cancel your cycle anytime.
            </p>
          </div>
        </div>

        {/* Slide 3: Machinery Rentals Focus */}
        <div className="carousel-item h-100">
          <div
            className="carousel-bg-img"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://i.pinimg.com/1200x/56/01/c1/5601c11e62f86451fc7ab25396e367b3.jpg')`,
            }}
          ></div>
          <div className="carousel-caption custom-caption text-start">
            <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold text-uppercase mb-3">
              🚜 Heavy Equipment Fleet
            </span>
            <h1 className="display-3 fw-extrabold tracking-tight mb-3">
              Rent Premium Machinery On-Demand
            </h1>
            <p className="lead mb-4 max-w-md">
              Browse tractors, power sprayers, and tools listed directly by
              local owners. Book specific operational slots via calendar tools.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Floating Interactive Overlay Search Container */}
      {/* <div className="absolute-search-box position-absolute start-50 translate-middle-x">
        <div className="bg-white p-3 rounded-4 shadow-lg border d-flex align-items-center gap-2 hero-search-container mx-auto">
          <Search size={22} className="text-secondary ms-2" />
          <input
            type="text"
            className="form-control bg-transparent border-0 shadow-none py-1 px-2 text-dark"
            placeholder="Search farm vegetables, milk subscriptions, tractors..."
          />
          <button
            onClick={onExplore}
            className="btn btn-success rounded-pill px-4 py-2 fw-semibold shadow-sm text-nowrap"
          >
            Search Hub
          </button>
        </div>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button
            onClick={onExplore}
            className="btn btn-success rounded-pill px-4 py-2.5 shadow fw-bold d-flex align-items-center gap-2"
          >
            Explore Produce <ShoppingBag size={16} />
          </button>
          <button
            onClick={onExplore}
            className="btn btn-warning text-dark rounded-pill px-4 py-2.5 shadow fw-bold d-flex align-items-center gap-2"
          >
            Lease Fleet <Tractor size={16} />
          </button>
        </div>
      </div> */}

      {/* 4. Direction Navigators */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
