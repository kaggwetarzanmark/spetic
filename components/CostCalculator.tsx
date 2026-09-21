'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, CheckCircle2, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';

export default function CostCalculator() {
  const [tankSize, setTankSize] = useState<number>(1000);
  const [occupants, setOccupants] = useState<number>(3);
  const [hasDisposal, setHasDisposal] = useState<boolean>(false);
  const [riserStatus, setRiserStatus] = useState<string>('grade');
  const [lastPumped, setLastPumped] = useState<string>('3years');

  // EPA & Title V pumping frequency estimation logic
  const calculateFrequency = () => {
    let years = 3;
    if (tankSize === 1000) {
      if (occupants <= 2) years = 3.5;
      else if (occupants <= 4) years = 2.5;
      else years = 1.5;
    } else if (tankSize === 1250) {
      if (occupants <= 2) years = 4.5;
      else if (occupants <= 4) years = 3;
      else years = 2;
    } else if (tankSize === 1500) {
      if (occupants <= 2) years = 5;
      else if (occupants <= 4) years = 3.5;
      else years = 2.5;
    } else {
      if (occupants <= 2) years = 6;
      else if (occupants <= 4) years = 4.5;
      else years = 3;
    }

    if (hasDisposal) {
      years = Math.max(1, Math.round((years * 0.65) * 10) / 10);
    }
    return years;
  };

  // Cost Range Logic (Honest trade pricing ranges)
  const calculateCost = () => {
    let baseMin = 360;
    let baseMax = 440;

    if (tankSize === 1250) {
      baseMin = 410;
      baseMax = 490;
    } else if (tankSize === 1500) {
      baseMin = 460;
      baseMax = 550;
    } else if (tankSize === 2000) {
      baseMin = 590;
      baseMax = 720;
    }

    let extraMin = 0;
    let extraMax = 0;

    if (riserStatus === 'shallow') {
      extraMin += 45;
      extraMax += 75; // hand locate & excavate up to 12"
    } else if (riserStatus === 'deep') {
      extraMin += 120;
      extraMax += 220; // heavy digging or mini-excavator
    }

    return {
      min: baseMin + extraMin,
      max: baseMax + extraMax,
      baseMin,
      baseMax,
      diggingFee: extraMax > 0 ? (riserStatus === 'shallow' ? '$45–$75' : '$120–$220') : '$0 (Accessible)',
    };
  };

  const years = calculateFrequency();
  const cost = calculateCost();
  const isOverdue = lastPumped === '5years' || lastPumped === 'unknown';

  return (
    <div className="trade-card" style={{ padding: '40px', backgroundColor: '#FFFFFF', border: '1px solid var(--border-light)' }}>
      <div style={{ marginBottom: '28px' }}>
        <div className="section-eyebrow" style={{ color: 'var(--teal-text)' }}>
          <Calculator size={16} />
          HONEST TRADE ESTIMATOR
        </div>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>
          Interactive Tank Pumping Frequency & Cost Estimator
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem' }}>
          Avoid deceptive flat quotes. Septic service costs depend on gallonage, depth, and waste disposal manifests. Calculate your personalized estimate below.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
        {/* INPUTS COLUMN */}
        <div>
          {/* TANK SIZE */}
          <div className="form-group">
            <label className="form-label">
              <span>1. Septic Tank Capacity</span>
              <span style={{ color: 'var(--teal-text)', fontFamily: 'var(--font-mono)' }}>{tankSize.toLocaleString()} Gal</span>
            </label>
            <select
              className="form-select"
              value={tankSize}
              onChange={(e) => setTankSize(Number(e.target.value))}
            >
              <option value={1000}>1,000 Gallons (Standard 2–3 Bedroom)</option>
              <option value={1250}>1,250 Gallons (3–4 Bedroom Home)</option>
              <option value={1500}>1,500 Gallons (4–5 Bedroom Home)</option>
              <option value={2000}>2,000 Gallons (Large Estate / Commercial)</option>
            </select>
          </div>

          {/* OCCUPANTS */}
          <div className="form-group">
            <label className="form-label">
              <span>2. Full-Time Household Members</span>
              <span style={{ color: 'var(--teal-text)', fontFamily: 'var(--font-mono)' }}>{occupants} People</span>
            </label>
            <select
              className="form-select"
              value={occupants}
              onChange={(e) => setOccupants(Number(e.target.value))}
            >
              <option value={1}>1–2 Residents</option>
              <option value={3}>3–4 Residents (Standard Family)</option>
              <option value={5}>5–6 Residents</option>
              <option value={7}>7+ Residents / High Water Usage</option>
            </select>
          </div>

          {/* GARBAGE DISPOSAL */}
          <div className="form-group">
            <label className="form-label">
              <span>3. In-Sink Garbage Disposal?</span>
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setHasDisposal(false)}
                style={{
                  padding: '10px',
                  borderRadius: 'var(--radius-xs)',
                  border: !hasDisposal ? '2px solid var(--teal-accent)' : '1px solid var(--border-light)',
                  backgroundColor: !hasDisposal ? 'var(--bg-canvas)' : '#FFFFFF',
                  fontWeight: !hasDisposal ? 700 : 500,
                  cursor: 'pointer',
                  color: 'var(--text-primary)'
                }}
              >
                No Disposal
              </button>
              <button
                type="button"
                onClick={() => setHasDisposal(true)}
                style={{
                  padding: '10px',
                  borderRadius: 'var(--radius-xs)',
                  border: hasDisposal ? '2px solid var(--teal-accent)' : '1px solid var(--border-light)',
                  backgroundColor: hasDisposal ? 'var(--bg-canvas)' : '#FFFFFF',
                  fontWeight: hasDisposal ? 700 : 500,
                  cursor: 'pointer',
                  color: 'var(--text-primary)'
                }}
              >
                Yes (High Solids)
              </button>
            </div>
            {hasDisposal && (
              <span style={{ fontSize: '0.8rem', color: '#B7791F', marginTop: '4px' }}>
                Note: Disposals accelerate sludge accumulation by 35–50%.
              </span>
            )}
          </div>

          {/* RISER & ACCESS */}
          <div className="form-group">
            <label className="form-label">
              <span>4. Tank Lid Access & Depth</span>
            </label>
            <select
              className="form-select"
              value={riserStatus}
              onChange={(e) => setRiserStatus(e.target.value)}
            >
              <option value="grade">Surface Riser Lid (Ground level, ready to open)</option>
              <option value="shallow">Shallow Buried (Under 12&quot; grass/soil)</option>
              <option value="deep">Deep Buried (Over 12&quot; down, requires heavy dig)</option>
            </select>
          </div>

          {/* LAST PUMPED */}
          <div className="form-group">
            <label className="form-label">
              <span>5. When Was System Last Pumped?</span>
            </label>
            <select
              className="form-select"
              value={lastPumped}
              onChange={(e) => setLastPumped(e.target.value)}
            >
              <option value="1year">Within past 1–2 years</option>
              <option value="3years">3–4 years ago</option>
              <option value="5years">5+ years ago (High risk)</option>
              <option value="unknown">Unknown / Just purchased home</option>
            </select>
          </div>
        </div>

        {/* RESULTS CARD */}
        <div 
          style={{
            backgroundColor: 'var(--slate-900)',
            color: 'var(--text-inverse)',
            borderRadius: 'var(--radius-sm)',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid var(--slate-border)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ color: 'var(--text-inverse-muted)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                DIAGNOSTIC CALCULATION
              </span>
              <span className="tech-badge" style={{ backgroundColor: 'rgba(56, 217, 169, 0.15)', color: '#38D9A9', border: '1px solid rgba(56, 217, 169, 0.3)' }}>
                EPA CODE COMPLIANT
              </span>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-inverse-secondary)' }}>
                Recommended Pumping Interval:
              </div>
              <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#38D9A9', letterSpacing: '-0.02em', marginTop: '2px' }}>
                Every {years} {years === 1 ? 'Year' : 'Years'}
              </div>
            </div>

            {isOverdue && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', backgroundColor: 'rgba(217, 119, 6, 0.15)', border: '1px solid #D97706', borderRadius: 'var(--radius-xs)', padding: '12px', marginBottom: '20px' }}>
                <AlertTriangle size={18} style={{ color: '#FBBF24', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.84rem', color: '#FDE68A' }}>
                  <strong>Urgent Attention Advised:</strong> Systems unpumped for 5+ years risk solids pushing into your drain field soil absorption area, causing premature bio-mat failure.
                </div>
              </div>
            )}

            <div style={{ borderTop: '1px solid var(--slate-border)', paddingTop: '20px', marginBottom: '24px' }}>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-inverse-secondary)', marginBottom: '4px' }}>
                Estimated Service Fee Range:
              </div>
              <div style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#F6F4EE', letterSpacing: '-0.02em' }}>
                ${cost.min} – ${cost.max}
              </div>

              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--text-inverse-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Base High-Vacuum Pumping ({tankSize} gal):</span>
                  <span style={{ color: '#F6F4EE' }}>${cost.baseMin}–${cost.baseMax}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Lid Locate & Digging Allowance:</span>
                  <span style={{ color: '#F6F4EE' }}>{cost.diggingFee}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Baffle & Effluent Filter Check:</span>
                  <span style={{ color: '#38D9A9' }}>Included Free ($95 Val)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>State Waste Disposal Manifest:</span>
                  <span style={{ color: '#38D9A9' }}>Included</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <Link 
              href={`/contact?tank=${tankSize}&occupants=${occupants}&riser=${riserStatus}`}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontWeight: 700 }}
            >
              Schedule This Service
              <ArrowRight size={16} />
            </Link>
            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.78rem', color: 'var(--text-inverse-muted)' }}>
              No upfront credit card required • Invoiced after service completion
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
