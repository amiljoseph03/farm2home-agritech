import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  LogOut,
  ShoppingBag,
  Repeat,
  Truck,
  Sun,
  Moon,
  Calendar,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function BuyerProfile() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('purchases');

  // Simulated buyer details (Would come from Auth context / LocalStorage)
  const [userProfile, setUserProfile] = useState({
    fullName: 'Amil Joseph',
    email: 'amil.joseph@example.com',
    phone: '+91 7902514737',
    role: 'Buyer',
    address: 'Kochi, Kerala, India',
    joinedDate: 'January 2026',
  });

  // Mock Purchased Items
  const purchases = [
    {
      id: 'ORD-8921',
      name: 'Fresh Farm Tomatoes',
      qty: '5 kg',
      price: '₹200',
      date: '2026-05-10',
      status: 'Delivered',
      seller: 'Green Valley Organic Farm',
      img: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=300',
    },
    {
      id: 'ORD-7712',
      name: 'Organic Honey Jar',
      qty: '1 kg',
      price: '₹450',
      date: '2026-05-02',
      status: 'Delivered',
      seller: 'Highland Bee Farms',
      img: 'https://images.unsplash.com/photo-1587049352847-81a56d773cae?auto=format&fit=crop&q=80&w=300',
    },
  ];

  // Mock Active Subscriptions
  const subscriptions = [
    {
      id: 'SUB-102',
      name: 'Organic Fresh Milk',
      frequency: 'Daily (Morning)',
      price: '₹50/day',
      startDate: '2026-02-01',
      nextDelivery: 'Tomorrow, 6:30 AM',
      status: 'Active',
      img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300',
    },
  ];

  // Mock Machinery Rentals
  const rentals = [
    {
      id: 'RNT-404',
      name: 'Premium Mahindra Tractor',
      duration: '2 Days',
      totalAmount: '₹2400',
      bookingDate: '2026-04-18',
      status: 'Completed',
      img: 'https://images.unsplash.com/photo-1594136976652-32130310243b?auto=format&fit=crop&q=80&w=300',
    },
  ];

  const handleLogout = () => {
    // Clear user session / tokens
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="container-fluid p-0 min-vh-100">
      {/* Top Bar */}
      <nav className="navbar navbar-expand-lg px-4 py-3 custom-card sticky-top rounded-0 border-top-0 border-start-0 border-end-0">
        <div className="container-fluid px-0 d-flex justify-content-between align-items-center">
          <span className="navbar-brand fw-extrabold fs-3 text-success m-0 tracking-tight">
            <i className="bi bi-sprout-fill me-2"></i>farm2home
          </span>

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

            <button
              onClick={handleLogout}
              className="btn btn-outline-danger d-flex align-items-center gap-2 rounded-pill px-3 py-2 fw-semibold"
              style={{ fontSize: '0.85rem' }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Profile Header Card */}
      <div className="container mt-4">
        <div className="custom-card p-4 rounded-4 shadow-sm">
          <div className="row align-items-center g-4">
            <div className="col-auto">
              <div
                className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-2 shadow-sm"
                style={{ width: '80px', height: '80px' }}
              >
                {userProfile.fullName.charAt(0)}
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center gap-2 mb-1">
                <h3 className="fw-bold m-0">{userProfile.fullName}</h3>
                <span
                  className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-1 text-uppercase fw-semibold"
                  style={{ fontSize: '0.75rem' }}
                >
                  <ShieldCheck size={14} className="me-1 mb-1" />
                  {userProfile.role}
                </span>
              </div>
              <p className="text-muted small mb-2 d-flex align-items-center gap-1">
                <Calendar size={14} /> Member since {userProfile.joinedDate}
              </p>

              <div className="d-flex flex-wrap gap-4 text-secondary small">
                <span className="d-flex align-items-center gap-1">
                  <Mail size={15} className="text-success" />{' '}
                  {userProfile.email}
                </span>
                <span className="d-flex align-items-center gap-1">
                  <Phone size={15} className="text-success" />{' '}
                  {userProfile.phone}
                </span>
                <span className="d-flex align-items-center gap-1">
                  <MapPin size={15} className="text-success" />{' '}
                  {userProfile.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="d-flex gap-2 my-4 border-bottom pb-2 overflow-auto">
          <button
            onClick={() => setActiveTab('purchases')}
            className={`btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-semibold ${
              activeTab === 'purchases' ? 'btn-success' : 'btn-light border'
            }`}
          >
            <ShoppingBag size={18} /> Orders & Purchases ({purchases.length})
          </button>
          <button
            onClick={() => setActiveTab('subscriptions')}
            className={`btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-semibold ${
              activeTab === 'subscriptions' ? 'btn-success' : 'btn-light border'
            }`}
          >
            <Repeat size={18} /> Active Subscriptions ({subscriptions.length})
          </button>
          <button
            onClick={() => setActiveTab('rentals')}
            className={`btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-semibold ${
              activeTab === 'rentals' ? 'btn-success' : 'btn-light border'
            }`}
          >
            <Truck size={18} /> Machinery Rentals ({rentals.length})
          </button>
        </div>

        {/* Tab Contents */}
        <div className="mb-5">
          {/* 1. PURCHASES TAB */}
          {activeTab === 'purchases' && (
            <div className="row g-3">
              {purchases.map((item) => (
                <div key={item.id} className="col-12">
                  <div className="custom-card p-3 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                    <div className="d-flex align-items-center gap-3 w-100">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="rounded-3"
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'cover',
                        }}
                      />
                      <div>
                        <span className="text-muted extra-small">
                          ID: {item.id}
                        </span>
                        <h6 className="fw-bold mb-1">{item.name}</h6>
                        <p className="text-muted small mb-0">
                          Seller: {item.seller}
                        </p>
                        <span className="badge bg-secondary-subtle text-dark mt-1">
                          Qty: {item.qty}
                        </span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between w-100 justify-content-md-end gap-4">
                      <div className="text-md-end">
                        <span className="fw-extrabold text-success fs-5">
                          {item.price}
                        </span>
                        <p className="text-muted small mb-0">{item.date}</p>
                      </div>
                      <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill d-flex align-items-center gap-1">
                        <CheckCircle2 size={14} /> {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. SUBSCRIPTIONS TAB */}
          {activeTab === 'subscriptions' && (
            <div className="row g-3">
              {subscriptions.map((sub) => (
                <div key={sub.id} className="col-12">
                  <div className="custom-card p-3 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 border-start border-4 border-primary">
                    <div className="d-flex align-items-center gap-3 w-100">
                      <img
                        src={sub.img}
                        alt={sub.name}
                        className="rounded-3"
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'cover',
                        }}
                      />
                      <div>
                        <span className="badge bg-primary-subtle text-primary mb-1">
                          {sub.frequency}
                        </span>
                        <h6 className="fw-bold mb-1">{sub.name}</h6>
                        <p className="text-muted small mb-0">
                          <Clock size={14} className="me-1" /> Next Batch:{' '}
                          <strong>{sub.nextDelivery}</strong>
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between w-100 justify-content-md-end gap-3">
                      <div className="text-md-end">
                        <span className="fw-extrabold text-primary fs-5">
                          {sub.price}
                        </span>
                        <p className="text-muted small mb-0">
                          Started: {sub.startDate}
                        </p>
                      </div>
                      <button className="btn btn-outline-danger btn-sm rounded-pill px-3">
                        Pause Subscription
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. RENTALS TAB */}
          {activeTab === 'rentals' && (
            <div className="row g-3">
              {rentals.map((rental) => (
                <div key={rental.id} className="col-12">
                  <div className="custom-card p-3 rounded-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 border-start border-4 border-warning">
                    <div className="d-flex align-items-center gap-3 w-100">
                      <img
                        src={rental.img}
                        alt={rental.name}
                        className="rounded-3"
                        style={{
                          width: '80px',
                          height: '80px',
                          objectFit: 'cover',
                        }}
                      />
                      <div>
                        <span className="badge bg-warning-subtle text-dark mb-1">
                          Rental
                        </span>
                        <h6 className="fw-bold mb-1">{rental.name}</h6>
                        <p className="text-muted small mb-0">
                          Duration: {rental.duration}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between w-100 justify-content-md-end gap-4">
                      <div className="text-md-end">
                        <span className="fw-extrabold text-dark fs-5">
                          {rental.totalAmount}
                        </span>
                        <p className="text-muted small mb-0">
                          Booked: {rental.bookingDate}
                        </p>
                      </div>
                      <span className="badge bg-secondary-subtle text-dark px-3 py-2 rounded-pill">
                        {rental.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
