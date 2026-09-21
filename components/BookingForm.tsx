'use client';

import React, { useState } from 'react';
import { Phone, Check, Send } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    town: '',
    service: 'pumping',
    urgency: 'routine',
    tankNotes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div 
        className="value-card" 
        style={{ 
          padding: 'clamp(32px, 6vw, 48px) clamp(20px, 4vw, 36px)', 
          backgroundColor: 'var(--bg-cream-card)', 
          textAlign: 'center',
          border: '2px solid var(--accent-rust)' 
        }}
      >
        <span className="section-kicker">DISPATCH LOGGED</span>
        <h2 style={{ marginBottom: '14px', fontSize: 'clamp(1.8rem, 5vw, 2.4rem)' }}>WE GOT YOUR MESSAGE, PARTNER.</h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1rem, 3vw, 1.15rem)', color: 'var(--text-dark)', maxWidth: '560px', margin: '0 auto 24px auto' }}>
          Thank you, <strong>{formData.name || 'homeowner'}</strong>. Jeff or one of the Wranglers will call you at <strong>{formData.phone || 'your number'}</strong> shortly to confirm your service window.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button 
            type="button" 
            className="btn-dark-outline"
            onClick={() => setSubmitted(false)}
            style={{ width: '100%', maxWidth: '280px' }}
          >
            SUBMIT ANOTHER REQUEST
          </button>
          <a href="tel:5129762266" className="btn-rust" style={{ width: '100%', maxWidth: '280px' }}>
            CALL US NOW: 512-976-2266
          </a>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="value-card" 
      style={{ padding: 'clamp(24px, 5vw, 40px)', backgroundColor: 'var(--bg-cream-card)' }}
    >
      <div style={{ marginBottom: '24px' }}>
        <span className="section-kicker">BOOK A TRUCK</span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.2rem)', marginBottom: '8px' }}>
          REQUEST SERVICE OR AN ESTIMATE
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-muted)', fontSize: '1rem', margin: 0 }}>
          Fill out the details below, or call <strong>512-976-2266</strong>.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
            YOUR NAME *
          </label>
          <input
            type="text"
            name="name"
            required
            className="form-input-rustic"
            placeholder="e.g. Wayne Callahan"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
            PHONE NUMBER *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="form-input-rustic"
            placeholder="e.g. 512-555-0199"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
            SERVICE ADDRESS *
          </label>
          <input
            type="text"
            name="address"
            required
            className="form-input-rustic"
            placeholder="Street address or Ranch road"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
            TOWN / COMMUNITY *
          </label>
          <input
            type="text"
            name="town"
            required
            className="form-input-rustic"
            placeholder="e.g. Dripping Springs, Austin"
            value={formData.town}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
            SERVICE NEEDED
          </label>
          <select
            name="service"
            className="form-select-rustic"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="pumping">Septic Tank Vacuum Pumping</option>
            <option value="inspection">Real Estate / Pre-Sale Inspection</option>
            <option value="repair">Line Backup / Emergency Repair</option>
            <option value="installation">New System Installation / Replacement</option>
            <option value="risers">Riser &amp; Child-Safe Lid Retrofit</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
            URGENCY LEVEL
          </label>
          <select
            name="urgency"
            className="form-select-rustic"
            value={formData.urgency}
            onChange={handleChange}
          >
            <option value="routine">Routine Maintenance (Within 2–4 days)</option>
            <option value="closing">Home Sale Closing Deadline</option>
            <option value="urgent">Active Backup / Emergency (Same-Day)</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '6px' }}>
          TANK LOCATION &amp; GATE NOTES
        </label>
        <textarea
          name="tankNotes"
          className="form-textarea-rustic"
          rows={3}
          placeholder="e.g. Tank is 15 feet behind the back patio; gate code is 4321; dogs will be put inside."
          value={formData.tankNotes}
          onChange={handleChange}
        ></textarea>
      </div>

      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '16px', 
          borderTop: '1px solid var(--border-tan)', 
          paddingTop: '20px' 
        }}
      >
        <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          * No payment required now. Invoiced post-service.
        </div>

        <button 
          type="submit" 
          className="btn-rust" 
          style={{ 
            fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)', 
            width: '100%', 
            maxWidth: '320px',
            justifyContent: 'center' 
          }}
        >
          SEND DISPATCH REQUEST
        </button>
      </div>
    </form>
  );
}
