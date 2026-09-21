'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ServiceFAQ } from '@/data/services';

export default function ServiceFAQAccordion({ faqs }: { faqs: ServiceFAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx}
            style={{ 
              backgroundColor: 'var(--bg-cream-card)', 
              border: '1.5px solid var(--border-tan)', 
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(36, 29, 23, 0.05)'
            }}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              style={{
                width: '100%',
                padding: '20px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: isOpen ? 'rgba(211, 58, 24, 0.04)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '16px'
              }}
              aria-expanded={isOpen}
            >
              <span 
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.2rem', 
                  color: 'var(--text-dark)', 
                  letterSpacing: '0.03em',
                  lineHeight: 1.2
                }}
              >
                {faq.q}
              </span>
              <span 
                style={{ 
                  color: 'var(--accent-rust)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </span>
            </button>

            {isOpen && (
              <div 
                style={{ 
                  padding: '0 24px 20px 24px', 
                  borderTop: '1px solid rgba(216, 198, 174, 0.5)',
                  paddingTop: '14px'
                }}
              >
                <p 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1rem', 
                    lineHeight: 1.65, 
                    color: 'var(--text-dark)', 
                    margin: 0 
                  }}
                >
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
