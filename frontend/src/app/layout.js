import { Geist, Geist_Mono } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Script from "next/script";
import CustomCursor from "./CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});

export const metadata = {
  title: "Wisda Energy",
  description: "Best Rooftop solar systems provider in Hyderabad",
  verification: {
    google: 'dhBVkcpt_uE7h_X3ls4ayX6TMMoT37GviijmAAnicow',
    other: {
      'facebook-domain-verification': ['r3hzrq0i51mqcey56ls6goi8d3ppnv'],
    },
  },
  openGraph: {
    title: 'Wisda Energy',
    description: 'Best Rooftop solar systems provider in Hyderabad',
    url: 'https://www.wisda.in',
    siteName: 'Wisda Energy',
    images: [
      {
        url: 'https://www.blacknbold.in/assets/img/works/wisdaenergy_c1.webp',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisda Energy',
    description: 'Best Rooftop solar systems provider in Hyderabad',
    images: ['https://www.blacknbold.in/assets/img/works/wisdaenergy_c1.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}

        {/* Global Schemas (Organization, Website, ProfessionalService) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "Wisda Energy",
                "alternateName": "Wisda",
                "url": "https://www.wisda.in",
                "logo": "https://www.blacknbold.in/assets/img/works/wisdaenergy_c1.webp",
                "sameAs": [
                  "https://www.facebook.com/Wisdaenergy/",
                  "https://www.instagram.com/wisdaenergy/",
                  "https://x.com/wisdaenergy",
                  "https://www.youtube.com/@wisdaenergy?sub_confirmation=1",
                  "https://www.linkedin.com/company/wisdaenergy",
                  "https://in.pinterest.com/wisdaenergy/",
                  "https://www.wisda.in/"
                ]
              },
              {
                "@context": "https://schema.org/",
                "@type": "WebSite",
                "name": "Wisda Energy",
                "url": "https://www.wisda.in/",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "{search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Wisda Energy",
                "image": "https://www.blacknbold.in/assets/img/works/wisdaenergy_c1.webp",
                "url": "https://www.wisda.in/",
                "telephone": "+919876543210",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "12-13-1145, Street Number 11, Tarnaka,",
                  "addressLocality": "Secunderabad",
                  "postalCode": "500017",
                  "addressCountry": "IN"
                },
                "sameAs": [
                  "https://www.facebook.com/Wisdaenergy/",
                  "https://x.com/wisdaenergy",
                  "https://www.instagram.com/wisdaenergy/",
                  "https://www.youtube.com/@wisdaenergy?sub_confirmation=1",
                  "https://www.linkedin.com/company/wisdaenergy",
                  "https://in.pinterest.com/wisdaenergy/",
                  "https://www.wisda.in/"
                ]
              }
            ])
          }}
        />
      </head>
      <body className={`${hankenGrotesk.variable} font-sans antialiased`}>
      <CustomCursor />
        {/* GTM NoScript (Must be first in body) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTPCLJ5R"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Toaster position="top-right" reverseOrder={false} />
        {children}

        {/* --- TRACKING SCRIPTS --- */}
        
        {/* Google Tag Manager (Head) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PTPCLJ5R');
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SYCFTFNH0N" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SYCFTFNH0N');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1494048391894940');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}