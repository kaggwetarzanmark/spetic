'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, CheckCircle2, AlertCircle, Phone, ArrowRight } from 'lucide-react';

interface TownData {
  zip: string;
  name: string;
  county: string;
  response: string;
}

const TEXAS_TOWNS: TownData[] = [
  { zip: '78701', name: 'Austin (Downtown/Central)', county: 'Travis County', response: 'Same-Day / Priority Dispatch' },
  { zip: '78734', name: 'Lakeway', county: 'Travis County', response: 'Same-Day / Priority Dispatch' },
  { zip: '78738', name: 'Bee Cave', county: 'Travis County', response: 'Same-Day / Priority Dispatch' },
  { zip: '78620', name: 'Dripping Springs', county: 'Hays County', response: 'Daily Hill Country Route' },
  { zip: '78676', name: 'Wimberley', county: 'Hays County', response: 'Daily Hill Country Route' },
  { zip: '78610', name: 'Buda', county: 'Hays County', response: 'Same-Day / Priority Dispatch' },
  { zip: '78640', name: 'Kyle', county: 'Hays County', response: 'Same-Day / Priority Dispatch' },
  { zip: '78666', name: 'San Marcos', county: 'Hays County', response: 'Daily Route' },
  { zip: '78664', name: 'Round Rock', county: 'Williamson County', response: 'Same-Day / Priority Dispatch' },
  { zip: '78626', name: 'Georgetown', county: 'Williamson County', response: 'Daily Route' },
  { zip: '78641', name: 'Leander', county: 'Williamson County', response: 'Daily Route' },
  { zip: '78602', name: 'Bastrop', county: 'Bastrop County', response: 'Daily Route' },
  { zip: '78644', name: 'Lockhart', county: 'Caldwell County', response: 'Daily Route' },
  { zip: '78606', name: 'Blanco', county: 'Blanco County', response: 'Scheduled / Hill Country Run' },
  { zip: '78654', name: 'Marble Falls', county: 'Burnet County', response: 'Scheduled / Hill Country Run' },
];

export default function ZipChecker() {
  const [query, setQuery] = useState('');
  const [selectedTown, setSelectedTown] = useState<TownData | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const clean = query.trim().toLowerCase();
    if (!clean) {
      setSelectedTown(null);
      return;
    }
    const match = TEXAS_TOWNS.find(
      (t) => t.zip === clean || t.name.toLowerCase().includes(clean)
    );
    setSelectedTown(match || null);
  };

  const handleSelect = (town: TownData) => {
    setSelectedTown(town);
    setQuery(`${town.zip} (${town.name})`);
    setSearched(true);
  };

  return (
    <div className="value-card" style={{ padding: 'clamp(24px, 5vw, 36px)', backgroundColor: 'var(--bg-cream-card)' }}>
      <div style={{ marginBottom: '20px' }}>
        <span className="section-kicker">LOCAL DISPATCH LOOKUP</span>
        <h3 style={{ fontSize: 'clamp(1.35rem, 4vw, 1.65rem)', marginBottom: '8px' }}>
          CHECK COVERAGE FOR YOUR ADDRESS
        </h3>
        <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', fontFamily: 'var(--font-serif)' }}>
          Enter your 5-digit zip code or Central Texas town name to see our truck dispatch schedule.
        </p>
      </div>

      <form 
        onSubmit={handleSearch} 
        style={{ 
          display: 'flex', 
          gap: '10px', 
          marginBottom: '20px', 
          flexWrap: 'wrap' 
        }}
      >
        <input
          type="text"
          className="form-input-rustic"
          placeholder="e.g. 78738, Dripping Springs, Buda"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSearched(false);
          }}
          style={{ flex: '1 1 220px', minWidth: '0' }}
        />
        <button 
          type="submit" 
          className="btn-rust" 
          style={{ 
            padding: '12px 24px', 
            fontSize: '1.15rem',
            flex: '1 1 auto',
            justifyContent: 'center'
          }}
        >
          CHECK DISPATCH
        </button>
      </form>

      {/* QUICK SUGGESTIONS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-display)', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          QUICK SELECT:
        </span>
        {TEXAS_TOWNS.slice(0, 5).map((t) => (
          <button
            key={t.zip}
            type="button"
            onClick={() => handleSelect(t)}
            style={{
              background: 'var(--bg-tan-card)',
              border: '1px solid var(--border-tan)',
              padding: '6px 10px',
              minHeight: '34px',
              fontSize: '0.84rem',
              cursor: 'pointer',
              color: 'var(--text-dark)',
              fontFamily: 'var(--font-serif)'
            }}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* SEARCH RESULT */}
      {searched && (
        <div style={{ marginTop: '16px' }}>
          {selectedTown ? (
            <div 
              style={{
                backgroundColor: 'var(--bg-tan-card)',
                border: '2px solid var(--accent-rust)',
                padding: 'clamp(18px, 4vw, 24px)',
                boxShadow: 'var(--shadow-rustic-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 4vw, 1.45rem)', color: 'var(--text-dark)' }}>
                    {selectedTown.name}, TX ({selectedTown.zip})
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {selectedTown.county} • Active Wrangler Service Route
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', color: 'var(--accent-rust)', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                  ✓ DISPATCH CONFIRMED
                </div>
              </div>

              <div style={{ fontSize: '0.98rem', color: 'var(--text-dark)', marginBottom: '18px' }}>
                <strong>Typical Truck Response:</strong> {selectedTown.response}
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="tel:5129762266" className="btn-rust" style={{ flex: '1 1 auto', justifyContent: 'center' }}>
                  CALL 512-976-2266
                </a>
                <Link href={`/contact?town=${encodeURIComponent(selectedTown.name)}`} className="btn-dark-outline" style={{ flex: '1 1 auto', justifyContent: 'center' }}>
                  BOOK ONLINE
                </Link>
              </div>
            </div>
          ) : (
            <div 
              style={{
                backgroundColor: 'var(--bg-cream-card)',
                border: '1px solid var(--border-tan)',
                padding: 'clamp(18px, 4vw, 24px)',
                fontFamily: 'var(--font-serif)'
              }}
            >
              <h4 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>SPECIAL RANCH DISPATCH AVAILABLE</h4>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-dark)', marginBottom: '14px' }}>
                We frequently travel to ranches and properties throughout Blanco, Burnet, Gillespie, and adjacent counties. Give Jeff and the crew a quick call to check our schedule.
              </p>
              <a href="tel:5129762266" className="btn-rust" style={{ fontSize: '1.1rem', width: '100%', justifyContent: 'center' }}>
                CALL US AT 512-976-2266
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
