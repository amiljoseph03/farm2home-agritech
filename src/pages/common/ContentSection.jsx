import React from 'react';
import { ShoppingBag, Tractor, ArrowRight, ShieldCheck } from 'lucide-react';
import './ContentSection.css';

export default function ContentSection({ onExplore }) {
  const categories = [
    {
      id: '01',
      title: 'Fresh Farm Produce',
      tagline: 'DIRECT FROM LOCAL FIELDS',
      desc: 'Buy directly from local growers. Access organic seasonal vegetables, crisp fruits, and staples harvested daily with zero broker margins.',
      image:
        'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80&w=600',
      icon: <ShoppingBag size={24} className="text-success" />,
      actionText: 'Explore Marketplace',
    },
    {
      id: '02',
      title: 'Daily Subscriptions',
      tagline: 'AUTOMATED MORNING DROPS',
      desc: 'Lock in standard routine essentials. Get pure unadulterated cow milk, fresh poultry eggs, and greens dropped at your doorstep by 6:30 AM.',
      image:
        'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=600',
      icon: <ShieldCheck size={24} className="text-primary" />,
      actionText: 'Setup Subscription',
    },
    {
      id: '03',
      title: 'Equipment Rental',
      tagline: 'HEAVY MACHINERY FLEET',
      desc: 'Access advanced agricultural machinery without high capital investments. Rent tractors, tillers, and sprayers directly by the operational hour.',
      image:
        'https://images.unsplash.com/photo-1594136976652-32130310243b?auto=format&fit=crop&q=80&w=600',
      icon: <Tractor size={24} className="text-warning" />,
      actionText: 'Check Fleet Schedule',
    },
  ];

  return (
    <section className="py-5 ecosystem-section overflow-hidden position-relative">
      {/* Decorative Background Accents */}
      <div className="abstract-bg-shape position-absolute top-0 start-0 translate-middle-y"></div>

      <div className="container position-relative z-2">
        {/* Minimal High-Impact Section Title */}
        <div className="row align-items-end mb-5 pb-3">
          <div className="col-lg-6">
            <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-bold text-uppercase mb-3 tracking-wider unique-badge">
              Platform Architecture
            </span>
            <h2 className="fw-black display-5 text-dark tracking-tight mb-0 heading-split">
              One Unified Platform.
              <br />
              <span className="text-success">Dual Solutions.</span>
            </h2>
          </div>
          <div className="col-lg-5 offset-lg-1 mt-3 mt-lg-0">
            <p className="text-muted border-start border-2 ps-3 py-1 fs-6 lh-lg mb-0">
              Empowering regional agriculturists while delivering supreme
              convenience and transparent supply links straight to your
              neighborhood.
            </p>
          </div>
        </div>

        {/* Asymmetric Alternating Layout */}
        <div className="d-flex flex-column gap-5 pt-4">
          {categories.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`row align-items-center g-0 unique-row-block ${isEven ? '' : 'flex-row-reverse'}`}
              >
                {/* Visual Image Segment with Angled Cut */}
                <div className="col-md-6 col-lg-7 position-relative">
                  <div
                    className={`img-asymmetric-wrapper ${isEven ? 'skew-right' : 'skew-left'}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100 h-100 object-fit-cover unique-img-asset"
                    />
                    <div className="unique-vignette"></div>
                  </div>
                </div>

                {/* Overlapping Content Box Segment */}
                <div className="col-md-6 col-lg-5 position-relative z-3">
                  <div
                    className={`unique-floating-card p-4 p-lg-5 shadow-lg bg-white border ${isEven ? 'offset-content-left' : 'offset-content-right'}`}
                  >
                    {/* Big Decorative Number & Floating Icon */}
                    <div className="d-flex justify-content-between align-items-start mb-4">
                      <div className="icon-shield-frame p-3 bg-light rounded-4">
                        {item.icon}
                      </div>
                      <span className="display-4 fw-black text-light-stroke select-none">
                        {item.id}
                      </span>
                    </div>

                    <span className="d-block text-success small fw-extrabold tracking-widest text-uppercase mb-2">
                      {item.tagline}
                    </span>
                    <h3 className="fw-black text-dark tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted small lh-lg mb-4">{item.desc}</p>

                    <button
                      onClick={onExplore}
                      className="btn btn-unique-action d-inline-flex align-items-center justify-content-between w-100 rounded-4 p-3 fw-bold"
                    >
                      <span>{item.actionText}</span>
                      <div className="action-circle-arrow bg-success text-white d-flex align-items-center justify-content-center rounded-circle">
                        <ArrowRight size={16} className="arrow-svg" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
