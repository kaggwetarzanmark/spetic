import React from 'react';
import Link from 'next/link';
import { Phone, Check } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Resources & Transparent Rates | Septic Wranglers | Austin, TX',
  description: 'Published septic pumping rates, system education, and answers to your biggest septic questions from Austin’s Septic Wranglers.',
};

export default function ResourcesPage() {
  const publishedRates = [
    {
      service: '1,000-Gallon Tank Vacuum Pumping',
      rate: '$395 – $475',
      includes: 'Complete bottom-sludge and scum evacuation with 2,500-gal vacuum rig, back-flush agitation, dual baffle check, and TCEQ disposal manifest.'
    },
    {
      service: '1,500-Gallon Tank Vacuum Pumping',
      rate: '$485 – $575',
      includes: 'Full volume evacuation for 4–5 bedroom homes and large Texas properties, crust break, and effluent filter cleanout.'
    },
    {
      service: 'Real Estate / Pre-Sale Title Inspection',
      rate: '$450 – $650',
      includes: 'Thorough uncovering, hydraulic load evaluation, distribution box assessment, and formal buyer/seller report.'
    },
    {
      service: 'Riser & Child-Safe Airtight Lid Retrofit',
      rate: '$295 – $450',
      includes: 'Permanent Polylok green riser brought flush with your lawn so you never have to dig up grass again.'
    },
    {
      service: 'Emergency Drain Line Clearing & Jetting',
      rate: '$350 – $600',
      includes: 'High-pressure hydro-jetting to clear heavy grease or roots, plus fiber-optic camera scoping.'
    }
  ];

  return (
    <div>
      {/* 1. HERO INTRO */}
      <section className="band-cream section-spacing" style={{ paddingTop: '88px', paddingBottom: '72px' }}>
        <div className="container">
          <div style={{ maxWidth: '880px' }}>
            <span className="section-kicker">EDUCATE CUSTOMERS</span>
            <h1 style={{ marginBottom: '24px' }}>
              STRAIGHTFORWARD RATES. NO MYSTERIES.
            </h1>
            <div className="rustic-pullquote">
              Rule #2 we live by: Fair prices. Published rates. No surprise add-ons. If it costs more than our quote, we eat the difference. Here is what septic care actually costs in Central Texas.
            </div>
          </div>
        </div>
      </section>

      {/* 2. PUBLISHED RATES TABLE (TAN BAND) */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span className="section-kicker">PUBLISHED PRICE GUIDE</span>
            <h2>OUR TRANSPARENT RATE SCHEDULE</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {publishedRates.map((item) => (
              <div 
                key={item.service}
                className="value-card"
                style={{ backgroundColor: 'var(--bg-cream-card)', padding: '28px 32px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.45rem', color: 'var(--text-dark)' }}>
                    {item.service}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--accent-rust)', letterSpacing: '0.04em' }}>
                    {item.rate}
                  </div>
                </div>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-dark)', margin: 0 }}>
                  {item.includes}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <a href="tel:5129762266" className="btn-rust">
              CALL 512-976-2266 TO LOCK IN YOUR RATE
            </a>
          </div>
        </div>
      </section>

      {/* 3. HOMEOWNER FAQ (CREAM BAND) */}
      <section className="band-cream section-spacing">
        <div className="container">
          <div style={{ marginBottom: '44px' }}>
            <span className="section-kicker">COMMONLY ASKED QUESTIONS</span>
            <h2>TEXAS HOMEOWNER SEPTIC FAQ</h2>
          </div>

          <div style={{ maxWidth: '880px' }}>
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <section className="band-dark" style={{ padding: '96px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: 'var(--text-light)', marginBottom: '14px' }}>
            GOT A TANK OR A QUESTION?
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--text-light-muted)', marginBottom: '32px' }}>
            A real Wrangler is on the other end of this number — not a call center.
          </p>
          <div>
            <a 
              href="tel:5129762266" 
              className="btn-rust"
              style={{ fontSize: '1.45rem', padding: '16px 36px' }}
            >
              CALL 512-976-2266
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
