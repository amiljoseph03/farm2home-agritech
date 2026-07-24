import React from 'react';
import { Droplet, Sprout, Leaf } from 'lucide-react';
import './WhyWeAre.css';

export default function WhyWeAre() {
  return (
    <section className="why-we-are-section py-5 text-center">
      <div className="container py-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-5 header-wrapper">
          <h2 className="display-5 fw-bold tracking-tight text-dark mb-3 why-title">
            Why We Are
          </h2>
          <p className="text-muted fs-6 px-lg-5 why-desc">
            Turning field waste into clean energy and organic fertilizers, we
            create a sustainable future while reducing landfill pollution and
            carbon emissions.
          </p>
        </div>

        {/* Alternating Asymmetric Grid Matrix */}
        <div className="row g-4 justify-content-center grid-matrix">
          {/* COLUMN 1 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column gap-4">
            {/* Top: Image Card */}
            <div className="why-card image-card overflow-hidden ratio ratio-4x3">
              <img
                src="https://i.pinimg.com/736x/8a/f7/cc/8af7cc2dba49627555107e3ce20b6dec.jpg"
                alt="Saves Water"
                className="w-100 h-100 object-fit-cover matrix-img"
              />
            </div>
            {/* Bottom: Text Card */}
            <div className="why-card text-card p-4 d-flex flex-column align-items-center justify-content-center">
              <div className="icon-badge-circle mb-3 text-success">
                <Droplet size={24} />
              </div>
              <h4 className="fw-bold fs-5 text-dark mb-2">
                Saves Water & Resources
              </h4>
              <p className="small text-muted mb-0">
                We create a sustainable future while reducing landfill pollution
                and carbon emissions.
              </p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column flex-column-reverse flex-lg-column gap-4">
            {/* Top (on Desktop): Text Card */}
            <div className="why-card text-card p-4 d-flex flex-column align-items-center justify-content-center order-2 order-lg-1">
              <div className="icon-badge-circle mb-3 text-success">
                <Sprout size={24} />
              </div>
              <h4 className="fw-bold fs-5 text-dark mb-2">
                Promotes Soil Health
              </h4>
              <p className="small text-muted mb-0">
                We create a sustainable future while reducing landfill pollution
                and carbon emissions.
              </p>
            </div>
            {/* Bottom (on Desktop): Image Card */}
            <div className="why-card image-card overflow-hidden ratio ratio-4x3 order-1 order-lg-2">
              <img
                src="https://i.pinimg.com/1200x/a8/83/0b/a8830b0435925c51565b9cce263b341e.jpg"
                alt="Promotes Soil Health"
                className="w-100 h-100 object-fit-cover matrix-img"
              />
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column gap-4">
            {/* Top: Image Card */}
            <div className="why-card image-card overflow-hidden ratio ratio-4x3">
              <img
                src="https://i.pinimg.com/736x/be/4c/a5/be4ca5986ad71ba5779a68e2a7ffc689.jpg"
                alt="Decrease Carbon"
                className="w-100 h-100 object-fit-cover matrix-img"
              />
            </div>
            {/* Bottom: Text Card */}
            <div className="why-card text-card p-4 d-flex flex-column align-items-center justify-content-center">
              <div className="icon-badge-circle mb-3 text-success">
                <Leaf size={24} />
              </div>
              <h4 className="fw-bold fs-5 text-dark mb-2">Decrease Carbon</h4>
              <p className="small text-muted mb-0">
                We create a sustainable future while reducing landfill pollution
                and carbon emissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

