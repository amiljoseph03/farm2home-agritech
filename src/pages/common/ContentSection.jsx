import React from 'react';
import { ShoppingBag, Tractor, ArrowRight, ShieldCheck } from 'lucide-react';
import './ContentSection.css';

export default function ContentSection({ onExplore }) {
  const categories = [
    {
      id: 1,
      title: 'Fresh Farm Produce',
      tagline: 'DIRECT FROM LOCAL FIELDS',
      desc: 'Buy directly from local growers. Access organic seasonal vegetables, crisp fruits, and staples harvested daily with zero broker margins.',
      image:
        'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600',
      icon: <ShoppingBag size={20} className="text-success" />,
      actionText: 'Explore Marketplace',
    },
    {
      id: 2,
      title: 'Daily Subscriptions',
      tagline: 'AUTOMATED MORNING DROPS',
      desc: 'Lock in standard routine essentials. Get pure unadulterated cow milk, fresh poultry eggs, and greens dropped at your doorstep by 6:30 AM.',
      image:
        'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600',
      icon: <ShieldCheck size={20} className="text-primary" />,
      actionText: 'Setup Subscription',
    },
    {
      id: 3,
      title: 'Equipment Rental',
      tagline: 'HEAVY MACHINERY FLEET',
      desc: 'Access advanced agricultural machinery without high capital investments. Rent tractors, tillers, and sprayers directly by the operational hour.',
      image:
        'https://images.unsplash.com/photo-1594136976652-32130310243b?auto=format&fit=crop&q=80&w=600',
      icon: <Tractor size={20} className="text-warning" />,
      actionText: 'Check Fleet Schedule',
    },
  ];

  return (
    <section className="py-5 container ecosystem-section">
      {/* Dynamic Modern Section Title Block */}
      <div className="text-center max-w-2xl mx-auto mb-5">
        <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-bold text-uppercase mb-2 tracking-wider">
          Platform Ecosystem
        </span>
        <h2 className="fw-extrabold tracking-tight display-6 text-dark mb-3">
          One Unified Platform. Dual Solutions.
        </h2>
        <p className="text-muted fs-6">
          Empowering regional agriculturists while delivering supreme
          convenience and transparent supply links straight to your
          neighborhood.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="row g-4 justify-content-center">
        {categories.map((item) => (
          <div key={item.id} className="col-12 col-lg-4 col-md-6">
            <div className="modern-ecosystem-card h-100 d-flex flex-column overflow-hidden border bg-white shadow-sm">
              {/* Image Banner Section */}
              <div
                className="position-relative overflow-hidden card-image-viewport"
                style={{ height: '200px' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-100 h-100 object-fit-cover ecosystem-img"
                />
                <div className="gradient-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                <div className="position-absolute bottom-3 start-3 d-flex align-items-center gap-2 glass-pill px-3 py-1.5 rounded-pill text-white border border-white-50">
                  {item.icon}
                  <span className="fw-bold small tracking-wide">
                    {item.tagline}
                  </span>
                </div>
              </div>

              {/* Text / Actions Info Section */}
              <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                <div>
                  <h4 className="fw-extrabold text-dark tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted small lh-lg mb-4">{item.desc}</p>
                </div>

                <button
                  onClick={onExplore}
                  className="btn btn-outline-success w-100 rounded-pill py-2 fw-bold d-flex align-items-center justify-content-center gap-2 call-action-trigger"
                >
                  {item.actionText}{' '}
                  <ArrowRight size={16} className="transition-arrow" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
