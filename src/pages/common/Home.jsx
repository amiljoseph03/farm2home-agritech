import React from 'react';
import Header from './Header';
import Hero from './Hero';
// import ContentSection from './ContentSection';

export default function Home({ onExplore, onJoinAsFarmer }) {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* 1. Header Navigation Fragment */}
      <Header onExplore={onExplore} onJoinAsFarmer={onJoinAsFarmer} />

      {/* 2. Banner and Search Fragment */}
      <Hero onExplore={onExplore} />

      {/* 3. Core Operational Features Grid */}
      {/* <ContentSection onExplore={onExplore} /> */}

      {/* Simple Footer directly at base */}
      <footer className="bg-dark text-secondary text-center py-4 mt-auto">
        <small>
          © 2026 farm2home marketplace ecosystem. All rights reserved.
        </small>
      </footer>
    </div>
  );
}
