"use client";
import { useState } from 'react';

export default function BlackjackAdvertorial() {
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
      const waNumber = "972535372176";
      const message = encodeURIComponent("שלום, ספר לי עוד על זה");
      window.location.href = `https://wa.me/${waNumber}?text=${message}`;
    }
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden text-right">
      
      {/* Background glow effects to match lovable */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center max-w-lg w-full mt-4">
        
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-2 leading-tight">
          <span className="text-[#eab308] block mb-1 drop-shadow-sm">הקהילה הפרטית</span>
          <span className="text-white block drop-shadow-sm">של חובבי הבלאק ג'ק בישראל</span>
        </h1>
        
        <p className="text-zinc-400 text-center mb-8 text-base sm:text-lg max-w-md mx-auto">
          מקום סגור לאנשים שבאמת אוהבים את המשחק. מה שקורה בפנים – נשאר בפנים.
        </p>

        <div className="bg-[#18181b] p-6 sm:p-8 rounded-2xl w-full border border-zinc-800 shadow-2xl">
          <h2 className="text-2xl font-bold text-[#eab308] text-center mb-2">
            בקשת הצטרפות
          </h2>
          <p className="text-zinc-400 text-center text-sm mb-6">
            משאירים פרטים – ומקבלים את פרטי הגישה.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            
            <div className="flex flex-col space-y-1.5">
              <label className="text-white text-sm font-medium mr-1">שם מלא</label>
              <input
                type="text"
                name="name"
                placeholder="ישראל ישראלי"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-[#09090b] border border-zinc-800 text-white placeholder-zinc-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-white text-sm font-medium mr-1">אימייל</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#09090b] border border-zinc-800 text-white placeholder-zinc-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-colors text-right"
                dir="rtl"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-white text-sm font-medium mr-1">מספר טלפון</label>
              <input
                type="tel"
                name="phone"
                placeholder="050-0000000"
                required
                pattern="^05\d[- ]?\d{7}$"
                title="אנא הזן מספר נייד ישראלי תקין, לדוגמה 0501234567 או 050-1234567"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-[#09090b] border border-zinc-800 text-white placeholder-zinc-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-colors text-right"
                dir="rtl"
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#eab308] to-[#ca8a04] text-black font-bold text-lg rounded-lg px-4 py-3.5 mt-4 hover:opacity-90 transition-opacity flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'שולח...' : 'אני רוצה להיכנס'}
            </button>

          </form>

          <div className="mt-6 flex items-center justify-center space-x-1.5 space-x-reverse text-zinc-500 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ca8a04]">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span>דיסקרטיות מלאה • ללא עלות • 18+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
