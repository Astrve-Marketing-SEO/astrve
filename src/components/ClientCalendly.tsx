'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface CalendlyWindow extends Window {
  Calendly?: {
    initInlineWidget: (config: {
      url: string;
      parentElement: HTMLElement | null;
    }) => void;
  };
}

declare global {
  interface WindowEventMap {
    'calendly-script-loaded': CustomEvent;
  }
}

export default function ClientCalendly() {
  useEffect(() => {
    // Initialize Calendly widget after script loads
    const initCalendly = () => {
      const calendlyWindow = window as CalendlyWindow;
      if (calendlyWindow.Calendly) {
        calendlyWindow.Calendly.initInlineWidget({
          url: 'https://api.leadconnectorhq.com/widget/booking/U7Wzv9plr0yEjHTQv2cp',
          parentElement: document.getElementById('calendly-inline-widget'),
        });
      }
    };

    // Check if Calendly is already loaded
    const calendlyWindow = window as CalendlyWindow;
    if (calendlyWindow.Calendly) {
      initCalendly();
    } else {
      // If not loaded, wait for script to load
      window.addEventListener('calendly-script-loaded', initCalendly);
    }

    return () => {
      window.removeEventListener('calendly-script-loaded', initCalendly);
    };
  }, []);

  return (
    <>
      <Script
        src="https://link.msgsndr.com/js/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.dispatchEvent(new Event('calendly-script-loaded'));
        }}
      />
      <div id="calendly-inline-widget" style={{ minWidth: '100%', height: '800px' }}>
        <iframe 
          src="https://api.leadconnectorhq.com/widget/booking/U7Wzv9plr0yEjHTQv2cp" 
          style={{ width: '100%', border: 'none', overflow: 'hidden', height: '100%' }} 
          scrolling="no" 
          id="msgsndr-calendar">
        </iframe>
      </div>
    </>
  );
}
