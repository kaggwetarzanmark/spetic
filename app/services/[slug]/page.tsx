import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  ArrowRight, 
  Check, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Wrench,
  HelpCircle,
  FileCheck,
  Droplet,
  Utensils,
  Wind,
  MapPin,
  Building2
} from 'lucide-react';
import { servicesData, getServiceBySlug, getAllServiceSlugs, ServiceItem } from '@/data/services';
import ServiceFAQAccordion from './ServiceFAQAccordion';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found | Septic Wranglers' };

  return {
    title: `${service.name} | Septic Wranglers Central Texas`,
    description: service.shortDesc,
  };
}

export default async function DedicatedServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Related services
  const relatedServices = service.relatedSlugs
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter((s): s is ServiceItem => Boolean(s));

  return (
    <div style={{ backgroundColor: '#FAF6EE' }}>
      
      {/* 1. HERO SECTION (FULL BLEED WITH BACKGROUND PHOTO) */}
      <section 
        style={{ 
          position: 'relative', 
          minHeight: '480px', 
          display: 'flex', 
          alignItems: 'center',
          color: '#FFFFFF',
          paddingTop: 'clamp(64px, 8vw, 96px)',
          paddingBottom: 'clamp(64px, 8vw, 96px)',
          overflow: 'hidden'
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          {/* DARK WARM GRADIENT OVERLAY */}
          <div 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(135deg, rgba(28, 22, 17, 0.94) 0%, rgba(36, 29, 23, 0.86) 60%, rgba(211, 58, 24, 0.35) 100%)' 
            }} 
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '960px' }}>
          
          {/* BREADCRUMB */}
          <nav 
            style={{ 
              fontSize: '0.88rem', 
              fontFamily: 'var(--font-display)', 
              letterSpacing: '0.08em', 
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(250, 246, 238, 0.75)',
              flexWrap: 'wrap'
            }}
          >
            <Link href="/" style={{ color: 'rgba(250, 246, 238, 0.75)', textDecoration: 'none' }}>HOME</Link>
            <span>/</span>
            <span>SERVICES</span>
            <span>/</span>
            <span style={{ color: 'var(--accent-rust)' }}>{service.name.toUpperCase()}</span>
          </nav>

          {/* HEADLINE */}
          <h1 
            style={{ 
              color: '#FAF6EE', 
              fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', 
              lineHeight: 1.05, 
              marginBottom: '18px' 
            }}
          >
            {service.headline}
          </h1>

          {/* ONE-LINE CORE BENEFIT SUBHEAD */}
          <p 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontStyle: 'italic', 
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', 
              color: '#E2D3BE', 
              lineHeight: 1.5,
              maxWidth: '780px',
              marginBottom: '32px' 
            }}
          >
            {service.subhead}
          </p>

          {/* TWO CTAS */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-rust">
              SCHEDULE SERVICE
            </Link>
            <a 
              href="tel:5129762266" 
              className="btn-dark-outline"
              style={{ borderColor: '#E2D3BE', color: '#FAF6EE' }}
            >
              <Phone size={18} />
              CALL NOW 512-976-2266
            </a>
          </div>

        </div>
      </section>

      {/* 2. TRUST TICKER (THIN SCROLLING/REPEATING BAND) */}
      <section 
        style={{ 
          backgroundColor: '#1E1712', 
          borderTop: '1px solid #352C23',
          borderBottom: '2px solid var(--accent-rust)', 
          padding: '12px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}
      >
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            alignItems: 'center', 
            gap: '32px',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.08em',
            color: '#FAF6EE',
            flexWrap: 'wrap',
            padding: '0 16px'
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent-rust)' }}>★</span> TCEQ REGISTERED &amp; LICENSED #OS0034921
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent-rust)' }}>★</span> 100% MANIFESTED LEGAL DISPOSAL
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent-rust)' }}>★</span> ZERO SCARE TACTICS GUARANTEE
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent-rust)' }}>★</span> 2,500-GAL COMMERCIAL VACUUM MONSTERS
          </span>
        </div>
      </section>

      {/* 3. WHAT IT ACTUALLY MEANS */}
      <section className="band-cream section-spacing">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            <div>
              <span className="section-kicker">{service.whatItMeansKicker}</span>
              <h2 style={{ marginBottom: '18px' }}>
                {service.whatItMeansHeadline}
              </h2>
              <p 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.08rem', 
                  lineHeight: 1.7, 
                  color: 'var(--text-dark)', 
                  marginBottom: '24px' 
                }}
              >
                {service.whatItMeans}
              </p>
              <div 
                style={{ 
                  borderLeft: '3px solid var(--accent-rust)', 
                  paddingLeft: '16px',
                  fontSize: '0.94rem',
                  fontStyle: 'italic',
                  color: 'var(--text-muted)'
                }}
              >
                Proudly servicing Travis, Hays, Blanco, Burnet, Bastrop, Caldwell, and Williamson counties.
              </div>
            </div>

            <div>
              <div className="rustic-frame" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={service.whatItMeansImage}
                  alt={service.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHEN YOU NEED THIS */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="section-kicker">TIMING &amp; SYMPTOMS</span>
            <h2>{service.whenNeededTitle}</h2>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', 
              gap: '20px' 
            }}
          >
            {service.whenNeeded.map((item, idx) => (
              <div 
                key={idx} 
                className="value-card" 
                style={{ 
                  backgroundColor: 'var(--bg-cream-card)', 
                  padding: '24px 20px',
                  border: '1.5px solid var(--border-tan)'
                }}
              >
                <div 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '1.35rem', 
                    color: 'var(--text-dark)',
                    marginBottom: '8px',
                    letterSpacing: '0.03em'
                  }}
                >
                  {item.title}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS (NUMBERED STEP-BY-STEP WALKTHROUGH) */}
      <section className="band-cream section-spacing">
        <div className="container">
          <div style={{ marginBottom: '40px', maxWidth: '780px' }}>
            <span className="section-kicker">{service.processKicker}</span>
            <h2>{service.processHeadline}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '8px' }}>
              {service.processIntro}
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', 
              gap: '20px' 
            }}
          >
            {service.processSteps.map((step) => (
              <div 
                key={step.step} 
                className="value-card" 
                style={{ 
                  backgroundColor: 'var(--bg-tan-card)', 
                  border: '1.5px solid var(--border-tan)',
                  padding: '28px 22px'
                }}
              >
                <div className="value-card-numeral" style={{ color: 'var(--accent-rust)', marginBottom: '8px' }}>
                  {step.step}
                </div>
                <div 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '1.25rem', 
                    color: 'var(--text-dark)',
                    marginBottom: '10px',
                    letterSpacing: '0.02em'
                  }}
                >
                  {step.title}
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT'S INCLUDED */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div style={{ maxWidth: '860px' }}>
            <span className="section-kicker">CONCRETE SCOPE OF WORK</span>
            <h2>{service.whatsIncludedTitle}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '28px' }}>
              {service.whatsIncludedSubtitle}
            </p>

            <div 
              style={{ 
                backgroundColor: 'var(--bg-cream-card)', 
                border: '1.5px solid var(--border-tan)', 
                padding: '32px 28px',
                boxShadow: 'var(--shadow-rustic-sm)'
              }}
            >
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {service.whatsIncluded.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span 
                      style={{ 
                        color: '#FFFFFF', 
                        backgroundColor: 'var(--accent-rust)', 
                        width: '20px', 
                        height: '20px', 
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ fontSize: '1rem', color: 'var(--text-dark)', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WARNING SIGNS / WHY IT MATTERS (DARK FULL-WIDTH BAND) */}
      {service.warningSigns && service.warningSigns.length > 0 && (
        <section className="band-dark section-spacing">
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
              <div>
                <span className="section-kicker" style={{ color: '#FF7A59' }}>
                  THE COST OF DELAY
                </span>
                <h2 style={{ color: '#FAF6EE', marginBottom: '16px' }}>
                  {service.warningSignsHeadline}
                </h2>
                <p style={{ color: '#E2D3BE', fontSize: '1.05rem', marginBottom: '28px' }}>
                  {service.warningSignsIntro}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {service.warningSigns.map((sign, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ color: '#FF5A36', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>
                        ⚠
                      </span>
                      <span style={{ color: '#FAF6EE', fontSize: '0.98rem', lineHeight: 1.6 }}>
                        {sign}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="rustic-frame" style={{ aspectRatio: '4/3', borderColor: '#4A3E32' }}>
                  <Image
                    src="/images/hero-truck.jpg"
                    alt="Preventing septic failures"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. PRICING GUIDANCE */}
      <section className="band-cream section-spacing">
        <div className="container">
          <div style={{ maxWidth: '860px' }}>
            <span className="section-kicker">TRANSPARENT ESTIMATES</span>
            <h2>PRICING GUIDANCE &amp; COST FACTORS</h2>
            
            <div 
              style={{ 
                backgroundColor: 'var(--bg-tan-card)', 
                border: '2px solid var(--accent-rust)', 
                padding: '28px',
                marginTop: '20px',
                marginBottom: '28px'
              }}
            >
              <div style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', letterSpacing: '0.08em', color: 'var(--accent-rust)' }}>
                TYPICAL PRICE RANGE
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--text-dark)', margin: '6px 0 12px 0' }}>
                {service.pricingRange}
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                *Note: Rates vary based on property specifics. Below are the exact factors that determine final cost.
              </p>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '14px' }}>KEY FACTORS THAT AFFECT YOUR ESTIMATE:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {service.pricingFactors.map((factor, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.98rem', color: 'var(--text-dark)' }}>
                    <span style={{ color: 'var(--accent-rust)', fontWeight: 700 }}>•</span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-rust">
                REQUEST EXACT QUOTE
              </Link>
              <a href="tel:5129762266" className="btn-dark-outline">
                CALL 512-976-2266 FOR PHONE ESTIMATE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ (SERVICE SPECIFIC) */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div style={{ maxWidth: '860px' }}>
            <span className="section-kicker">COMMON QUESTIONS</span>
            <h2>FREQUENTLY ASKED QUESTIONS ABOUT {service.name.toUpperCase()}</h2>
            
            <div style={{ marginTop: '28px' }}>
              <ServiceFAQAccordion faqs={service.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* 10. RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="band-cream section-spacing">
          <div className="container">
            <div style={{ marginBottom: '32px' }}>
              <span className="section-kicker">RELATED SERVICES</span>
              <h2>OTHER WORK COMMONLY SCHEDULED TOGETHER</h2>
            </div>

            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
                gap: '24px' 
              }}
            >
              {relatedServices.map((rel) => (
                <div 
                  key={rel.slug} 
                  className="value-card" 
                  style={{ backgroundColor: 'var(--bg-tan-card)' }}
                >
                  <div className="value-card-title" style={{ fontSize: '1.35rem' }}>
                    {rel.name.toUpperCase()}
                  </div>
                  <p className="value-card-text" style={{ flexGrow: 1, marginBottom: '20px' }}>
                    {rel.shortDesc}
                  </p>
                  <Link 
                    href={`/services/${rel.slug}`} 
                    style={{ 
                      fontFamily: 'var(--font-display)', 
                      fontSize: '1.15rem', 
                      color: 'var(--accent-rust)', 
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    LEARN MORE →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. CLOSING CTA */}
      <section className="band-dark" style={{ padding: 'clamp(64px, 8vw, 96px) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-kicker" style={{ color: '#FF7A59', marginBottom: '8px' }}>
            READY TO BOOK?
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', color: 'var(--text-light)', marginBottom: '14px' }}>
            SCHEDULE YOUR {service.name.toUpperCase()} TODAY
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.05rem, 3vw, 1.25rem)', color: 'var(--text-light-muted)', marginBottom: '28px' }}>
            A real Wrangler answers this phone — straight talk, honest prices, and prompt Hill Country dispatch.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="tel:5129762266" 
              className="btn-rust"
              style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.45rem)', padding: '14px 32px' }}
            >
              CALL 512-976-2266
            </a>
            <Link 
              href="/contact" 
              className="btn-dark-outline"
              style={{ borderColor: '#FAF6EE', color: '#FAF6EE', padding: '14px 28px' }}
            >
              REQUEST ONLINE ESTIMATE
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
