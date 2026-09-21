'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Wrench, 
  FileText, 
  Download, 
  MapPin, 
  Facebook, 
  Instagram, 
  Star,
  Activity,
  Award
} from 'lucide-react';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  zip: string;
}

interface Answers {
  [key: number]: string;
}

export default function SepticQuotePage() {
  const [stage, setStage] = useState<'hook' | 'quiz' | 'results'>('hook');
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 = Contact, 1-15 = Questions
  const [contact, setContact] = useState<ContactData>({
    name: '',
    email: '',
    phone: '',
    zip: '',
  });
  const [contactErrors, setContactErrors] = useState<{ [key: string]: string }>({});
  const [answers, setAnswers] = useState<Answers>({});
  const [openNotes, setOpenNotes] = useState('');
  const [score, setScore] = useState<number>(0);
  const [calculatedInsights, setCalculatedInsights] = useState<string[]>([]);
  const [ctaBranch, setCtaBranch] = useState<'high' | 'mid' | 'low'>('mid');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Scroll to top when stage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stage, currentStep]);

  // Questions definitions
  const bestPracticeQuestions = [
    {
      id: 1,
      title: 'Do you know the exact age of your septic system?',
      options: [
        { label: 'Yes, it is under 10 years old', points: 10, key: 'age_young' },
        { label: 'Yes, it is 10 to 25+ years old', points: 5, key: 'age_old' },
        { label: 'No idea how old the system or tank is', points: 0, key: 'age_unknown' },
      ]
    },
    {
      id: 2,
      title: 'Has your tank been pumped within the last 3–5 years?',
      options: [
        { label: 'Yes, pumped within the past 1–3 years', points: 10, key: 'pump_recent' },
        { label: 'Pumped 3–5 years ago (likely due soon)', points: 5, key: 'pump_due' },
        { label: 'Over 5 years ago, or never since moving in', points: 0, key: 'pump_overdue' },
      ]
    },
    {
      id: 3,
      title: 'Do you know the exact location of your tank lid and drain field?',
      options: [
        { label: 'Yes, we have surface risers or know the exact spot', points: 10, key: 'loc_known' },
        { label: 'Roughly know the general area of the yard', points: 5, key: 'loc_rough' },
        { label: 'No clue where the tank or pipes are buried', points: 0, key: 'loc_unknown' },
      ]
    },
    {
      id: 4,
      title: 'Have you had a professional inspection in the last 2 years?',
      options: [
        { label: 'Yes, inspected within the past 24 months', points: 10, key: 'insp_recent' },
        { label: 'Only when we originally bought the house', points: 5, key: 'insp_purchase' },
        { label: 'Never had a professional inspection', points: 0, key: 'insp_never' },
      ]
    },
    {
      id: 5,
      title: 'Do you strictly avoid flushing wipes, cooking grease, or harsh chemicals?',
      options: [
        { label: 'Yes, we are very strict about what goes down drains', points: 10, key: 'flush_clean' },
        { label: 'Mostly careful, but wipes or grease occasionally slip by', points: 5, key: 'flush_slip' },
        { label: 'We don’t monitor it / garbage disposal used heavily', points: 0, key: 'flush_dirty' },
      ]
    },
    {
      id: 6,
      title: 'Is your system covered under any warranty or maintenance service plan?',
      options: [
        { label: 'Yes, active warranty or service agreement', points: 10, key: 'plan_yes' },
        { label: 'No active warranty or maintenance plan', points: 0, key: 'plan_no' },
        { label: 'Unsure / not sure what coverage we have', points: 3, key: 'plan_unsure' },
      ]
    },
    {
      id: 7,
      title: 'Have you noticed slow drains, gurgling toilets, sewer odors, or soggy lawn patches?',
      options: [
        { label: 'None at all, all plumbing drains smoothly', points: 10, key: 'sym_none' },
        { label: 'Occasional toilet gurgle or faint smell after heavy rain', points: 4, key: 'sym_mild' },
        { label: 'Yes! Noticeable gurgling, foul odors, or soggy grass', points: 0, key: 'sym_severe' },
      ]
    },
    {
      id: 8,
      title: 'Do you know your tank’s capacity relative to your household size?',
      options: [
        { label: 'Yes, sized properly (e.g. 1,000–1,500 gal for our family)', points: 10, key: 'size_known' },
        { label: 'Not sure of the gallon capacity', points: 0, key: 'size_unknown' },
      ]
    },
    {
      id: 9,
      title: 'Have you had any septic-related backups or repairs in the last 5 years?',
      options: [
        { label: 'Zero backups, overflows, or pipe repairs', points: 10, key: 'rep_none' },
        { label: 'Minor repair (e.g. replaced a baffle or float switch)', points: 6, key: 'rep_minor' },
        { label: 'Yes, experienced a severe backup or line clog', points: 0, key: 'rep_severe' },
      ]
    },
    {
      id: 10,
      title: 'Do you keep a written record or receipt of past service and pumping dates?',
      options: [
        { label: 'Yes, detailed receipts or paperwork on hand', points: 10, key: 'rec_yes' },
        { label: 'No written records or documentation', points: 0, key: 'rec_no' },
      ]
    },
  ];

  const qualifyingQuestions = [
    {
      id: 11,
      title: 'Which best describes your homeownership situation?',
      options: [
        'First-time homeowner',
        'Owned this home 1–5 years',
        'Owned this home 5+ years',
        'Under contract / Buying a home with a septic system',
      ]
    },
    {
      id: 12,
      title: 'What is your main goal in the next 90 days?',
      options: [
        'Avoid a catastrophic, costly septic failure',
        'Get a routine pump & inspection scheduled',
        'Fix a known problem or warning symptom',
        'Just want honest peace of mind & maintenance tips',
      ]
    },
    {
      id: 13,
      title: 'What has stopped you from addressing this so far?',
      options: [
        'Didn’t realize septic maintenance was needed',
        'Cost concerns & fear of surprise bills',
        'Don’t know which local contractor to trust',
        'Just haven’t gotten around to it yet',
      ]
    },
    {
      id: 14,
      title: 'What kind of help would you want from us?',
      options: [
        'Just information & maintenance guidelines for now',
        'A routine preventative pump & baffle check',
        'A full professional real estate / diagnostic inspection',
        'Emergency repair (we have an active issue right now)',
      ]
    }
  ];

  // Contact Validation
  const validateContact = () => {
    const errs: { [key: string]: string } = {};
    if (!contact.name.trim()) errs.name = 'Please enter your name.';
    if (!contact.email.trim() || !contact.email.includes('@')) errs.email = 'Please enter a valid email address.';
    if (!contact.zip.trim() || contact.zip.trim().length < 5) errs.zip = 'Please enter your 5-digit ZIP code.';
    setContactErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleStartQuiz = () => {
    setStage('quiz');
    setCurrentStep(0);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateContact()) {
      setCurrentStep(1);
    }
  };

  const handleSelectOption = (questionId: number, optionLabel: string) => {
    setAnswers({ ...answers, [questionId]: optionLabel });
    // Automatically advance to next step
    if (questionId < 15) {
      setCurrentStep(questionId + 1);
    }
  };

  const handleFinishQuiz = () => {
    // Calculate total score from best practice questions (Q1 to Q10)
    let totalPoints = 0;
    bestPracticeQuestions.forEach((q) => {
      const selected = answers[q.id];
      const opt = q.options.find((o) => o.label === selected);
      if (opt) {
        totalPoints += opt.points;
      }
    });

    setScore(totalPoints);

    // Generate dynamic insights
    const insights: string[] = [];
    if (answers[2]?.includes('Over 5 years') || answers[2]?.includes('never')) {
      insights.push('Your tank is overdue for pumping — compacted sludge and floating crust buildup are the #1 cause of catastrophic drain field failures.');
    } else if (answers[2]?.includes('3–5 years')) {
      insights.push('Your system is entering the critical 3–5 year window where sludge levels typically reach 30% of tank capacity.');
    }

    if (answers[7]?.includes('Noticeable gurgling') || answers[7]?.includes('Occasional toilet gurgle')) {
      insights.push('Gurgling fixtures or sewage smells indicate hydraulic head pressure or a partially obstructed outlet baffle that needs prompt attention.');
    }

    if (answers[3]?.includes('No clue') || answers[3]?.includes('Roughly')) {
      insights.push('Unmarked or deeply buried tank lids add expensive digging labor fees every service visit and risk accidental vehicle damage.');
    }

    if (answers[5]?.includes('wipes or grease') || answers[5]?.includes('garbage disposal')) {
      insights.push('Flushing wipes or food scraps accelerates solid accumulation by up to 50%, requiring much more frequent mechanical evacuation.');
    }

    if (answers[4]?.includes('Never') || answers[4]?.includes('Only when we originally bought')) {
      insights.push('Without a certified inspection in the past 2 years, the structural condition of your concrete baffles and distribution box remains unverified.');
    }

    if (answers[1]?.includes('No idea') || answers[1]?.includes('10 to 25+')) {
      insights.push('Central Texas limestone and caliche terrain can cause older concrete tanks to experience joint seepage or baffle erosion.');
    }

    // Default fallbacks if fewer than 3
    if (insights.length < 1) {
      insights.push('Routine pumping every 2 to 3 years prevents bio-mat clogging in Central Texas caliche soil absorption beds.');
    }
    if (insights.length < 2) {
      insights.push('Installing airtight Polylok surface risers eliminates digging fees and stops stormwater infiltration.');
    }
    if (insights.length < 3) {
      insights.push('A healthy septic system saves $12,000 to $25,000 in premature drain field replacement costs over your homeownership.');
    }

    setCalculatedInsights(insights.slice(0, 3));

    // Determine CTA Branch
    const q14 = answers[14];
    if (q14?.includes('Emergency repair') || totalPoints < 45 || answers[7]?.includes('Noticeable gurgling')) {
      setCtaBranch('high');
    } else if (q14?.includes('Just information') && totalPoints >= 75) {
      setCtaBranch('low');
    } else {
      setCtaBranch('mid');
    }

    // Save lead submission to localStorage
    const leadData = {
      timestamp: new Date().toISOString(),
      contact,
      answers,
      openNotes,
      score: totalPoints,
      ctaBranch: q14?.includes('Emergency repair') ? 'high' : totalPoints < 45 ? 'high' : totalPoints >= 75 ? 'low' : 'mid'
    };

    try {
      const existing = JSON.parse(localStorage.getItem('septic_leads') || '[]');
      existing.push(leadData);
      localStorage.setItem('septic_leads', JSON.stringify(existing));
    } catch (err) {
      console.log('Stored lead locally:', leadData);
    }

    setStage('results');
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '100vh', color: 'var(--text-dark)' }}>
      
      {/* ISOLATED MINIMAL HEADER (UNLINKED BRAND TRUST - NO NAV) */}
      <header 
        style={{ 
          borderBottom: '1px solid var(--border-tan)', 
          backgroundColor: '#FAF6EE',
          padding: '16px 0',
          boxShadow: '0 2px 6px rgba(36,29,23,0.04)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* UNLINKED LOGO & BUSINESS NAME (NO PATH BACK TO NAV) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                fontSize: 'clamp(1.25rem, 4vw, 1.65rem)', 
                letterSpacing: '0.04em', 
                color: 'var(--text-dark)',
                lineHeight: 1
              }}
            >
              SEPTIC WRANGLERS
            </span>
          </div>

          {/* DISCREET TRUST HOTLINE */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-display)', color: 'var(--text-muted)', letterSpacing: '0.05em' }} className="hide-mobile">
              QUESTIONS?
            </span>
            <a 
              href="tel:5129762266" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontFamily: 'var(--font-display)', 
                fontSize: '1rem', 
                color: 'var(--accent-rust)', 
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              <Phone size={14} />
              512-976-2266
            </a>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* STAGE 1: THE HOOK & VALUE PROP LANDING PAGE               */}
      {/* ========================================================= */}
      {stage === 'hook' && (
        <div>
          {/* HERO SECTION */}
          <section className="band-cream section-spacing" style={{ paddingTop: 'clamp(56px, 8vw, 84px)', paddingBottom: 'clamp(56px, 8vw, 84px)' }}>
            <div className="container" style={{ maxWidth: '920px', textAlign: 'center' }}>
              
              <span className="section-kicker" style={{ display: 'inline-block', marginBottom: '12px' }}>
                FREE 2-MINUTE SEPTIC AUDIT · CENTRAL TEXAS HOMEOWNERS
              </span>

              {/* FRUSTRATION HOOK HEADLINE */}
              <h1 style={{ marginBottom: '22px', fontSize: 'clamp(2.4rem, 6.5vw, 4.2rem)' }}>
                FEELING LIKE YOUR SEPTIC SYSTEM IS A TICKING TIME BOMB YOU KNOW NOTHING ABOUT?
              </h1>

              {/* SUBHEADING */}
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '760px', margin: '0 auto 36px auto' }}>
                Answer 12 quick questions to calculate your <strong>Septic Risk Score</strong> — and discover exactly what to do before a $15,000 emergency failure strikes your yard.
              </p>

              {/* PRIMARY CTA BUTTON */}
              <div>
                <button
                  type="button"
                  onClick={handleStartQuiz}
                  className="btn-rust"
                  style={{ 
                    fontSize: 'clamp(1.2rem, 4vw, 1.55rem)', 
                    padding: 'clamp(14px, 3vw, 18px) clamp(24px, 5vw, 44px)',
                    boxShadow: 'var(--shadow-rustic)' 
                  }}
                >
                  START MY FREE RISK ASSESSMENT →
                </button>
                <div style={{ marginTop: '14px', fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Takes about 2 minutes · Completely free · Instant score &amp; recommendations
                </div>
              </div>

            </div>
          </section>

          {/* VALUE PROPOSITION: 3 COLUMNS */}
          <section className="band-tan section-spacing-sm" style={{ paddingBottom: 'clamp(56px, 7vw, 80px)' }}>
            <div className="container">
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
                <span className="section-kicker">WHAT YOU WILL UNCOVER</span>
                <h2>TAKE THIS 2-MINUTE ASSESSMENT TO MEASURE THREE CRITICAL THINGS:</h2>
              </div>

              <div className="grid-3">
                
                {/* CARD 1 */}
                <div className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--accent-rust-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-rust)', marginBottom: '16px' }}>
                    <AlertTriangle size={26} />
                  </div>
                  <div className="value-card-numeral">01</div>
                  <div className="value-card-title" style={{ fontSize: '1.4rem' }}>
                    SYSTEM AGE &amp; FAILURE RISK
                  </div>
                  <p className="value-card-text">
                    Discover whether your tank and drain field are operating safely or nearing structural fatigue, root intrusion, or soil saturation in Texas caliche.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--accent-rust-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-rust)', marginBottom: '16px' }}>
                    <Clock size={26} />
                  </div>
                  <div className="value-card-numeral">02</div>
                  <div className="value-card-title" style={{ fontSize: '1.4rem' }}>
                    YOUR MAINTENANCE GAPS
                  </div>
                  <p className="value-card-text">
                    Pinpoint what is overdue, which baffles or filters are uninspected, and which household habits are quietly shaving years off your system’s life.
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--accent-rust-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-rust)', marginBottom: '16px' }}>
                    <DollarSign size={26} />
                  </div>
                  <div className="value-card-numeral">03</div>
                  <div className="value-card-title" style={{ fontSize: '1.4rem' }}>
                    REPAIR &amp; COST EXPOSURE
                  </div>
                  <p className="value-card-text">
                    See whether your property is protected with minor $395 routine care or facing financial risk for a catastrophic $10,000–$25,000 drain field replacement.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* CREDIBILITY SECTION */}
          <section className="band-cream section-spacing">
            <div className="container" style={{ maxWidth: '960px' }}>
              
              <div 
                className="value-card" 
                style={{ 
                  padding: 'clamp(28px, 5vw, 44px)', 
                  backgroundColor: 'var(--bg-tan-card)',
                  border: '1.5px solid var(--border-tan)' 
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '32px', alignItems: 'center' }}>
                  
                  <div>
                    <div className="rustic-frame" style={{ aspectRatio: '4/3', maxWidth: '340px' }}>
                      <Image
                        src="/images/jeff-truck-owner.jpg"
                        alt="Jeff Uskert, founder of Septic Wranglers"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 340px"
                      />
                    </div>
                    <div className="photo-caption" style={{ textAlign: 'center' }}>
                      JEFF USKERT · FOUNDER &amp; MASTER OSSF OPERATOR
                    </div>
                  </div>

                  <div>
                    <span className="section-kicker">BUILT ON 30+ YEARS OF TEXAS TRADE TRUTH</span>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '14px' }}>
                      WHY THIS RISK ASSESSMENT IS TRUSTED ACROSS CENTRAL TEXAS
                    </h3>
                    
                    <p style={{ fontSize: '1.02rem', lineHeight: 1.68, marginBottom: '16px', color: 'var(--text-dark)' }}>
                      This diagnostic tool wasn&apos;t coded by marketing tech reps. It was built directly by <strong>Jeff Uskert</strong>, drawing on three decades of inspecting, troubleshooting, and pumping tanks across Austin and the Hill Country.
                    </p>

                    <div style={{ backgroundColor: 'rgba(211, 58, 24, 0.08)', borderLeft: '3px solid var(--accent-rust)', padding: '12px 16px', marginBottom: '20px' }}>
                      <p style={{ fontStyle: 'italic', fontSize: '0.98rem', color: 'var(--text-dark)', margin: 0 }}>
                        &ldquo;Most catastrophic septic failures could have been caught 12 to 18 months earlier with basic warning sign detection. Answering these 12 questions will show you exactly where your system stands.&rdquo;
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.86rem', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
                      <span>✓ 4,800+ TANKS SERVICED</span>
                      <span>✓ TCEQ #OS LICENSED</span>
                      <span>✓ 100% UNBIASED ADVICE</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* SECOND CTA */}
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <button
                  type="button"
                  onClick={handleStartQuiz}
                  className="btn-rust"
                  style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.45rem)', padding: '16px 36px' }}
                >
                  START MY FREE RISK ASSESSMENT
                </button>
                <div style={{ marginTop: '12px', fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Takes about 2 minutes · Completely free · Instant score &amp; recommendations
                </div>
              </div>

            </div>
          </section>

          {/* MINIMAL FOOTER FOR FUNNEL (NO SITE NAV) */}
          <footer style={{ backgroundColor: 'var(--bg-dark-brown)', color: 'var(--text-light-muted)', padding: '40px 0', borderTop: '2px solid var(--border-dark-brown)', textAlign: 'center', fontSize: '0.85rem' }}>
            <div className="container">
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-light)', letterSpacing: '0.05em', marginBottom: '8px' }}>
                SEPTIC WRANGLERS · CENTRAL TEXAS
              </div>
              <p style={{ maxWidth: '600px', margin: '0 auto 16px auto', fontStyle: 'italic' }}>
                Serving Austin, Dripping Springs, Lakeway, Buda, Kyle, Wimberley, and the Texas Hill Country.
              </p>
              <div style={{ color: 'var(--accent-rust)', fontWeight: 600, marginBottom: '16px' }}>
                Questions? Call Jeff and the crew directly: 512-976-2266
              </div>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-display)', letterSpacing: '0.08em', color: 'rgba(250, 246, 238, 0.5)' }}>
                © {new Date().getFullYear()} SEPTIC WRANGLERS · ALL RIGHTS RESERVED · TCEQ COMPLIANT
              </div>
            </div>
          </footer>

        </div>
      )}

      {/* ========================================================= */}
      {/* STAGE 2: THE MULTI-STEP QUIZ (IN-STATE TRANSITIONS)       */}
      {/* ========================================================= */}
      {stage === 'quiz' && (
        <section className="section-spacing" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            
            {/* PROGRESS BAR */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--text-dark)', letterSpacing: '0.05em' }}>
                  {currentStep === 0 ? 'STEP 1 OF 16: CONTACT & LOCATION' : `QUESTION ${currentStep} OF 15`}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--accent-rust)', letterSpacing: '0.05em' }}>
                  {Math.round(((currentStep) / 16) * 100)}% COMPLETED
                </span>
              </div>

              <div style={{ width: '100%', height: '10px', backgroundColor: 'var(--bg-tan)', border: '1px solid var(--border-tan)', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    width: `${Math.round(((currentStep + 1) / 16) * 100)}%`, 
                    height: '100%', 
                    backgroundColor: 'var(--accent-rust)', 
                    transition: 'width 0.25s ease-in-out' 
                  }} 
                />
              </div>
            </div>

            {/* STEP 0: CONTACT CAPTURE */}
            {currentStep === 0 && (
              <div className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)', padding: 'clamp(24px, 5vw, 40px)' }}>
                <span className="section-kicker">STEP 1 OF 16 · INSTANT RESULTS DESTINATION</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.4rem)', marginBottom: '12px' }}>
                  WHERE SHOULD WE SEND YOUR RISK SCORE &amp; REPORT?
                </h2>
                <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '28px' }}>
                  We calculate your local soil zone by ZIP code to measure rock/caliche depth, and generate your instant personalized action plan.
                </p>

                <form onSubmit={handleContactSubmit}>
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      className="form-input-rustic"
                      placeholder="e.g. Clint Walker"
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    />
                    {contactErrors.name && <span style={{ color: 'var(--accent-rust)', fontSize: '0.84rem' }}>{contactErrors.name}</span>}
                  </div>

                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
                      EMAIL ADDRESS * (FOR YOUR INSTANT REPORT)
                    </label>
                    <input
                      type="email"
                      className="form-input-rustic"
                      placeholder="e.g. clint@example.com"
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    />
                    {contactErrors.email && <span style={{ color: 'var(--accent-rust)', fontSize: '0.84rem' }}>{contactErrors.email}</span>}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '18px', marginBottom: '28px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
                        PHONE NUMBER (OPTIONAL)
                      </label>
                      <input
                        type="tel"
                        className="form-input-rustic"
                        placeholder="e.g. 512-555-0199 (for SMS alert)"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
                        PROPERTY ZIP CODE *
                      </label>
                      <input
                        type="text"
                        className="form-input-rustic"
                        placeholder="e.g. 78620, 78738"
                        maxLength={5}
                        value={contact.zip}
                        onChange={(e) => setContact({ ...contact, zip: e.target.value })}
                      />
                      {contactErrors.zip && <span style={{ color: 'var(--accent-rust)', fontSize: '0.84rem' }}>{contactErrors.zip}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--border-tan)' }}>
                    <button
                      type="button"
                      onClick={() => setStage('hook')}
                      className="btn-dark-outline"
                      style={{ padding: '12px 20px', fontSize: '1.05rem' }}
                    >
                      ← BACK
                    </button>

                    <button
                      type="submit"
                      className="btn-rust"
                      style={{ fontSize: '1.25rem', padding: '14px 32px' }}
                    >
                      CONTINUE TO QUESTIONS →
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* QUESTIONS 1–10: BEST PRACTICE SCORED QUESTIONS */}
            {currentStep >= 1 && currentStep <= 10 && (
              (() => {
                const q = bestPracticeQuestions[currentStep - 1];
                return (
                  <div className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)', padding: 'clamp(24px, 5vw, 40px)' }}>
                    <span className="section-kicker">BEST PRACTICE QUESTION {currentStep} OF 10</span>
                    <h2 style={{ fontSize: 'clamp(1.7rem, 4.5vw, 2.3rem)', marginBottom: '24px' }}>
                      {q.title}
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                      {q.options.map((opt) => {
                        const isSelected = answers[q.id] === opt.label;
                        return (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => handleSelectOption(q.id, opt.label)}
                            style={{
                              padding: '18px 20px',
                              textAlign: 'left',
                              backgroundColor: isSelected ? 'var(--bg-tan-card)' : 'var(--bg-cream-card)',
                              border: isSelected ? '2px solid var(--accent-rust)' : '1.5px solid var(--border-tan)',
                              boxShadow: isSelected ? 'var(--shadow-rustic)' : 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '12px',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.08rem', color: 'var(--text-dark)', fontWeight: isSelected ? 600 : 400 }}>
                              {opt.label}
                            </span>
                            <span 
                              style={{ 
                                width: '22px', 
                                height: '22px', 
                                borderRadius: '50%', 
                                border: isSelected ? '6px solid var(--accent-rust)' : '2px solid var(--border-tan)',
                                flexShrink: 0 
                              }} 
                            />
                          </button>
                        );
                      })}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="btn-dark-outline"
                        style={{ padding: '10px 18px', fontSize: '1rem' }}
                      >
                        ← BACK
                      </button>

                      {answers[q.id] && (
                        <button
                          type="button"
                          onClick={() => setCurrentStep(currentStep + 1)}
                          className="btn-rust"
                          style={{ padding: '10px 24px', fontSize: '1.1rem' }}
                        >
                          NEXT →
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()
            )}

            {/* QUESTIONS 11–14: QUALIFYING QUESTIONS */}
            {currentStep >= 11 && currentStep <= 14 && (
              (() => {
                const q = qualifyingQuestions[currentStep - 11];
                return (
                  <div className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)', padding: 'clamp(24px, 5vw, 40px)' }}>
                    <span className="section-kicker">QUALIFYING QUESTION {currentStep - 10} OF 5</span>
                    <h2 style={{ fontSize: 'clamp(1.7rem, 4.5vw, 2.3rem)', marginBottom: '24px' }}>
                      {q.title}
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                      {q.options.map((optLabel) => {
                        const isSelected = answers[q.id] === optLabel;
                        return (
                          <button
                            key={optLabel}
                            type="button"
                            onClick={() => handleSelectOption(q.id, optLabel)}
                            style={{
                              padding: '18px 20px',
                              textAlign: 'left',
                              backgroundColor: isSelected ? 'var(--bg-tan-card)' : 'var(--bg-cream-card)',
                              border: isSelected ? '2px solid var(--accent-rust)' : '1.5px solid var(--border-tan)',
                              boxShadow: isSelected ? 'var(--shadow-rustic)' : 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '12px',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.08rem', color: 'var(--text-dark)', fontWeight: isSelected ? 600 : 400 }}>
                              {optLabel}
                            </span>
                            <span 
                              style={{ 
                                width: '22px', 
                                height: '22px', 
                                borderRadius: '50%', 
                                border: isSelected ? '6px solid var(--accent-rust)' : '2px solid var(--border-tan)',
                                flexShrink: 0 
                              }} 
                            />
                          </button>
                        );
                      })}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="btn-dark-outline"
                        style={{ padding: '10px 18px', fontSize: '1rem' }}
                      >
                        ← BACK
                      </button>

                      {answers[q.id] && (
                        <button
                          type="button"
                          onClick={() => setCurrentStep(currentStep + 1)}
                          className="btn-rust"
                          style={{ padding: '10px 24px', fontSize: '1.1rem' }}
                        >
                          NEXT →
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()
            )}

            {/* QUESTION 15: FINAL OPEN TEXT QUALIFYING QUESTION */}
            {currentStep === 15 && (
              <div className="value-card" style={{ backgroundColor: 'var(--bg-cream-card)', padding: 'clamp(24px, 5vw, 40px)' }}>
                <span className="section-kicker">FINAL QUESTION 5 OF 5</span>
                <h2 style={{ fontSize: 'clamp(1.7rem, 4.5vw, 2.3rem)', marginBottom: '12px' }}>
                  ANYTHING ELSE WE SHOULD KNOW ABOUT YOUR SYSTEM?
                </h2>
                <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '24px' }}>
                  Optional — mention gate codes, pets, recent drain behavior, or special driveway instructions.
                </p>

                <div style={{ marginBottom: '28px' }}>
                  <textarea
                    className="form-textarea-rustic"
                    rows={4}
                    placeholder="e.g. Tank hasn't been pumped since we bought the home 4 years ago; notice gurgling when washing machine drains."
                    value={openNotes}
                    onChange={(e) => setOpenNotes(e.target.value)}
                  ></textarea>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', borderTop: '1px solid var(--border-tan)', paddingTop: '20px' }}>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(14)}
                    className="btn-dark-outline"
                    style={{ padding: '10px 18px', fontSize: '1rem' }}
                  >
                    ← BACK
                  </button>

                  <button
                    type="button"
                    onClick={handleFinishQuiz}
                    className="btn-rust"
                    style={{ fontSize: '1.35rem', padding: '16px 36px' }}
                  >
                    CALCULATE MY RISK SCORE →
                  </button>
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* STAGE 3: DYNAMIC RESULTS PAGE (SAME ROUTE, FINAL STEP)    */}
      {/* ========================================================= */}
      {stage === 'results' && (
        <div>
          <section className="section-spacing" style={{ paddingTop: 'clamp(48px, 6vw, 72px)', paddingBottom: '72px' }}>
            <div className="container" style={{ maxWidth: '860px' }}>
              
              {/* THE BIG REVEAL CARD */}
              <div 
                className="value-card" 
                style={{ 
                  backgroundColor: 'var(--bg-cream-card)', 
                  padding: 'clamp(28px, 6vw, 48px)',
                  textAlign: 'center',
                  marginBottom: '40px',
                  border: '2px solid var(--border-tan)'
                }}
              >
                <span className="section-kicker">PERSONALIZED SEPTIC AUDIT RESULTS</span>
                
                {/* VERDICT HEADLINE */}
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '8px' }}>
                  {score >= 75 
                    ? 'YOUR SYSTEM IS IN GOOD SHAPE' 
                    : score >= 45 
                    ? 'SOLID FOUNDATION, A FEW GAPS TO CLOSE' 
                    : 'YOUR SYSTEM NEEDS ATTENTION SOON'}
                </h1>

                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.08rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
                  Prepared for {contact.name || 'Central Texas Homeowner'} · ZIP {contact.zip || 'Local'}
                </div>

                {/* VISUAL SCORE METER GAUGE */}
                <div style={{ position: 'relative', width: '220px', height: '140px', margin: '0 auto 24px auto' }}>
                  <svg viewBox="0 0 200 120" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                    {/* Background Arc */}
                    <path
                      d="M 20 110 A 80 80 0 0 1 180 110"
                      fill="none"
                      stroke="#E2D3BE"
                      strokeWidth="18"
                      strokeLinecap="round"
                    />
                    {/* Dynamic Filled Arc */}
                    <path
                      d="M 20 110 A 80 80 0 0 1 180 110"
                      fill="none"
                      stroke="var(--accent-rust)"
                      strokeWidth="18"
                      strokeLinecap="round"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (251.2 * (score / 100))}
                      style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                    />
                  </svg>
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--accent-rust)', lineHeight: 1 }}>
                      {score}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                      OUT OF 100
                    </div>
                  </div>
                </div>

                <div style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: score >= 75 ? 'rgba(34, 197, 94, 0.15)' : score >= 45 ? 'rgba(211, 58, 24, 0.12)' : 'rgba(239, 68, 68, 0.2)', border: '1px solid var(--border-tan)', fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: score >= 75 ? '#15803d' : 'var(--accent-rust)', letterSpacing: '0.05em', marginBottom: '16px' }}>
                  RISK ASSESSMENT: {score >= 75 ? 'LOW RISK (PROACTIVE MAINTENANCE)' : score >= 45 ? 'MODERATE RISK (MAINTENANCE DUE)' : 'HIGH RISK (ACTIVE DEFICIENCY RISK)'}
                </div>
              </div>

              {/* THREE PERSONALIZED INSIGHTS */}
              <div style={{ marginBottom: '44px' }}>
                <span className="section-kicker">KEY FINDINGS</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '20px' }}>
                  THREE THINGS WE NOTICED ABOUT YOUR PROPERTY:
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {calculatedInsights.map((insight, idx) => (
                    <div 
                      key={idx} 
                      className="value-card" 
                      style={{ 
                        backgroundColor: 'var(--bg-tan-card)', 
                        padding: '24px 28px',
                        borderLeft: '4px solid var(--accent-rust)' 
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--accent-rust)', lineHeight: 1, flexShrink: 0 }}>
                          0{idx + 1}
                        </div>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.02rem', color: 'var(--text-dark)', margin: 0, lineHeight: 1.65 }}>
                          {insight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* NEXT STEPS BRANCHING BY QUALIFICATION LEVEL */}
              
              {/* BRANCH 1: HIGH RISK / URGENT (SCORE < 45 OR EMERGENCY REPAIR) */}
              {ctaBranch === 'high' && (
                <div 
                  className="value-card" 
                  style={{ 
                    backgroundColor: '#FFF8F6', 
                    border: '2px solid var(--accent-rust)', 
                    padding: 'clamp(28px, 5vw, 44px)',
                    boxShadow: 'var(--shadow-rustic)' 
                  }}
                >
                  <span className="section-kicker">RECOMMENDED IMMEDIATE ACTION</span>
                  <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.6rem)', color: 'var(--accent-rust)', marginBottom: '12px' }}>
                    BOOK A SAME-DAY DIAGNOSTIC INSPECTION
                  </h2>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '24px', lineHeight: 1.68 }}>
                    Based on your reported warning signs or overdue cleanout history, raw sewage is at risk of flooding your home&apos;s lowest plumbing fixtures or pushing solids into your caliche drain field. Our master pumper crew can dispatch today.
                  </p>

                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <a 
                      href="tel:5129762266" 
                      className="btn-rust"
                      style={{ fontSize: '1.35rem', padding: '16px 36px', gap: '10px' }}
                    >
                      <Phone size={20} />
                      CALL 512-976-2266 NOW
                    </a>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                      OR CREW WILL CONTACT: <strong>{contact.phone || contact.email}</strong>
                    </span>
                  </div>
                </div>
              )}

              {/* BRANCH 2: MID RISK (SCORE 45–74 OR ROUTINE/INSPECTION GOAL) */}
              {ctaBranch === 'mid' && (
                <div 
                  className="value-card" 
                  style={{ 
                    backgroundColor: 'var(--bg-cream-card)', 
                    border: '2px solid var(--border-tan)', 
                    padding: 'clamp(28px, 5vw, 44px)',
                    boxShadow: 'var(--shadow-rustic)' 
                  }}
                >
                  <span className="section-kicker">RECOMMENDED PREVENTATIVE ACTION</span>
                  <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.6rem)', marginBottom: '12px' }}>
                    SCHEDULE YOUR ROUTINE PUMP &amp; INSPECTION
                  </h2>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '24px', lineHeight: 1.68 }}>
                    Your system has a solid foundation, but closing your maintenance gap now prevents an emergency down the road. Lock in our published rates for complete bottom-sludge vacuum evacuation and a free dual-baffle check.
                  </p>

                  {!bookingConfirmed ? (
                    <div>
                      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '16px' }}>
                        <a 
                          href="tel:5129762266" 
                          className="btn-rust"
                          style={{ fontSize: '1.35rem', padding: '16px 36px' }}
                        >
                          CALL 512-976-2266 TO SCHEDULE
                        </a>

                        <button
                          type="button"
                          onClick={() => setBookingConfirmed(true)}
                          className="btn-dark-outline"
                          style={{ fontSize: '1.15rem' }}
                        >
                          CONFIRM SERVICE REQUEST FOR {contact.name.split(' ')[0] || 'ME'}
                        </button>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                        No upfront payment · Invoiced after cleanout · Published upfront rates
                      </div>
                    </div>
                  ) : (
                    <div style={{ backgroundColor: 'var(--bg-tan-card)', border: '1.5px solid var(--accent-rust)', padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--accent-rust)', marginBottom: '6px' }}>
                        ✓ SERVICE PRIORITY RESERVED
                      </div>
                      <p style={{ fontFamily: 'var(--font-serif)', margin: 0, fontSize: '1rem' }}>
                        Jeff or a dispatcher will reach out to <strong>{contact.phone || contact.email}</strong> to confirm your exact appointment window.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* BRANCH 3: LOW RISK (SCORE >= 75 AND JUST INFO) */}
              {ctaBranch === 'low' && (
                <div 
                  className="value-card" 
                  style={{ 
                    backgroundColor: 'var(--bg-cream-card)', 
                    border: '2px solid var(--border-tan)', 
                    padding: 'clamp(28px, 5vw, 44px)',
                    boxShadow: 'var(--shadow-rustic)' 
                  }}
                >
                  <span className="section-kicker">KEEP YOUR SCORE HIGH</span>
                  <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.6rem)', marginBottom: '12px' }}>
                    DOWNLOAD OUR FREE TEXAS SEPTIC MAINTENANCE GUIDE
                  </h2>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '24px', lineHeight: 1.68 }}>
                    Great work keeping your system protected. To maintain your low-risk status, download our official Central Texas Homeowner Care Checklist — covering caliche drain field rules, landscaping safety zones, and garbage disposal management.
                  </p>

                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <a
                      href="#download"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Your Texas Septic Care Guide has been sent to ' + contact.email + '!');
                      }}
                      className="btn-rust"
                      style={{ fontSize: '1.25rem', padding: '16px 32px', gap: '8px' }}
                    >
                      <Download size={18} />
                      GET THE FREE MAINTENANCE PDF
                    </a>

                    <a href="tel:5129762266" className="btn-dark-outline">
                      OR CALL TO ASK JEFF A QUESTION
                    </a>
                  </div>
                </div>
              )}

            </div>
          </section>

          {/* FUNNEL CLOSING FOOTER WITH SINGLE DISCRETE HOMEPAGE LINK (NO NAV) */}
          <footer style={{ backgroundColor: 'var(--bg-dark-brown)', color: 'var(--text-light)', paddingTop: '64px', paddingBottom: '36px', borderTop: '2px solid var(--border-dark-brown)' }}>
            <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ position: 'relative', width: '36px', height: '36px' }}>
                  <Image
                    src="/images/logo.svg"
                    alt="Septic Wranglers Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-light)', letterSpacing: '0.04em' }}>
                  SEPTIC WRANGLERS
                </span>
              </div>

              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-light-muted)', maxWidth: '580px', margin: '0 auto 20px auto' }}>
                Straight talk, fair prices, and iron-clad septic care in Austin and the Texas Hill Country.
              </p>

              <div style={{ marginBottom: '24px' }}>
                <a 
                  href="tel:5129762266" 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '2rem', 
                    color: 'var(--accent-rust)', 
                    textDecoration: 'none' 
                  }}
                >
                  512-976-2266
                </a>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-light-muted)', marginTop: '4px' }}>
                  Austin · Travis Co · Dripping Springs · Wimberley · Buda · Kyle · Blanco · Burnet
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ width: '38px', height: '38px', backgroundColor: '#352C23', border: '1px solid #4A3E32', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', textDecoration: 'none' }}
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ width: '38px', height: '38px', backgroundColor: '#352C23', border: '1px solid #4A3E32', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', textDecoration: 'none' }}
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://yelp.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ width: '38px', height: '38px', backgroundColor: '#352C23', border: '1px solid #4A3E32', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', textDecoration: 'none' }}
                  aria-label="Yelp"
                >
                  <Star size={18} />
                </a>
              </div>

              {/* SINGLE DISCRETE PATH BACK TO HOMEPAGE ONLY (NO NAV) */}
              <div style={{ borderTop: '1px solid var(--border-dark-brown)', paddingTop: '20px', marginBottom: '16px' }}>
                <Link 
                  href="/" 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '0.95rem', 
                    color: 'var(--text-light-muted)', 
                    textDecoration: 'underline',
                    opacity: 0.8
                  }}
                >
                  ← Visit Septic Wranglers Homepage
                </Link>
              </div>

              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-display)', letterSpacing: '0.08em', color: 'rgba(250, 246, 238, 0.4)' }}>
                © {new Date().getFullYear()} SEPTIC WRANGLERS · TCEQ COMPLIANT · STANDALONE AUDIT FUNNEL
              </div>

            </div>
          </footer>

        </div>
      )}

    </div>
  );
}
