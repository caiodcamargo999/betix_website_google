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
    <div dir="rtl" className="min-h-screen bg-[#09090b] font-sans relative overflow-hidden text-right text-white">
      
      {/* Background glow effects to match lovable */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 relative flex flex-col items-center w-full max-w-5xl mx-auto px-4 py-8 sm:py-16 md:py-20">
        
        {/* HERO SECTION */}
        <div className="flex flex-col items-center max-w-lg w-full mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-2 leading-tight">
            <span className="text-[#eab308] block mb-1 drop-shadow-sm">הקהילה הפרטית</span>
            <span className="text-white block drop-shadow-sm">של חובבי הבלאק ג'ק בישראל</span>
          </h1>
          
          <p className="text-zinc-400 text-center mb-8 text-base sm:text-lg max-w-md mx-auto">
            מקום סגור לאנשים שבאמת אוהבים את המשחק. מה שקורה בפנים – נשאר בפנים.
          </p>

          <div className="bg-[#18181b] p-5 sm:p-8 rounded-2xl w-full border border-zinc-800 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-[#eab308] text-center mb-2">
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

        {/* INFO SECTIONS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 mb-12 sm:mb-16">
          <div className="bg-[#18181b] p-5 sm:p-6 rounded-2xl border border-zinc-800/80 shadow-lg hover:border-zinc-700 transition-colors">
            <div className="text-[#eab308] text-2xl sm:text-3xl mb-3 sm:mb-4">🏆</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">מהי הקהילה שלנו?</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              אנחנו קהילה אקסקלוסיבית וסגורה המיועדת לחובבי בלאק ג'ק בישראל. המטרה שלנו היא לייצר סביבה איכותית בה שחקנים יכולים לחלוק ידע, לדבר על אסטרטגיות ולהכיר אנשים שחולקים את אותה התשוקה למשחק.
            </p>
          </div>
          
          <div className="bg-[#18181b] p-5 sm:p-6 rounded-2xl border border-zinc-800/80 shadow-lg hover:border-zinc-700 transition-colors">
            <div className="text-[#eab308] text-2xl sm:text-3xl mb-3 sm:mb-4">💡</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">מה מחכה לכם בפנים?</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              טיפים למשחק נכון, ניתוח ידיים, אסטרטגיות מתקדמות, דיונים מקצועיים והזדמנות להתייעץ עם שחקנים מנוסים. הכל באווירה חברית, דיסקרטית ומכבדת ללא ספאם.
            </p>
          </div>

          <div className="bg-[#18181b] p-5 sm:p-6 rounded-2xl border border-zinc-800/80 shadow-lg hover:border-zinc-700 transition-colors">
            <div className="text-[#eab308] text-2xl sm:text-3xl mb-3 sm:mb-4">🔒</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">איך מצטרפים?</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              ההצטרפות פשוטה ומהירה: משאירים פרטים בטופס למעלה, ומקבלים מיד קישור סודי להצטרפות לקבוצת הוואטסאפ הפרטית שלנו. ההצטרפות כרוכה באישור צוות הקהילה והיא מעל גיל 18 בלבד.
            </p>
          </div>
        </div>

        {/* TRUST / SAFE ENVIRONMENT SECTION */}
        <div className="w-full max-w-3xl text-center bg-gradient-to-b from-[#18181b] to-[#09090b] p-6 sm:p-10 rounded-3xl border border-zinc-800/50 shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">הסביבה הבטוחה לשחקני בלאק ג'ק</h2>
          <div className="w-12 sm:w-16 h-1 bg-[#eab308] mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            אנו מקפידים על חוויית משתמש גבוהה ושומרים על פרטיות חברי הקהילה שלנו. 
            אין אצלנו מקום להתנהגות בלתי הולמת. חשוב לנו לייצר מרחב שבו כולם מרגישים בנוח.
            השירות ניתן בחינם וללא התחייבות, ופועל בהתאם להנחיות ולמדיניות המחמירות ביותר כדי להבטיח סביבה אמינה ובטוחה.
          </p>
        </div>

      </div>
    </div>
  );
}
