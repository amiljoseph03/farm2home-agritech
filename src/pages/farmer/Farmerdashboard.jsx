import React from 'react';
import {
  DollarSign,
  Tractor,
  ShoppingBag,
  Download,
  ArrowUpRight,
} from 'lucide-react';

export default function FarmerDashboard() {
  const cards = [
    {
      title: 'Product Revenue',
      value: '₹24,500',
      icon: <DollarSign size={22} className="text-success" />,
      desc: 'Combined grocery item orders',
      pct: '+12% this week',
    },
    {
      title: 'Machinery Rental Earnings',
      value: '₹12,800',
      icon: <Tractor size={22} className="text-warning" />,
      desc: 'Tractor lease contracts',
      pct: '+8% this week',
    },
    {
      title: 'Active Bookings Queue',
      value: '8 Slots Allocated',
      icon: <ShoppingBag size={22} className="text-info" />,
      desc: 'Upcoming active rentals',
      pct: 'Stable',
    },
  ];

  return (
    <div className="container-fluid p-4 min-vh-100">
      {/* Top Controls Admin Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom gap-3">
        <div>
          <h2 className="fw-extrabold tracking-tight mb-1">
            <i className="bi bi-grid-1x2-fill text-success me-2"></i>Farmer
            Central Console
          </h2>
          <p className="text-muted m-0">
            Review daily recurring distributions, active equipment leases, and
            financial metrics.
          </p>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div
            className="btn-group shadow-sm bg-white rounded-pill p-1 border"
            style={{ background: 'var(--bg-card)' }}
          >
            <button
              type="button"
              className="btn btn-sm rounded-pill px-3 btn-success"
            >
              Daily
            </button>
            <button
              type="button"
              className="btn btn-sm rounded-pill px-3 text-muted border-0"
            >
              Weekly
            </button>
            <button
              type="button"
              className="btn btn-sm rounded-pill px-3 text-muted border-0"
            >
              Monthly
            </button>
          </div>
          <button className="btn btn-success d-flex align-items-center gap-2 px-4 py-2 shadow-sm rounded-pill fw-semibold">
            <Download size={16} /> Export Statement (.PDF)
          </button>
        </div>
      </div>

      {/* Structured Metrics Info Grid Block */}
      <div className="row g-4 mb-4">
        {cards.map((card, i) => (
          <div key={i} className="col-12 col-md-4">
            <div className="custom-card p-4 d-flex align-items-start justify-content-between h-100">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <span className="text-muted small fw-bold text-uppercase tracking-wider d-block mb-1">
                    {card.title}
                  </span>
                  <h1 className="fw-extrabold m-0 tracking-tight my-2">
                    {card.value}
                  </h1>
                </div>
                <div className="mt-3">
                  <span
                    className="badge bg-success-subtle text-success rounded-pill px-2.5 py-1 small fw-bold mb-1 d-inline-flex align-items-center gap-1"
                    style={{ fontSize: '0.75rem' }}
                  >
                    <ArrowUpRight size={12} /> {card.pct}
                  </span>
                  <p className="small text-muted m-0 mt-1">{card.desc}</p>
                </div>
              </div>
              <div
                className="p-3 rounded-4 border shadow-sm"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live Operational Order Requests Datatable Block */}
      <div className="custom-card p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="fw-extrabold m-0">
            Incoming Order & Reservation Verification Pipeline
          </h5>
          <span className="badge bg-danger rounded-pill px-3 py-1.5 fw-bold animate-pulse">
            2 Action Required
          </span>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle border-0">
            <thead>
              <tr className="text-muted border-bottom">
                <th className="py-3 border-0">Client Node</th>
                <th className="py-3 border-0">Item Description</th>
                <th className="py-3 border-0">Classification Type</th>
                <th className="py-3 border-0">Calculated Value</th>
                <th className="py-3 border-0">Allocated Cycle / Slots</th>
                <th className="py-3 border-0 text-end">Action Interface</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-bottom">
                <td className="py-3 fw-bold text-success">#US-8902</td>
                <td className="py-3 fw-semibold">High-Pressure Sprayer Pump</td>
                <td className="py-3">
                  <span className="badge bg-warning-subtle text-warning-emphasis border border-warning rounded-pill px-3 py-1">
                    Rental System
                  </span>
                </td>
                <td className="py-3 fw-bold">₹450</td>
                <td className="py-3 text-muted small">
                  June 28 (09:00 AM - 05:00 PM)
                </td>
                <td className="py-3 text-end">
                  <button className="btn btn-success btn-sm me-2 px-3 rounded-pill fw-semibold shadow-sm">
                    Accept
                  </button>
                  <button className="btn btn-outline-danger btn-sm px-3 rounded-pill fw-semibold">
                    Reject
                  </button>
                </td>
                
              </tr>
              <tr className="border-bottom">
                <td className="py-3 fw-bold text-success">#US-7711</td>
                <td className="py-3 fw-semibold">Farm Fresh Eggs (1 Dozen)</td>
                <td className="py-3">
                  <span className="badge bg-primary-subtle text-primary-emphasis border border-primary rounded-pill px-3 py-1">
                    Daily Subscription
                  </span>
                </td>
                <td className="py-3 fw-bold">₹1,800/mo</td>
                <td className="py-3 text-muted small">
                  Every morning delivery (07:00 AM)
                </td>
                <td className="py-3 text-end">
                  <button className="btn btn-success btn-sm me-2 px-3 rounded-pill fw-semibold shadow-sm">
                    Accept
                  </button>
                  <button className="btn btn-outline-danger btn-sm px-3 rounded-pill fw-semibold">
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
