'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Droplet,
  FileCheck,
  Wrench,
  ShieldCheck,
  AlertTriangle,
  Wind,
  Building2,
  Utensils,
  MapPin
} from 'lucide-react';
import { servicesData } from '@/data/services';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(true);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services/septic-tank-pumping', hasDropdown: true },
    { name: 'COVERAGE', href: '/coverage' },
    { name: 'RESOURCES', href: '/resources' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && (
      pathname.startsWith(path) || 
      (path.startsWith('/services') && pathname.startsWith('/services')) ||
      (path === '/coverage' && pathname.startsWith('/service-area')) || 
      (path === '/resources' && pathname.startsWith('/pricing'))
    )) return true;
    return false;
  };

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle escape key and outside clicks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  // 10 Services organized cleanly into 2 balanced columns (5 each)
  const residentialServices = [
    'septic-tank-pumping',
    'septic-inspection',
    'septic-repairs',
    'system-installation',
    'septic-tank-locating'
  ].map((slug) => servicesData.find((s) => s.slug === slug)!);

  const specializedServices = [
    'drain-field-repair',
    'aerobic-septic-service',
    'emergency-septic-service',
    'commercial-septic-service',
    'grease-trap-pumping'
  ].map((slug) => servicesData.find((s) => s.slug === slug)!);

  const getServiceIcon = (iconName: string, isEmergency = false) => {
    const props = { 
      size: 15, 
      color: isEmergency ? '#D33A18' : 'var(--text-muted)',
      className: 'dropdown-minimal-icon'
    };
    switch (iconName) {
      case 'Droplet': return <Droplet {...props} />;
      case 'FileCheck': return <FileCheck {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'AlertTriangle': return <AlertTriangle {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'MapPin': return <MapPin {...props} />;
      case 'Building2': return <Building2 {...props} />;
      default: return <Wrench {...props} />;
    }
  };

  return (
    <header 
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100, 
        backgroundColor: '#FAF6EE', 
        borderBottom: '1.5px solid var(--border-tan)',
        boxShadow: '0 2px 8px rgba(36, 29, 23, 0.06)'
      }}
    >
      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          paddingTop: '12px', 
          paddingBottom: '12px',
          position: 'relative'
        }}
      >
        
        {/* LOGO + WORDMARK */}
        <Link 
          href="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            textDecoration: 'none',
            minWidth: 0
          }}
        >
          <div style={{ position: 'relative', width: '34px', height: '34px', flexShrink: 0 }}>
            <Image
              src="/images/logo.svg"
              alt="Septic Wranglers Texas Brand Emblem"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.25rem, 4.5vw, 1.85rem)', 
              letterSpacing: '0.04em', 
              color: 'var(--text-dark)',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            SEPTIC WRANGLERS
          </span>
        </Link>

        {/* HORIZONTAL DESKTOP NAV WITH MINIMALIST DROPDOWN */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name}
                  ref={dropdownRef}
                  style={{ position: 'relative', padding: '8px 0' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        letterSpacing: '0.06em',
                        color: active ? 'var(--accent-rust)' : 'var(--text-dark)',
                        textDecoration: 'none',
                        borderBottom: active ? '2px solid var(--accent-rust)' : '2px solid transparent',
                        paddingBottom: '2px',
                        transition: 'color 0.15s ease'
                      }}
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setServicesDropdownOpen((prev) => !prev)}
                      aria-expanded={servicesDropdownOpen}
                      aria-label="Toggle services menu"
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '2px',
                        cursor: 'pointer',
                        color: active ? 'var(--accent-rust)' : 'var(--text-dark)',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <ChevronDown 
                        size={14} 
                        style={{ 
                          transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                          transition: 'transform 0.2s ease' 
                        }} 
                      />
                    </button>
                  </div>

                  {/* ========================================================================= */}
                  {/* SLEEK, MINIMALIST 2-COLUMN DROPDOWN (BREATHABLE, UNCLUTTERED)             */}
                  {/* ========================================================================= */}
                  {servicesDropdownOpen && (
                    <div
                      className="dropdown-minimal"
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '560px',
                        padding: '18px 20px 14px 20px',
                        zIndex: 250,
                        marginTop: '2px'
                      }}
                    >
                      {/* 2 BALANCED CLEAN COLUMNS */}
                      <div 
                        style={{ 
                          display: 'grid', 
                          gridTemplateColumns: '1fr 1fr', 
                          columnGap: '20px',
                          rowGap: '2px'
                        }}
                      >
                        {/* COLUMN 1: RESIDENTIAL */}
                        <div>
                          <div className="dropdown-minimal-header">
                            RESIDENTIAL CARE
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            {residentialServices.map((s) => {
                              const isCurrent = pathname === `/services/${s.slug}`;
                              return (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="dropdown-minimal-item"
                                  style={{
                                    backgroundColor: isCurrent ? '#EFE4D3' : 'transparent',
                                    borderLeftColor: isCurrent ? 'var(--accent-rust)' : 'transparent'
                                  }}
                                >
                                  {getServiceIcon(s.iconName)}
                                  <span 
                                    className="dropdown-minimal-text" 
                                    style={{ color: isCurrent ? 'var(--accent-rust)' : 'var(--text-dark)' }}
                                  >
                                    {s.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        {/* COLUMN 2: SPECIALIZED & COMMERCIAL */}
                        <div>
                          <div className="dropdown-minimal-header">
                            SPECIALIZED &amp; COMMERCIAL
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            {specializedServices.map((s) => {
                              const isEmergency = s.slug === 'emergency-septic-service';
                              const isCurrent = pathname === `/services/${s.slug}`;
                              return (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="dropdown-minimal-item"
                                  style={{
                                    backgroundColor: isCurrent ? '#EFE4D3' : 'transparent',
                                    borderLeftColor: isCurrent ? 'var(--accent-rust)' : 'transparent'
                                  }}
                                >
                                  {getServiceIcon(s.iconName, isEmergency)}
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexGrow: 1 }}>
                                    <span 
                                      className="dropdown-minimal-text" 
                                      style={{ color: isCurrent || isEmergency ? 'var(--accent-rust)' : 'var(--text-dark)' }}
                                    >
                                      {s.name}
                                    </span>
                                    {isEmergency && (
                                      <span 
                                        style={{ 
                                          fontSize: '0.62rem', 
                                          backgroundColor: 'var(--accent-rust)', 
                                          color: '#FFFFFF', 
                                          padding: '1px 4px', 
                                          fontWeight: 700,
                                          fontFamily: 'var(--font-display)',
                                          letterSpacing: '0.04em',
                                          lineHeight: 1
                                        }}
                                      >
                                        24/7
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* SUBTLE 1-LINE MINIMAL FOOTER */}
                      <div 
                        style={{ 
                          borderTop: '1px solid var(--border-tan)', 
                          marginTop: '12px', 
                          paddingTop: '8px', 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center', 
                          fontSize: '0.8rem' 
                        }}
                      >
                        <a 
                          href="tel:5129762266"
                          style={{ 
                            color: 'var(--text-muted)', 
                            textDecoration: 'none', 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '5px' 
                          }}
                        >
                          <Phone size={12} color="var(--accent-rust)" />
                          <span>24/7 Urgent Dispatch: <strong style={{ color: 'var(--text-dark)' }}>512-976-2266</strong></span>
                        </a>

                        <Link 
                          href="/contact"
                          onClick={() => setServicesDropdownOpen(false)}
                          style={{ 
                            color: 'var(--accent-rust)', 
                            fontFamily: 'var(--font-display)', 
                            fontSize: '0.9rem', 
                            letterSpacing: '0.05em', 
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <span>SCHEDULE ONLINE</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>

                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  letterSpacing: '0.06em',
                  color: active ? 'var(--accent-rust)' : 'var(--text-dark)',
                  textDecoration: 'none',
                  borderBottom: active ? '2px solid var(--accent-rust)' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.15s ease'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS (RESPONSIVE) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          
          {/* DESKTOP FULL CALL BUTTON */}
          <a
            href="tel:5129762266"
            className="btn-rust btn-rust-nav hide-mobile"
            style={{ textDecoration: 'none' }}
          >
            CALL · 512-976-2266
          </a>

          {/* MOBILE COMPACT CALL BUTTON (STRICTLY MOBILE ONLY) */}
          <a
            href="tel:5129762266"
            className="btn-rust show-mobile-only"
            style={{
              padding: '6px 10px',
              fontSize: '0.92rem',
              minHeight: '38px',
              textDecoration: 'none',
              gap: '5px'
            }}
            aria-label="Call 512-976-2266"
          >
            <Phone size={14} />
            <span>CALL</span>
          </a>

          {/* MOBILE MENU TOGGLE (STRICTLY MOBILE ONLY - HIDDEN ON DESKTOP) */}
          <button
            type="button"
            className="nav-hamburger-btn show-mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MINIMALIST MOBILE DRAWER ACCORDION (CLEAN, TOUCH-FRIENDLY, UNCLUTTERED)    */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div 
          className="show-mobile-only"
          style={{ 
            backgroundColor: '#FAF6EE', 
            borderTop: '1.5px solid var(--border-tan)', 
            padding: '16px', 
            flexDirection: 'column',
            gap: '8px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
            width: '100%',
            maxHeight: '82vh',
            overflowY: 'auto'
          }}
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            if (link.hasDropdown) {
              return (
                <div key={link.name} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      backgroundColor: active ? 'var(--bg-tan-card)' : 'transparent',
                      borderLeft: active ? '3px solid var(--accent-rust)' : 'none',
                      paddingRight: '6px'
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        letterSpacing: '0.06em',
                        color: active ? 'var(--accent-rust)' : 'var(--text-dark)',
                        textDecoration: 'none',
                        padding: '8px 12px',
                        flexGrow: 1
                      }}
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '8px',
                        cursor: 'pointer',
                        color: 'var(--text-dark)',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      aria-label="Expand services menu"
                    >
                      <ChevronDown 
                        size={20} 
                        style={{ 
                          transform: mobileServicesExpanded ? 'rotate(180deg)' : 'rotate(0deg)', 
                          transition: 'transform 0.2s ease' 
                        }} 
                      />
                    </button>
                  </div>

                  {/* CLEAN, DIRECT MOBILE SERVICES LIST */}
                  {mobileServicesExpanded && (
                    <div 
                      style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '2px', 
                        paddingLeft: '12px', 
                        paddingTop: '6px', 
                        paddingBottom: '8px',
                        borderLeft: '2px solid var(--border-tan)',
                        marginLeft: '10px',
                        marginTop: '2px'
                      }}
                    >
                      {[...residentialServices, ...specializedServices].map((s) => {
                        const isEmergency = s.slug === 'emergency-septic-service';
                        const isCurrent = pathname === `/services/${s.slug}`;
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '1.08rem',
                              letterSpacing: '0.03em',
                              color: isCurrent || isEmergency ? 'var(--accent-rust)' : 'var(--text-dark)',
                              textDecoration: 'none',
                              padding: '6px 8px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              minHeight: '40px'
                            }}
                          >
                            {getServiceIcon(s.iconName, isEmergency)}
                            <span>{s.name}</span>
                            {isEmergency && (
                              <span style={{ fontSize: '0.62rem', backgroundColor: 'var(--accent-rust)', color: '#FFFFFF', padding: '1px 5px', fontWeight: 700 }}>
                                24/7
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  letterSpacing: '0.06em',
                  color: active ? 'var(--accent-rust)' : 'var(--text-dark)',
                  textDecoration: 'none',
                  padding: '8px 12px',
                  backgroundColor: active ? 'var(--bg-tan-card)' : 'transparent',
                  borderLeft: active ? '3px solid var(--accent-rust)' : 'none'
                }}
              >
                {link.name}
              </Link>
            );
          })}

          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-tan)', marginTop: '4px' }}>
            <a
              href="tel:5129762266"
              className="btn-rust"
              style={{ width: '100%', justifyContent: 'center', fontSize: '1.15rem', padding: '12px' }}
            >
              CALL · 512-976-2266
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
