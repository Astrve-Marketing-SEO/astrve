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
          url: 'https://calendly.com/mcasmakeen/30min',
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
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.dispatchEvent(new Event('calendly-script-loaded'));
        }}
      />
      <div id="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }} />
    </>
  );
}
