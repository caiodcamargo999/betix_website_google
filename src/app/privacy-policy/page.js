export const metadata = {
  title: "מדיניות פרטיות | הקהילה הפרטית של חובבי הבלאק ג'ק",
  description: "מדיניות פרטיות",
};

export default function PrivacyPolicy() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#09090b] text-zinc-300 font-sans py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-[#18181b] p-8 sm:p-12 rounded-3xl border border-zinc-800 shadow-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center text-[#eab308]">מדיניות פרטיות</h1>
        
        <div className="space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            מדיניות פרטיות זו מפרטת כיצד אנו אוספים, משתמשים ושומרים על המידע האישי שלך בעת השימוש באתר שלנו ובשירותינו. אנו מחויבים להגן על פרטיותך ולוודא שהמידע שלך מאובטח.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. איסוף מידע</h2>
          <p>
            אנו אוספים מידע שאתה מספק לנו באופן התנדבותי באמצעות טפסים באתר, כגון: שם מלא, כתובת דואל ומספר טלפון. מידע זה נאסף אך ורק למטרת יצירת קשר וצירופך לקהילה שלנו.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. שימוש במידע</h2>
          <p>
            המידע הנאסף משמש אותנו למטרות הבאות:
          </p>
          <ul className="list-disc list-inside space-y-2 pr-4 mt-2 text-zinc-400">
            <li>יצירת קשר איתך למתן מענה לבקשותיך.</li>
            <li>שליחת קישורי הצטרפות ומידע רלוונטי לקהילה.</li>
            <li>שיפור חוויית המשתמש והשירותים שלנו.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. שיתוף מידע עם צדדים שלישיים</h2>
          <p>
            אנו לא מוכרים, סוחרים או מעבירים בדרך אחרת לגורמי חוץ את המידע האישי המזהה שלך. זה אינו כולל צדדים שלישיים מהימנים המסייעים לנו בתפעול האתר שלנו או בניהול העסק שלנו, כל עוד צדדים אלו מסכימים לשמור על סודיות מידע זה.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. אבטחת מידע</h2>
          <p>
            אנו מיישמים מגוון אמצעי אבטחה כדי לשמור על בטיחות המידע האישי שלך. הגישה למידע מוגבלת לבעלי הרשאות ספציפיות בלבד המחויבים לשמור על סודיות.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. שימוש בעוגיות (Cookies)</h2>
          <p>
            האתר עשוי להשתמש בעוגיות כדי לשפר את חוויית המשתמש. באפשרותך לבחור לבטל את השימוש בעוגיות דרך הגדרות הדפדפן שלך, אך הדבר עשוי להשפיע על תפקודים מסוימים באתר.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. הסכמה</h2>
          <p>
            בעצם השימוש באתר שלנו, אתה מסכים למדיניות הפרטיות שלנו.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. שינויים במדיניות הפרטיות</h2>
          <p>
            אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים יעודכנו בעמוד זה.
          </p>
        </div>
      </div>
    </div>
  );
}
