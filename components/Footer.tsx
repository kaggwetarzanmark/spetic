import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Star, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { GoogleGIcon, GoogleStars } from '@/components/GoogleIcon';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-dark-brown)', color: 'var(--text-light)', borderTop: '2px solid var(--border-dark-brown)' }}>
      <div className="container" style={{ paddingTop: 'clamp(48px, 8vw, 72px)', paddingBottom: '36px' }}>
        
        {/* 4-COLUMN FOOTER DIRECTORY */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', 
            gap: 'clamp(28px, 5vw, 44px)',
            marginBottom: '48px' 
          }}
        >
          
          {/* COLUMN 1: BRAND + TAGLINE + SOCIALS */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ position: 'relative', width: '38px', height: '38px', flexShrink: 0 }}>
                <Image
                  src="/images/logo.svg"
                  alt="Septic Wranglers Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span 
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.75rem', 
                  letterSpacing: '0.04em', 
                  color: 'var(--text-light)',
                  lineHeight: 1
                }}
              >
                SEPTIC WRANGLERS
              </span>
            </div>

            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.92rem', color: 'var(--text-light-muted)', lineHeight: 1.65, marginBottom: '20px' }}>
              Trustable Texan for clear talk, consistent quality, septic education, and giving back to the communities we call home.
            </p>

            {/* SOCIAL ICONS ROW */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#352C23', 
                  border: '1px solid #4A3E32',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--text-light)',
                  textDecoration: 'none'
                }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#352C23', 
                  border: '1px solid #4A3E32',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--text-light)',
                  textDecoration: 'none'
                }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://yelp.com" 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#352C23', 
                  border: '1px solid #4A3E32',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'var(--text-light)',
                  textDecoration: 'none'
                }}
                aria-label="Yelp Reviews"
              >
                <Star size={18} />
              </a>
            </div>

            {/* GOOGLE RATING FOOTER BADGE */}
            <div 
              style={{ 
                marginTop: '16px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                backgroundColor: '#1E1712', 
                border: '1px solid #4A3E32', 
                padding: '8px 12px' 
              }}
            >
              <GoogleGIcon size={20} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.04em', fontFamily: 'var(--font-display)' }}>
                    GOOGLE 4.9 RATING
                  </span>
                  <GoogleStars size={12} rating={5} />
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-light-muted)', fontStyle: 'italic' }}>
                  280+ Verified Texas Homeowners
                </span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: CALL US */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '0.08em', color: 'var(--text-light)', marginBottom: '14px' }}>
              CALL US
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.94rem' }}>
              <a 
                href="tel:5129762266" 
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.65rem', 
                  letterSpacing: '0.04em', 
                  color: 'var(--text-light)', 
                  textDecoration: 'none',
                  display: 'inline-block',
                  marginBottom: '2px'
                }}
              >
                512-976-2266
              </a>
              <div style={{ color: 'var(--text-light-muted)' }}>Mon–Sun: 7am – 7pm</div>
              <div style={{ color: 'var(--accent-rust)', fontWeight: 600 }}>Emergency – 24/7</div>
              <a 
                href="mailto:info@septicwranglers.com" 
                style={{ color: 'var(--text-light-muted)', textDecoration: 'none', marginTop: '2px', wordBreak: 'break-all' }}
              >
                info@septicwranglers.com
              </a>
            </div>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '0.08em', color: 'var(--text-light)', marginBottom: '14px' }}>
              SERVICES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.94rem' }}>
              <li>
                <Link href="/services/septic-tank-pumping" style={{ color: 'var(--text-light-muted)', textDecoration: 'none', display: 'block', padding: '2px 0' }}>
                  Septic Tank Pumping
                </Link>
              </li>
              <li>
                <Link href="/services/septic-inspection" style={{ color: 'var(--text-light-muted)', textDecoration: 'none', display: 'block', padding: '2px 0' }}>
                  Real Estate Inspections
                </Link>
              </li>
              <li>
                <Link href="/services/system-installation" style={{ color: 'var(--text-light-muted)', textDecoration: 'none', display: 'block', padding: '2px 0' }}>
                  System Installations
                </Link>
              </li>
              <li>
                <Link href="/services/septic-repairs" style={{ color: 'var(--text-light-muted)', textDecoration: 'none', display: 'block', padding: '2px 0' }}>
                  Targeted Repairs &amp; Baffles
                </Link>
              </li>
              <li>
                <Link href="/services/drain-field-repair" style={{ color: 'var(--text-light-muted)', textDecoration: 'none', display: 'block', padding: '2px 0' }}>
                  Drain Field Restoration
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-septic-service" style={{ color: 'var(--accent-rust)', textDecoration: 'none', display: 'block', padding: '2px 0', fontWeight: 600 }}>
                  24/7 Emergency Service
                </Link>
              </li>
              <li>
                <Link href="/services" style={{ color: 'var(--text-light)', textDecoration: 'none', display: 'block', padding: '4px 0', fontSize: '0.85rem', fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
                  ALL 10 SERVICES →
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: AREAS */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '0.08em', color: 'var(--text-light)', marginBottom: '14px' }}>
              AREAS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.94rem', color: 'var(--text-light-muted)' }}>
              <li>Austin &amp; Travis Co</li>
              <li>Hill Country</li>
              <li>Hays – Williamson</li>
              <li>Bastrop – Caldwell</li>
              <li>Blanco – Burnet</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM LEGAL LINE */}
        <div 
          style={{ 
            borderTop: '1px solid var(--border-dark-brown)', 
            paddingTop: '20px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '12px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.08em',
            color: 'var(--text-light-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} SEPTIC WRANGLERS · ALL RIGHTS RESERVED
          </div>
          <div>
            LICENSED · BONDED · TCEQ COMPLIANT
          </div>
          <div>
            DESIGNED WITH PRIDE, TEXAS
          </div>
        </div>

      </div>
    </footer>
  );
}
