import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";

export const metadata = {
  title: "הקהילה הפרטית של חובבי הבלאק ג'ק בישראל",
  description: "מקום סגור לאנשים שבאמת אוהבים את המשחק. משאירים פרטים – ומקבלים את פרטי הגישה.",
  robots: "index,follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGX6SFQ4');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2576042539502638');
fbq('track', 'PageView');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TGX6SFQ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2576042539502638&ev=PageView&noscript=1"
          />
        </noscript>
        <div className="flex flex-col min-h-screen">
          <header className="w-full bg-[#09090b] border-b border-zinc-800/50 py-4 z-50 relative">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <Link href="/" className="text-[#eab308] font-bold text-lg sm:text-xl flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-xl sm:text-2xl">♠️</span> הקהילה הפרטית
              </Link>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="w-full bg-[#09090b] border-t border-zinc-800 py-6 text-center text-zinc-500 text-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
              <Link href="/terms-of-use" className="hover:text-white transition-colors">
                תקנון ותנאי שימוש
              </Link>
              <span className="hidden md:inline text-zinc-700">|</span>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                מדיניות פרטיות
              </Link>
            </div>
            <div className="mt-4 text-xs text-zinc-600">
              © {new Date().getFullYear()} כל הזכויות שמורות.
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
