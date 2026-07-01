import React from 'react';
import { ShoppingBag, Tractor, ArrowRight } from 'lucide-react';
import './ContentSection.css';

export default function ContentSection({ onExplore }) {
  return (
    <section className="py-5 container content-blocks">
      <div className="text-center max-w-xl mx-auto mb-5">
        <h2 className="fw-extrabold tracking-tight">
          One Unified Platform. Dual Solutions.
        </h2>
        <p className="text-muted">
          Empowering local agriculturalists while creating supreme convenience
          for households.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="custom-card feature-box p-5 h-100 border-start border-success border-4">
            <div className="text-success mb-3">
              <ShoppingBag size={40} />
            </div>
            <h3 className="fw-bold mb-2">The Fresh Marketplace</h3>
            <p className="text-muted mb-4">
              Buy direct structural staples from verified neighborhood farmers.
              Choose flexible single-orders or lock in daily/monthly
              customizable subscription channels.
            </p>
            <button
              onClick={onExplore}
              className="btn p-0 text-success fw-bold d-flex align-items-center gap-2 border-0 bg-transparent cta-link"
            >
              Explore Products <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="custom-card feature-box p-5 h-100 border-start border-warning border-4">
            <div className="text-warning mb-3">
              <Tractor size={40} />
            </div>
            <h3 className="fw-bold mb-2">Equipment Rental Fleet</h3>
            <p className="text-muted mb-4">
              Browse tractors, sprayers, and motor pumps listed directly by
              nearby farmers. Book hourly or daily operational slots with clear
              live availability calendars.
            </p>
            <button
              onClick={onExplore}
              className="btn p-0 text-warning fw-bold d-flex align-items-center gap-2 border-0 bg-transparent cta-link"
            >
              Check Availability <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
