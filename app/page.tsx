import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Wrench, 
  Droplet, 
  Clock, 
  Check, 
  Star, 
  Award, 
  FileCheck, 
  ThumbsUp, 
  AlertTriangle,
  BadgeCheck
} from 'lucide-react';
import { GoogleGIcon, GoogleStars, GoogleReviewsSummaryBadge } from '@/components/GoogleIcon';

export const metadata = {
  title: 'Septic Wranglers | Austin & Central Texas Septic Pumping & Repair',
  description: 'Straight talk, fair prices, and iron-clad septic pumping, inspection, and repair across Austin and the Texas Hill Country. 280+ 5-star reviews. Call 512-976-2266.',
};

export default function HomePage() {
  const services = [
    {
      num: '01',
      title: 'SEPTIC TANK PUMPING',
      slug: 'septic-tank-pumping',
      desc: 'Complete bottom-sludge and scum evacuation with 2,500-gallon commercial vacuum monsters. Dual baffle inspection included on every run.'
    },
    {
      num: '02',
      title: 'INSPECTIONS & REAL ESTATE',
      slug: 'septic-inspection',
      desc: 'Comprehensive pre-sale evaluations for Austin & Hill Country real estate closings. Plain-English diagnostic findings with zero scare tactics.'
    },
    {
      num: '03',
      title: 'SYSTEM INSTALLATIONS',
      slug: 'system-installation',
      desc: 'Engineered septic installations and complete drain field replacements built to outlast the tough Central Texas caliche and rocky limestone.'
    },
    {
      num: '04',
      title: 'EMERGENCY REPAIRS',
      slug: 'emergency-septic-service',
      desc: 'Line backups, broken sanitary baffles, collapsed risers, or high-water alarm alerts. Fast response when sewage threatens your home.'
    }
  ];

  const proofPillars = [
    {
      num: '01',
      title: 'TCEQ REGISTERED & LICENSED',
      desc: 'State-certified On-Site Sewage Facility (OSSF) Hauler & Maintenance Provider (Lic #OS0034921) with $2,000,000 commercial liability coverage.'
    },
    {
      num: '02',
      title: '100% MANIFESTED LEGAL DISPOSAL',
      desc: 'Every single gallon is tracked and processed at authorized municipal wastewater reclamation plants. We never dump illegally on rural land.'
    },
    {
      num: '03',
      title: 'ZERO SCARE TACTICS GUARANTEE',
      desc: 'We tell you the truth. If your tank just needs a $45 baffle fix or simple cleanout, we will never invent fake drain field failures.'
    },
    {
      num: '04',
      title: 'PUBLISHED RATES. NO ADD-ONS.',
      desc: 'The price we quote over the phone is the price you pay. No unexpected mileage surcharges, no hidden dumping fees, no surprises.'
    }
  ];

  const reviews = [
    {
      name: 'Marcus & Elena Vance',
      initials: 'MV',
      avatarBg: '#1A73E8',
      badge: 'Local Guide · 42 reviews',
      timeAgo: '2 weeks ago',
      location: 'Dripping Springs, TX',
      service: '1,500-Gal Tank Emergency Evacuation',
      text: 'Had sewage bubbling up near our back patio on a Saturday afternoon during a family barbecue. Jeff took the call himself, showed up in under an hour with the copper rig, cleared the obstruction, and completely pumped out our 1,500-gallon tank. Did not hit us with ridiculous weekend emergency gouging either. Straight shooter.',
      highlight: 'Arrived in under an hour on a Saturday'
    },
    {
      name: 'Cody Rosenthal',
      initials: 'CR',
      avatarBg: '#D93025',
      badge: 'Local Guide · 18 reviews',
      timeAgo: '3 weeks ago',
      location: 'Lakeway, TX',
      service: 'Baffle Retrofit & Diagnostic Second Opinion',
      text: 'Another company told us our whole drain field had failed and quoted $14,000 for a total replacement. We called Septic Wranglers for a second opinion. Jeff checked the distribution box, found a collapsed PVC baffle, replaced it for a couple hundred bucks, and our system has been running like a top ever since. Honest as the day is long.',
      highlight: 'Saved $13,000+ from a dishonest quote'
    },
    {
      name: 'Sarah & Clint Jenkins',
      initials: 'SJ',
      avatarBg: '#1E8E3E',
      badge: 'Verified Resident · 9 reviews',
      timeAgo: '1 month ago',
      location: 'Wimberley, TX',
      service: 'Pre-Purchase Real Estate Inspection',
      text: 'Bought a 10-acre property out in Wimberley with a 5-day option period. The Wranglers scoped the line with a fiber-optic camera, gave us a 6-page plain-English report with actual photo evidence, and explained how to care for caliche soil. Invaluable peace of mind before we signed the closing paperwork.',
      highlight: '6-page photo report before closing'
    },
    {
      name: 'Travis McAllister',
      initials: 'TM',
      avatarBg: '#F9AB00',
      badge: 'Local Guide · 27 reviews',
      timeAgo: '1 month ago',
      location: 'Buda, TX',
      service: 'Routine 3-Year Maintenance & Baffle Check',
      text: 'Most tradesmen you hire leave tire ruts in your grass or drag dirty hoses through flower beds. These guys laid down protective ground mats, dug up the lid without destroying my sod, and left the lawn looking cleaner than when they arrived. 10/10 service.',
      highlight: 'Treated our lawn with total respect'
    },
    {
      name: 'Danielle H.',
      initials: 'DH',
      avatarBg: '#8430CE',
      badge: 'Verified Resident · 6 reviews',
      timeAgo: '2 months ago',
      location: 'Austin / Oak Hill, TX',
      service: 'Polylok Surface Riser Retrofit & Pump',
      text: 'Had them install green surface risers so we never have to dig up 18 inches of caliche rock again. Total game changer. The price was exactly what they quoted over the phone, down to the dollar. Highly recommend Jeff and the crew.',
      highlight: 'Zero surprise charges, exact phone quote'
    },
    {
      name: 'Ranch Manager Ray G.',
      initials: 'RG',
      avatarBg: '#E37400',
      badge: 'Commercial Property · 14 reviews',
      timeAgo: '3 months ago',
      location: 'Blanco, TX',
      service: 'Commercial Ranch System Servicing',
      text: 'We run a working cattle operation and event venue out in Blanco County. We need commercial vacuum power that can handle 2,500 gallons without breaking a sweat. Septic Wranglers is our exclusive crew. Reliable, punctual, and hardworking Texans.',
      highlight: 'Heavy commercial vacuum capacity'
    }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="band-cream section-spacing" style={{ paddingTop: 'clamp(56px, 8vw, 88px)', paddingBottom: 'clamp(56px, 8vw, 96px)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span className="section-kicker" style={{ margin: 0 }}>
                  CENTRAL TEXAS SEPTIC SPECIALISTS
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>•</span>
                <div 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    backgroundColor: '#FFFFFF', 
                    padding: '3px 10px', 
                    border: '1px solid var(--border-tan)', 
                    boxShadow: '0 1px 2px rgba(36, 29, 23, 0.05)' 
                  }}
                >
                  <GoogleGIcon size={16} />
                  <GoogleStars size={13} rating={5} />
                  <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', fontWeight: 700 }}>
                    4.9
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    (280+ Reviews)
                  </span>
                </div>
              </div>

              <h1 style={{ marginBottom: '20px' }}>
                STRAIGHT TALK.<br />FAIR PRICES.<br />REAL WORK.
              </h1>
              
              <div className="rustic-pullquote">
                We take the mystery and hassle out of septic care. Austin homeowners and Hill Country ranches trust our crew to show up when promised, explain what&apos;s going on under their yard, and give an honest price.
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
                <a href="tel:5129762266" className="btn-rust">
                  CALL 512-976-2266
                </a>
                <Link href="/services/septic-tank-pumping" className="btn-dark-outline">
                  VIEW OUR SERVICES
                </Link>
              </div>

              {/* TRUST PROOF COUNTERS */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '16px', marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--border-tan)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--text-dark)', lineHeight: 1 }}>
                    4,800+
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px' }}>
                    Tanks Serviced
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--text-dark)', lineHeight: 1 }}>
                    2,500 GAL
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px' }}>
                    Vacuum Monsters
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--accent-rust)', lineHeight: 1 }}>
                    TCEQ #OS
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px' }}>
                    State Certified
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: 'var(--accent-rust)', lineHeight: 1 }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px' }}>
                    Upfront Rates
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rustic-frame" style={{ aspectRatio: '16/11' }}>
                <Image
                  src="/images/jeff-truck-owner.jpg"
                  alt="Jeff Uskert by Septic Wranglers copper vacuum truck"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="photo-caption">
                OWNER JEFF USKERT &amp; THE COPPER RIG DISPATCHED DAILY ACROSS CENTRAL TEXAS
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW (TAN BAND) */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="section-kicker">WHAT WE DO</span>
            <h2>HONEST TRADE SERVICES BUILT FOR TEXAS SOIL.</h2>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
              gap: '24px' 
            }}
          >
            {services.map((s) => (
              <div key={s.num} className="value-card">
                <div className="value-card-numeral">{s.num}</div>
                <div className="value-card-title">{s.title}</div>
                <p className="value-card-text" style={{ flexGrow: 1, marginBottom: '20px' }}>
                  {s.desc}
                </p>
                <Link 
                  href={`/services/${s.slug}`} 
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

      {/* 3. PROOF OF WORK / WHY CLIENTS TRUST US */}
      <section className="band-cream section-spacing">
        <div className="container">
          <div style={{ marginBottom: '44px' }}>
            <span className="section-kicker">PROOF OF INTEGRITY</span>
            <h2>WHY TEXAS CLIENTS CALL US BACK FOR DECADES.</h2>
            <p style={{ maxWidth: '680px', color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '8px' }}>
              Septic pumping is an invisible trade. You can&apos;t look underground, which is why too many operators cut corners. Here are the iron-clad standards we adhere to on every single visit.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', 
              gap: '24px' 
            }}
          >
            {proofPillars.map((p) => (
              <div key={p.num} className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)' }}>
                <div className="value-card-numeral">{p.num}</div>
                <div className="value-card-title" style={{ fontSize: '1.35rem' }}>{p.title}</div>
                <p className="value-card-text" style={{ fontSize: '0.96rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE WRANGLER DIFFERENCE: SIDE-BY-SIDE PROOF COMPARISON */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div style={{ marginBottom: '40px', textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
            <span className="section-kicker">HONEST TRADESMAN COMPARISON</span>
            <h2>THE WRANGLER DIFFERENCE VS. GENERIC PUMPERS</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Know what you are paying for before anyone pulls a hose across your lawn.
            </p>
          </div>

          <div className="grid-2">
            
            {/* OTHER GUYS */}
            <div 
              className="value-card" 
              style={{ 
                backgroundColor: 'rgba(216, 198, 174, 0.4)', 
                border: '1.5px solid var(--border-tan)',
                opacity: 0.95
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <AlertTriangle size={20} style={{ color: '#9A240A' }} />
                <h3 style={{ fontSize: '1.35rem', color: '#731C08' }}>
                  TYPICAL DISCOUNT PUMPERS
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.96rem' }}>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-dark)' }}>
                  <span style={{ color: '#9A240A', fontWeight: 700 }}>✕</span>
                  <span><strong>Lazy Top Skim:</strong> Pulls only liquid through a 2&quot; hose; leaves 70% of dense bottom sludge behind.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-dark)' }}>
                  <span style={{ color: '#9A240A', fontWeight: 700 }}>✕</span>
                  <span><strong>Skips Baffle Inspection:</strong> Doesn&apos;t bother checking inlet/outlet sanitary tees for collapse.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-dark)' }}>
                  <span style={{ color: '#9A240A', fontWeight: 700 }}>✕</span>
                  <span><strong>The Fake Failure Upsell:</strong> Pressures anxious homeowners into $15k+ unneeded drain field replacements.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-dark)' }}>
                  <span style={{ color: '#9A240A', fontWeight: 700 }}>✕</span>
                  <span><strong>Hidden Fees on Arrival:</strong> Advertises a low teaser price, then adds disposal manifests and digging charges.</span>
                </li>
              </ul>
            </div>

            {/* SEPTIC WRANGLERS */}
            <div 
              className="value-card" 
              style={{ 
                backgroundColor: 'var(--bg-cream-card)', 
                border: '2px solid var(--accent-rust)',
                boxShadow: '6px 6px 0px rgba(36, 29, 23, 0.85)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <BadgeCheck size={22} style={{ color: 'var(--accent-rust)' }} />
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-dark)' }}>
                  THE SEPTIC WRANGLERS STANDARD
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.96rem' }}>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-dark)' }}>
                  <span style={{ color: 'var(--accent-rust)', fontWeight: 700 }}>✓</span>
                  <span><strong>100% Full-Depth Evacuation:</strong> High-vacuum 2,500-gal rig pulls all hardened bottom cakes and top scum.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-dark)' }}>
                  <span style={{ color: 'var(--accent-rust)', fontWeight: 700 }}>✓</span>
                  <span><strong>Dual Baffle Check Included Free:</strong> We verify both sanitary tees to protect your absorption field.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-dark)' }}>
                  <span style={{ color: 'var(--accent-rust)', fontWeight: 700 }}>✓</span>
                  <span><strong>Straightforward Diagnosis:</strong> If a $40 fix or filter cleaning solves it, that is all you will pay.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', color: 'var(--text-dark)' }}>
                  <span style={{ color: 'var(--accent-rust)', fontWeight: 700 }}>✓</span>
                  <span><strong>All-Inclusive Published Rates:</strong> Disposal fees and manifests included. Zero surprise charges.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. VERIFIED CUSTOMER REVIEWS (HOMEOWNERS & RANCHES) */}
      <section className="band-cream section-spacing">
        <div className="container">
          <div style={{ marginBottom: '44px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <span className="section-kicker">VERIFIED TEXAS HOMEOWNERS</span>
                <h2>REAL REVIEWS FROM REAL YARDS.</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '6px', maxWidth: '640px' }}>
                  Authentic, unedited feedback from Texas Hill Country homeowners and ranch operators on our official Google Business profile.
                </p>
              </div>

              <GoogleReviewsSummaryBadge />
            </div>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
              gap: '24px' 
            }}
          >
            {reviews.map((rev, idx) => (
              <div 
                key={idx} 
                className="value-card" 
                style={{ 
                  backgroundColor: 'var(--bg-cream-card)', 
                  border: '1.5px solid var(--border-tan)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {/* TOP GOOGLE BADGE & STARS */}
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginBottom: '14px', 
                    borderBottom: '1px solid var(--border-tan)', 
                    paddingBottom: '10px' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <GoogleGIcon size={18} />
                    <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-display)', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
                      GOOGLE REVIEW
                    </span>
                  </div>
                  <GoogleStars size={15} rating={5} />
                </div>

                {/* REVIEWER PROFILE ROW */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div 
                    style={{ 
                      width: '42px', 
                      height: '42px', 
                      borderRadius: '50%', 
                      backgroundColor: rev.avatarBg, 
                      color: '#FFFFFF', 
                      fontWeight: 700, 
                      fontSize: '0.95rem',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontFamily: 'sans-serif',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
                    }}
                  >
                    {rev.initials}
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--text-dark)', letterSpacing: '0.02em', lineHeight: 1.15 }}>
                      {rev.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginTop: '2px' }}>
                      <span>{rev.badge}</span>
                      <span>•</span>
                      <span>{rev.timeAgo}</span>
                    </div>
                  </div>
                </div>

                {/* HIGHLIGHT BADGE */}
                <div 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '0.98rem', 
                    letterSpacing: '0.03em', 
                    color: 'var(--accent-rust)',
                    marginBottom: '10px'
                  }}
                >
                  &ldquo;{rev.highlight}&rdquo;
                </div>

                {/* REVIEW TEXT */}
                <p 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.65, 
                    color: 'var(--text-dark)', 
                    marginBottom: '20px', 
                    flexGrow: 1 
                  }}
                >
                  &ldquo;{rev.text}&rdquo;
                </p>

                {/* VERIFIED SERVICE & LOCATION FOOTER */}
                <div style={{ borderTop: '1px solid var(--border-tan)', paddingTop: '10px', fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{rev.service}</span>
                  <span style={{ fontStyle: 'italic' }}>{rev.location}</span>
                </div>

              </div>
            ))}
          </div>

          {/* CALLOUT BANNER BELOW REVIEWS */}
          <div 
            style={{ 
              marginTop: '40px', 
              backgroundColor: 'var(--bg-tan-card)', 
              border: '1.5px solid var(--border-tan)', 
              padding: '24px 28px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '16px' 
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--text-dark)' }}>
                WANT TO SPEAK WITH A RECENT CLIENT IN YOUR NEIGHBORHOOD?
              </div>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                We are happy to provide local neighbor references in Dripping Springs, Lakeway, Buda, Wimberley, or Austin.
              </div>
            </div>

            <a href="tel:5129762266" className="btn-rust" style={{ flexShrink: 0 }}>
              CALL 512-976-2266
            </a>
          </div>

        </div>
      </section>

      {/* 6. OWNER SPOTLIGHT TEASER */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            <div>
              <div className="rustic-frame" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/crew-suction-hose.jpg"
                  alt="Septic Wranglers crew caring for property"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="photo-caption">
                RESPECTING YOUR LAWN &amp; SURROUNDINGS ON EVERY JOB
              </div>
            </div>

            <div>
              <span className="section-kicker">OUR PROMISE</span>
              <h2 style={{ marginBottom: '16px' }}>
                &ldquo;IF WE WOULDN&apos;T DO IT ON OUR OWN SYSTEM, WE WON&apos;T DO IT ON YOURS.&rdquo;
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Too many septic companies treat homeowners like quick paychecks — skimming liquid off the top, leaving sludge behind, or recommending thousands in unneeded repairs. We run our business with the straightforward integrity Texas was built on.
              </p>
              <Link href="/about" className="btn-dark-outline">
                READ OUR STORY &amp; RULES
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA BAND */}
      <section className="band-dark" style={{ padding: 'clamp(64px, 8vw, 96px) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', color: 'var(--text-light)', marginBottom: '12px' }}>
            GOT A TANK OR A QUESTION?
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.05rem, 3vw, 1.25rem)', color: 'var(--text-light-muted)', marginBottom: '28px' }}>
            A real Wrangler is on the other end of this number — not a call center.
          </p>
          <div>
            <a 
              href="tel:5129762266" 
              className="btn-rust"
              style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.45rem)', padding: '14px 32px' }}
            >
              CALL 512-976-2266
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
