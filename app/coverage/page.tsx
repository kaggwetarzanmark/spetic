import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Check } from 'lucide-react';
import ZipChecker from '@/components/ZipChecker';

export const metadata = {
  title: 'Coverage & Service Areas | Septic Wranglers | Austin & Texas Hill Country',
  description: 'Septic Wranglers service areas across Austin, Travis County, Hays, Williamson, Bastrop, Caldwell, Blanco, Burnet, and the Texas Hill Country. Call 512-976-2266.',
};

export default function CoveragePage() {
  const regions = [
    {
      name: 'AUSTIN & TRAVIS COUNTY',
      cities: 'Austin, Lakeway, Bee Cave, West Lake Hills, Manor, Pflugerville, Oak Hill, Del Valle, Lago Vista, Jonestown',
      note: 'Primary dispatch corridor. Same-day service available for urgent pumping and backups.'
    },
    {
      name: 'TEXAS HILL COUNTRY',
      cities: 'Dripping Springs, Wimberley, Blanco, Johnson City, Spicewood, Henly, Driftwood',
      note: 'Experienced with high-limestone rock formations, caliche layers, and custom acreage setups.'
    },
    {
      name: 'HAYS & WILLIAMSON COUNTIES',
      cities: 'San Marcos, Buda, Kyle, Round Rock, Georgetown, Cedar Park, Leander, Liberty Hill',
      note: 'Routine residential pumping, pre-sale closing inspections, and system maintenance.'
    },
    {
      name: 'BASTROP, CALDWELL, BLANCO & BURNET',
      cities: 'Bastrop, Elgin, Lockhart, Luling, Marble Falls, Burnet, Bertram',
      note: 'Serving rural ranches, residential properties, and acreage estates across Central Texas.'
    }
  ];

  return (
    <div>
      {/* 1. HERO INTRO */}
      <section className="band-cream section-spacing" style={{ paddingTop: '88px', paddingBottom: '72px' }}>
        <div className="container">
          <div style={{ maxWidth: '880px' }}>
            <span className="section-kicker">WHERE WE ROAM</span>
            <h1 style={{ marginBottom: '24px' }}>
              AUSTIN &amp; THE HILL COUNTRY.
            </h1>
            <div className="rustic-pullquote">
              Our trucks run daily out of Central Texas. From suburban Travis County neighborhoods to rocky Hill Country ranch land, we know the terrain and local soil conditions.
            </div>
          </div>
        </div>
      </section>

      {/* 2. COVERAGE CHECKER TOOL */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div style={{ marginBottom: '28px', textAlign: 'center' }}>
              <span className="section-kicker">TEXAS DISPATCH CHECKER</span>
              <h2>CHECK IF YOUR PROPERTY IS IN OUR RUN</h2>
            </div>
            <ZipChecker />
          </div>
        </div>
      </section>

      {/* 3. REGIONS BREAKDOWN */}
      <section className="band-cream section-spacing">
        <div className="container">
          <div style={{ marginBottom: '44px' }}>
            <span className="section-kicker">COMMUNITIES WE SERVE</span>
            <h2>OUR FIVE CORE SERVICE REGIONS</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {regions.map((reg, i) => (
              <div key={reg.name} className="value-card">
                <div className="value-card-numeral">0{i + 1}</div>
                <div className="value-card-title">{reg.name}</div>
                <p style={{ fontSize: '0.98rem', marginBottom: '16px', color: 'var(--text-dark)' }}>
                  <strong>Towns &amp; Cities:</strong> {reg.cities}
                </p>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic', borderTop: '1px solid var(--border-tan)', paddingTop: '12px' }}>
                  {reg.note}
                </div>
              </div>
            ))}
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
