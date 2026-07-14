import React from 'react';
import { ShoppingBag, Tractor, ShieldCheck, ArrowRight } from 'lucide-react';
import './ContentSection.css';

export default function ContentSection({ onExplore }) {
  return (
    <section className="diet-ecosystem-section py-5 overflow-hidden bg-light position-relative">
      {/* Decorative Horizon Connecting Path Line */}
      <div className="orbit-horizon-line d-none d-md-block position-absolute start-0 end-0 top-50 translate-middle-y"></div>

      <div className="container position-relative z-3">
        {/* Modern Minimalistic Section Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-5 pb-2">
          <span className="badge-pill-accent text-uppercase tracking-widest px-3 py-1.5 rounded-pill mb-2 d-inline-block">
            Yestone Agriculture Ecosystem
          </span>
          <h2 className="serif-font display-6 fw-normal text-teal-dark">
            Our Automated{' '}
            <span className="fw-light text-muted">Field-To-Fork</span> Cycle
          </h2>
        </div>

        {/* Horizontal Circular Nodes Matrix */}
        <div className="row justify-content-center g-4 g-lg-5 position-relative">
          {/* Node 01: Fresh Produce */}
          <div className="col-12 col-md-4">
            <div className="orbit-node-wrapper text-center">
              <div className="circle-orbit-frame mx-auto position-relative mb-4 shadow">
                {/* Visual Ripple Micro-animation Layers */}
                <div className="pulse-ring-layer layer-1"></div>
                <div className="pulse-ring-layer layer-2"></div>

                <div className="circle-inner-viewport rounded-circle overflow-hidden w-100 h-100">
                  <img
                    src="https://i.pinimg.com/736x/6f/a7/d3/6fa7d351428e229f6005f8c88f75685f.jpg"
                    alt="Marketplace"
                    className="w-100 h-100 object-fit-cover node-img-asset"
                  />
                </div>
                {/* Floating Micro-Badge */}
                <div className="floating-node-badge bg-success shadow-sm text-white">
                  <ShoppingBag size={16} />
                </div>
              </div>

              {/* Text Layer */}
              <div className="px-3 text-node-content">
                <span className="d-block small text-success fw-bold tracking-widest text-uppercase mb-1">
                  01. Direct Harvests
                </span>
                <h4 className="fw-bold text-dark fs-5 mb-2">
                  Fresh Farm Produce
                </h4>
                <p
                  className="small text-muted lh-base mb-3 mx-auto"
                  style={{ maxWidth: '280px' }}
                >
                  Buy directly from local growers. Access organic seasonal
                  vegetables and fruits harvested daily with zero broker
                  margins.
                </p>
                <button
                  onClick={onExplore}
                  className="btn-node-trigger small text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  Explore Marketplace{' '}
                  <ArrowRight size={14} className="arrow-shift" />
                </button>
              </div>
            </div>
          </div>

          {/* Node 02: Daily Subscriptions */}
          <div className="col-12 col-md-4">
            <div className="orbit-node-wrapper text-center">
              <div className="circle-orbit-frame mx-auto position-relative mb-4 shadow">
                <div className="pulse-ring-layer layer-1"></div>
                <div className="pulse-ring-layer layer-2"></div>

                <div className="circle-inner-viewport rounded-circle overflow-hidden w-100 h-100">
                  <img
                    src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400"
                    alt="Subscriptions"
                    className="w-100 h-100 object-fit-cover node-img-asset"
                  />
                </div>
                <div className="floating-node-badge bg-primary shadow-sm text-white">
                  <ShieldCheck size={16} />
                </div>
              </div>

              <div className="px-3 text-node-content">
                <span className="d-block small text-primary fw-bold tracking-widest text-uppercase mb-1">
                  02. Morning Drops
                </span>
                <h4 className="fw-bold text-dark fs-5 mb-2">
                  Daily Subscriptions
                </h4>
                <p
                  className="small text-muted lh-base mb-3 mx-auto"
                  style={{ maxWidth: '280px' }}
                >
                  Get pure cow milk, fresh poultry eggs, and greens dropped
                  straight at your doorstep every morning safely by 6:30 AM.
                </p>
                <button
                  onClick={onExplore}
                  className="btn-node-trigger small text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  Setup Subscription{' '}
                  <ArrowRight size={14} className="arrow-shift" />
                </button>
              </div>
            </div>
          </div>

          {/* Node 03: Heavy Machinery */}
          <div className="col-12 col-md-4">
            <div className="orbit-node-wrapper text-center">
              <div className="circle-orbit-frame mx-auto position-relative mb-4 shadow">
                <div className="pulse-ring-layer layer-1"></div>
                <div className="pulse-ring-layer layer-2"></div>

                <div className="circle-inner-viewport rounded-circle overflow-hidden w-100 h-100">
                  <img
                    src="https://i.pinimg.com/736x/fd/2d/b2/fd2db204203b2ae81137e93318d6c2d7.jpg"
                    alt="Equipment"
                    className="w-100 h-100 object-fit-cover node-img-asset"
                  />
                </div>
                <div className="floating-node-badge bg-warning shadow-sm text-white">
                  <Tractor size={16} />
                </div>
              </div>

              <div className="px-3 text-node-content">
                <span className="d-block small text-warning fw-bold tracking-widest text-uppercase mb-1">
                  03. Heavy Logistics
                </span>
                <h4 className="fw-bold text-dark fs-5 mb-2">
                  Equipment Rental
                </h4>
                <p
                  className="small text-muted lh-base mb-3 mx-auto"
                  style={{ maxWidth: '280px' }}
                >
                  Access advanced agricultural machinery without capital
                  investment. Rent tractors and tillers by the operational hour.
                </p>
                <button
                  onClick={onExplore}
                  className="btn-node-trigger small text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  Check Fleet Schedule{' '}
                  <ArrowRight size={14} className="arrow-shift" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
