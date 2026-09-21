'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'freq',
    question: 'HOW OFTEN SHOULD AN AUSTIN HOMEOWNER PUMP THEIR SEPTIC TANK?',
    answer: 'For a typical 3–4 bedroom home in Central Texas with a 1,000 to 1,500-gallon tank, we recommend pumping every 2 to 3 years. If you run a garbage disposal, have a large family, or host frequent guests out at the ranch, plan on every 18–24 months. Waiting until toilets back up means solids have likely already breached your outlet baffle and compromised your drain field.'
  },
  {
    id: 'caliche',
    question: 'HOW DOES TEXAS HILL COUNTRY ROCK & CALICHE AFFECT SEPTIC SYSTEMS?',
    answer: 'Hill Country soil is notorious for shallow topsoil sitting directly on dense limestone or impermeable caliche rock. Because rainwater cannot soak deep into caliche quickly, drain fields in Dripping Springs, Wimberley, and Western Travis County must be properly sized and maintained. Skipping pumping causes solids to clog the rock crevices, leading to premature drain field failure.'
  },
  {
    id: 'additives',
    question: 'DO STORE-BOUGHT ENZYMES OR YEAST PACKETS REPLACE VACUUM PUMPING?',
    answer: 'No sir. Commercial additives claim to dissolve everything, but all they really do is prematurely emulsify grease and suspend solids in the middle liquid layer. Those suspended micro-solids then flow directly into your absorption trenches, choking the soil. Nothing replaces a true 2,500-gallon vacuum evacuation of dense bottom sludge.'
  },
  {
    id: 'presale',
    question: 'WHAT HAPPENS DURING A SEPTIC WRANGLERS REAL ESTATE INSPECTION?',
    answer: 'We uncover the tank lids, check liquid operating height, evaluate inlet and outlet sanitary baffles, test the distribution box, and inspect the drain field for surfacing effluent or hydraulic back-pressure. We deliver a clear, honest written report within 24 to 48 hours for your title company, lender, or buyer negotiation.'
  },
  {
    id: 'riser',
    question: 'WHY SHOULD I RETROFIT MY TANK WITH SURFACE RISERS?',
    answer: 'Most older Texas septic tanks have concrete lids buried 12 to 24 inches underground. Every time you pump, someone has to dig up your yard. Installing an airtight green Polylok riser brings the access lid right to your finished grass line. It eliminates digging fees forever, stops rainwater infiltration, and includes child-proof safety screws.'
  }
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>('freq');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {FAQ_DATA.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div 
            key={faq.id}
            style={{
              backgroundColor: 'var(--bg-tan-card)',
              border: '1.5px solid var(--border-tan)',
              boxShadow: 'var(--shadow-rustic-sm)'
            }}
          >
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.35rem', 
                  letterSpacing: '0.04em', 
                  color: 'var(--text-dark)' 
                }}
              >
                {faq.question}
              </span>
              <span 
                style={{ 
                  color: 'var(--accent-rust)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginLeft: '16px',
                  flexShrink: 0
                }}
              >
                {isOpen ? <Minus size={22} /> : <Plus size={22} />}
              </span>
            </button>

            {isOpen && (
              <div style={{ padding: '0 24px 24px 24px', borderTop: '1px solid var(--border-tan)', paddingTop: '16px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.02rem', color: 'var(--text-dark)', lineHeight: 1.7, margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
