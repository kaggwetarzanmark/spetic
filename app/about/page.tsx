import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoogleGIcon, GoogleStars } from '@/components/GoogleIcon';

export const metadata = {
  title: 'About Us | Septic Wranglers | Austin Born. Texas Focused.',
  description: 'Meet Jeff Uskert and the Septic Wranglers crew. Real Texans, real trucks, real work. Straight talk, fair prices, and iron-clad septic pumping & repair in Central Texas.',
};

export default function AboutPage() {
  const rules = [
    {
      num: '01',
      title: 'STRAIGHT TALK',
      text: "We tell you what's wrong, what it costs, and what we'd do if it were our own property. No upsells, no scare tactics."
    },
    {
      num: '02',
      title: 'FAIR PRICES',
      text: 'Published rates. No surprise add-ons. If it costs more than the quote, we eat the difference.'
    },
    {
      num: '03',
      title: 'IRON-CLAD WORK',
      text: 'Anything we install or repair, we stand behind. If it fails, we come back and make it right.'
    },
    {
      num: '04',
      title: 'EDUCATE CUSTOMERS',
      text: 'A homeowner who understands their system saves thousands over its life. We answer questions plainly. No jargon.'
    }
  ];

  return (
    <div>
      {/* 1. HERO INTRO BLOCK */}
      <section className="band-cream section-spacing" style={{ paddingTop: 'clamp(56px, 8vw, 88px)', paddingBottom: 'clamp(48px, 6vw, 72px)' }}>
        <div className="container">
          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <span className="section-kicker" style={{ margin: 0 }}>ABOUT US</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>•</span>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFFFFF', padding: '3px 10px', border: '1px solid var(--border-tan)', boxShadow: '0 1px 2px rgba(36, 29, 23, 0.05)' }}>
                <GoogleGIcon size={16} />
                <GoogleStars size={13} rating={5} />
                <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', fontWeight: 700 }}>
                  4.9 RATING
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  (280+ Reviews)
                </span>
              </div>
            </div>
            <h1 style={{ marginBottom: '20px' }}>
              AUSTIN BORN.<br />TEXAS FOCUSED.
            </h1>
            <div className="rustic-pullquote">
              We started Septic Wranglers because Austin homeowners deserved a septic company that picked up the phone, showed up on time, and explained what was happening under their yard. So we built one.
            </div>
          </div>
        </div>
      </section>

      {/* 2. "MEET THE OWNER / FOUNDER" SECTION */}
      <section className="band-cream section-spacing-sm" style={{ paddingBottom: 'clamp(56px, 8vw, 96px)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            {/* LEFT: PHOTO OF JEFF & TRUCK */}
            <div>
              <div className="rustic-frame" style={{ aspectRatio: '16/10' }}>
                <Image
                  src="/images/jeff-truck-owner.jpg"
                  alt="Jeff Uskert, founder of Septic Wranglers, standing by custom copper vacuum truck"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* RIGHT: OWNER BIO & PERSONAL MOTTO */}
            <div>
              <span className="section-kicker">THE OWNER</span>
              <h2 style={{ marginBottom: '16px' }}>
                MEET JEFF USKERT.
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '1.02rem', color: 'var(--text-dark)', lineHeight: 1.7 }}>
                <p>
                  Jeff founded Septic Wranglers with one goal: bring straight talk and consistent quality to a trade that doesn&apos;t always have either. Born in Texas, raised on the value of a hard day&apos;s work, he runs the business the way he&apos;d want a contractor to run a job at his own house — show up when you said you would, give a fair price, leave the place better than you found it.
                </p>
                <p>
                  When he&apos;s not pulling lids or spotting trends, you&apos;ll find him out in the Hill Country with his family, talking shop with anyone who&apos;ll listen, or hand-painting another quirky design onto the side of a truck.
                </p>
                <div style={{ fontStyle: 'italic', color: 'var(--text-muted)', paddingTop: '6px', fontSize: '1.02rem' }}>
                  &ldquo;If we wouldn&apos;t do it on our own septic system, we won&apos;t do it on yours. That&apos;s the law.&rdquo;
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. "THE CREW" SECTION (FULL-WIDTH TAN/KHAKI BAND) */}
      <section className="band-tan section-spacing">
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="section-kicker">THE CREW</span>
            <h2>REAL TEXANS. REAL TRUCKS. REAL WORK.</h2>
          </div>

          <div className="grid-2">
            
            {/* PHOTO 1 */}
            <div>
              <div className="rustic-frame" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/crew-suction-hose.jpg"
                  alt="Wrangler technician feeding suction hose into residential septic riser"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="photo-caption">
                SHOWING MAXIMUM EMPATHY FOR THE MANHOLE &amp; SURROUNDINGS
              </div>
            </div>

            {/* PHOTO 2 */}
            <div>
              <div className="rustic-frame" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/monster-pumper-truck.jpg"
                  alt="Septic Wranglers custom copper 2,500 gallon vacuum tanker rig"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="photo-caption">
                OUR MONSTERS ARE ALL BARK — 2,500 GALLONS AT A TIME
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. "WHAT WE BELIEVE" SECTION */}
      <section className="band-cream section-spacing">
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <span className="section-kicker">WHAT WE BELIEVE</span>
            <h2>FOUR RULES WE LIVE BY.</h2>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', 
              gap: '24px' 
            }}
          >
            {rules.map((rule) => (
              <div key={rule.num} className="value-card">
                <div className="value-card-numeral">{rule.num}</div>
                <div className="value-card-title">{rule.title}</div>
                <p className="value-card-text">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA BAND (FULL-WIDTH DARK CHARCOAL/BROWN) */}
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
