"use client";
import { useState } from 'react';

export default function BlackjackAdvertorial() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/kommo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      });
      
      if (!response.ok) {
        console.error("Kommo API returned an error:", await response.text());
      } else {
        console.log("Lead successfully sent to Kommo.");
      }
    } catch (error) {
      console.error("Network or parse error submitting lead:", error);
    } finally {
      setIsLoading(false);
      // Redirect to WhatsApp
      const waNumber = "972535372160";
      const message = encodeURIComponent("שלום, ספר לי עוד על זה");
      window.location.href = `https://wa.me/${waNumber}?text=${message}`;
    }
  };

  return (
    <div className="page" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #020617 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fff', marginBottom: '20px', lineHeight: '1.2' }}>
          הסוד של שחקני הבלאקג'ק המקצועיים
        </h1>
        
        <p className="subtitle" style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>
          בלאקג'ק הוא הרבה יותר ממשחק של מזל - זהו משחק של אסטרטגיה, חשיבה מהירה ויכולת קבלת החלטות.
          הצטרפו עכשיו לשולחן, גלו את האסטרטגיות המנצחות והתחילו לשחק כמו מקצוענים.
        </p>

        <button 
          onClick={() => setIsPopupOpen(true)}
          className="cta" 
          style={{ 
            background: '#ff6b00', color: '#fff', textShadow: 'none', 
            padding: '0 50px', fontSize: '1.5rem', height: '70px', 
            borderRadius: '15px', border: 'none', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          שחק
        </button>
      </div>

      {isPopupOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 1000, padding: '20px', direction: 'rtl'
        }}>
          <div style={{
            background: '#1e293b', padding: '40px', borderRadius: '20px',
            maxWidth: '400px', width: '100%', position: 'relative',
            border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
          }}>
            <button 
              onClick={() => setIsPopupOpen(false)}
              style={{
                position: 'absolute', top: '15px', left: '20px',
                background: 'transparent', border: 'none', color: '#fff',
                fontSize: '2rem', cursor: 'pointer', lineHeight: '1'
              }}
            >
              &times;
            </button>
            <h2 style={{ color: '#fff', marginBottom: '20px', textAlign: 'center', fontSize: '1.8rem', marginTop: '10px' }}>השאירו פרטים</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                type="text"
                name="name"
                placeholder="שם מלא"
                required
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '1.1rem',
                  outline: 'none'
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="אימייל"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '1.1rem',
                  outline: 'none'
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="מספר טלפון"
                required
                pattern="^05\d[- ]?\d{7}$"
                title="אנא הזן מספר נייד ישראלי תקין, לדוגמה 0501234567 או 050-1234567"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '1.1rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                disabled={isLoading}
                style={{
                  background: '#ff6b00', color: '#fff', border: 'none',
                  padding: '15px', borderRadius: '10px', fontSize: '1.2rem',
                  cursor: isLoading ? 'not-allowed' : 'pointer', marginTop: '10px',
                  fontWeight: 'bold', opacity: isLoading ? 0.7 : 1, transition: 'all 0.2s'
                }}
              >
                {isLoading ? 'שולח...' : 'למעבר לוואטסאפ'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
