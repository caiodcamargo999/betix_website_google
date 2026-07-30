export const metadata = {
  title: "תקנון ותנאי שימוש | הקהילה הפרטית של חובבי הבלאק ג'ק",
  description: "תקנון ותנאי שימוש",
};

export default function TermsOfUse() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#09090b] text-zinc-300 font-sans py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-[#18181b] p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center text-[#eab308]">תקנון ותנאי שימוש</h1>
        
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            ברוכים הבאים לאתר הקהילה הפרטית של חובבי הבלאק ג'ק. השימוש באתר ובשירותים המוצעים בו כפוף לתנאים המפורטים בתקנון זה. אנא קראו תנאים אלו בקפידה.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. הסכמה לתנאים</h2>
          <p>
            בעצם גלישתך באתר והרשמתך לשירותים, הנך מסכים במפורש לתנאי תקנון זה ולמדיניות הפרטיות שלנו. אם אינך מסכים לתנאים אלו, אנא הימנע משימוש באתר.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. מגבלת גיל</h2>
          <p>
            השימוש באתר וההצטרפות לקהילה מותרים אך ורק לבני 18 ומעלה. בעצם הרשמתך, אתה מצהיר ומתחייב כי הנך מעל גיל 18.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. מטרת האתר והקהילה</h2>
          <p>
            האתר והקהילה נועדו לשמש כפלטפורמה חברתית לדיונים, שיתוף אסטרטגיות ומידע בין חובבי בלאק ג'ק. אין לראות במידע המוצג באתר או בקהילה משום ייעוץ מקצועי או עידוד להימורים. 
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. כללי התנהגות בקהילה</h2>
          <ul className="list-disc list-inside space-y-2 pr-4 mt-2 text-zinc-400">
            <li>יש לשמור על שפה נאותה ולכבד את כלל חברי הקהילה.</li>
            <li>חל איסור מוחלט על הטרדה, איומים או הפצת תוכן פוגעני.</li>
            <li>אין להפיץ ספאם או תוכן פרסומי ללא אישור מראש מצוות ההנהלה.</li>
            <li>הנהלת הקהילה שומרת לעצמה את הזכות להרחיק חברים אשר יפרו כללים אלו.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. הגבלת אחריות</h2>
          <p>
            המידע והתכנים באתר ובקהילה ניתנים "כמות שהם" (AS IS). הנהלת האתר אינה נושאת באחריות לכל נזק, ישיר או עקיף, שייגרם כתוצאה משימוש במידע או בתכנים אלו. כל פעולה הנעשית על סמך המידע הינה על אחריותו הבלעדית של המשתמש.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. קניין רוחני</h2>
          <p>
            כל זכויות הקניין הרוחני באתר, לרבות עיצוב, טקסטים ותכנים, שייכים להנהלת האתר. אין להעתיק, לשכפל או להפיץ תכנים אלו ללא אישור מפורש בכתב.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. שינויים בתקנון</h2>
          <p>
            הנהלת האתר שומרת לעצמה את הזכות לשנות תנאים אלו בכל עת. שינויים יחולו עם פרסומם באתר.
          </p>
        </div>
      </div>
    </div>
  );
}
