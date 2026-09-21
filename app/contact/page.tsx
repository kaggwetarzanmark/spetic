import React from 'react';
import { Phone, MapPin, Clock, Mail, ShieldAlert } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: 'Contact & Dispatch | Septic Wranglers | Austin, TX',
  description: 'Call 512-976-2266 to reach Septic Wranglers. Local septic pumping, inspections, and repairs in Austin and the Texas Hill Country.',
};

export default function ContactPage() {
  return (
    <div>
      {/* 1. HERO INTRO */}
      <section className="band-cream section-spacing" style={{ paddingTop: '88px', paddingBottom: '72px' }}>
        <div className="container">
          <div style={{ maxWidth: '880px' }}>
            <span className="section-kicker">TALK TO A REAL WRANGLER</span>
            <h1 style={{ marginBottom: '24px' }}>
              GET IN TOUCH WITH THE CREW.
            </h1>
            <div className="rustic-pullquote">
              We don&apos;t route your calls to an out-of-state call center. When you dial 512-976-2266, you get a real person who knows Central Texas soil and can dispatch a pumper truck to your property.
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORM & DIRECT CONTACT CARDS */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
            
            {/* BOOKING FORM */}
            <div style={{ gridColumn: 'span 2' }}>
              <BookingForm />
            </div>

            {/* CONTACT DETAILS CARDS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              
              <div className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)', padding: '32px' }}>
                <span className="section-kicker">DIRECT PHONE LINE</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>CALL US ANYTIME</h3>
                <a 
                  href="tel:5129762266"
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '2.4rem', 
                    color: 'var(--accent-rust)', 
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: '12px',
                    lineHeight: 1
                  }}
                >
                  512-976-2266
                </a>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-dark)', marginBottom: '16px' }}>
                  Have a backed up toilet or an alarm going off? We answer 7 days a week.
                </p>
                <a href="tel:5129762266" className="btn-rust" style={{ width: '100%', justifyContent: 'center' }}>
                  CALL 512-976-2266
                </a>
              </div>

              <div className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)', padding: '32px' }}>
                <span className="section-kicker">DISPATCH HOURS</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '14px' }}>WHEN OUR TRUCKS ROLL</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.98rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-tan)', paddingBottom: '8px' }}>
                    <span>Monday – Sunday:</span>
                    <strong>7:00 AM – 7:00 PM</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-tan)', paddingBottom: '8px' }}>
                    <span>Emergency Overflows:</span>
                    <strong style={{ color: 'var(--accent-rust)' }}>24/7 On-Call</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '4px' }}>
                    <span>Email Dispatch:</span>
                    <span>info@septicwranglers.com</span>
                  </div>
                </div>
              </div>

              <div className="value-card" style={{ backgroundColor: 'var(--bg-dark-brown)', color: 'var(--text-light)', padding: '32px' }}>
                <span className="section-kicker" style={{ color: 'var(--accent-rust)' }}>SERVICE AREAS</span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginBottom: '12px' }}>CENTRAL TEXAS</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-light-muted)', lineHeight: 1.6, margin: 0 }}>
                  Serving Austin, Travis County, Dripping Springs, Wimberley, Buda, Kyle, San Marcos, Round Rock, Georgetown, Bastrop, Caldwell, Blanco, and Burnet counties.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. CLOSING CTA */}
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
