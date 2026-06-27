import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Moon, Sun, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Marketplace() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const mockProducts = [
    {
      id: 1,
      name: 'Organic Fresh Milk',
      type: 'subscription',
      price: ' can ₹50/day',
      category: 'Dairy Essentials',
      rating: 4.8,
      img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 2,
      name: 'Premium Mahindra Tractor',
      type: 'rental',
      price: '₹1200/day',
      category: 'Heavy Equipment',
      rating: 4.9,
      img: 'https://images.unsplash.com/photo-1594136976652-32130310243b?auto=format&fit=crop&q=80&w=400',
    },
    {
      id: 3,
      name: 'Fresh Farm Tomatoes',
      type: 'one-time',
      price: '₹40/kg',
      category: 'Vegetables',
      rating: 4.5,
      img: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="container-fluid p-0 min-vh-100">
      {/* Top Main Navigation Bar */}
      <nav className="navbar navbar-expand-lg px-4 py-3 custom-card sticky-top rounded-0 border-top-0 border-start-0 border-end-0">
        <div className="container-fluid px-0 d-flex justify-content-between align-items-center">
          <span className="navbar-brand fw-extrabold fs-3 text-success m-0 tracking-tight">
            <i className="bi bi-sprout-fill me-2"></i>farm2home
          </span>

          <div
            className="d-flex align-items-center bg-light rounded-pill px-3 py-2 w-50 border shadow-sm mx-3"
            style={{ background: 'var(--bg-primary)' }}
          >
            <Search size={18} className="text-secondary me-2" />
            <input
              type="text"
              className="form-control bg-transparent border-0 shadow-none p-0"
              placeholder="Search farm fresh products, subscriptions or heavy rentals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="d-flex align-items-center gap-3">
            <button
              onClick={toggleTheme}
              className="btn border border-secondary-subtle rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
            >
              {isDarkMode ? (
                <Sun size={18} className="text-warning" />
              ) : (
                <Moon size={18} className="text-dark" />
              )}
            </button>
            <div
              className="position-relative p-2 cursor-pointer border border-secondary-subtle rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
            >
              <ShoppingCart size={18} />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.65rem' }}
              >
                3
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Layout Block */}
      <div className="row mx-0 mt-4 px-4">
        <aside className="col-lg-3 mb-4">
          <div className="custom-card p-4 sticky-top" style={{ top: '100px' }}>
            <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <Filter size={18} className="text-success" /> Filter Catalog
            </h5>
            <hr className="my-3 text-muted" />

            <div className="mb-4">
              <label className="form-label fw-bold small text-uppercase tracking-wider text-muted">
                Categories
              </label>
              <select className="form-select shadow-sm">
                <option>All Categories</option>
                <option>Vegetables</option>
                <option>Dairy Essentials</option>
                <option>Heavy Equipment</option>
              </select>
            </div>

            <div>
              <label className="form-label fw-bold small text-uppercase tracking-wider text-muted mb-2">
                Deal Options
              </label>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkSub"
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="checkSub"
                >
                  Subscriptions (Daily/Monthly)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkRent"
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="checkRent"
                >
                  Machinery Rentals
                </label>
              </div>
            </div>
          </div>
        </aside>

        <main className="col-lg-9">
          <div className="row g-4">
            {mockProducts.map((prod) => (
              <div key={prod.id} className="col-md-6 col-xl-4">
                <div className="custom-card h-100 overflow-hidden d-flex flex-column">
                  <div
                    className="position-relative"
                    style={{ height: '200px' }}
                  >
                    <img
                      src={prod.img}
                      className="w-100 h-100 object-cover"
                      alt={prod.name}
                      style={{ objectFit: 'cover' }}
                    />
                    <span
                      className={`position-absolute top-3 start-3 badge px-3 py-2 shadow rounded-pill text-uppercase fw-bold`}
                      style={{
                        fontSize: '0.7rem',
                        backgroundColor:
                          prod.type === 'subscription'
                            ? '#0d6efd'
                            : prod.type === 'rental'
                              ? '#ffc107'
                              : '#198754',
                        color: prod.type === 'rental' ? '#212529' : '#ffffff',
                      }}
                    >
                      {prod.type}
                    </span>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="text-success small fw-bold text-uppercase tracking-wider">
                          {prod.category}
                        </span>
                        <span className="small d-flex align-items-center gap-1 fw-semibold text-warning">
                          <Star size={14} fill="currentColor" /> {prod.rating}
                        </span>
                      </div>
                      <h5 className="fw-bold text-truncate mb-3">
                        {prod.name}
                      </h5>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-2">
                      <span className="fs-4 fw-extrabold text-success">
                        {prod.price}
                      </span>
                      <button
                        className={`btn shadow-sm px-3 py-2 rounded-pill fw-semibold ${prod.type === 'rental' ? 'btn-warning text-dark' : 'btn-success'}`}
                        style={{ fontSize: '0.85rem' }}
                      >
                        {prod.type === 'rental' ? 'Rent Now' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clean Pagination controls */}
          <nav className="my-5 d-flex justify-content-center">
            <ul className="pagination shadow-sm rounded-pill overflow-hidden">
              <li className="page-item disabled">
                <a className="page-link border-0 px-4 py-2" href="#prev">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a
                  className="page-link bg-success border-0 px-4 py-2"
                  href="#1"
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-success border-0 px-4 py-2"
                  href="#2"
                >
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-success border-0 px-4 py-2"
                  href="#next"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    </div>
  );
}
