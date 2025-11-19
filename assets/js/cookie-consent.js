// DSGVO-konformes Cookie-Banner mit Google Consent Mode v2
(function() {
  'use strict';

  // Translations for cookie banner
  const translations = {
    de: {
      title: 'Cookie-Einstellungen',
      text: 'Wir nutzen Cookies, um unsere Website zu optimieren und Ihnen personalisierte Services anzubieten. Google Analytics wird nur aktiviert, wenn Sie zustimmen. Ohne Ihre Einwilligung werden keine Analyse-Cookies gesetzt.',
      necessary: 'Erforderlich',
      necessaryDesc: 'Technisch notwendige Cookies',
      analytics: 'Analyse',
      analyticsDesc: 'Google Analytics 4',
      acceptAll: 'Alle akzeptieren',
      acceptSelected: 'Auswahl speichern',
      decline: 'Ablehnen',
      moreInfo: 'Weitere Informationen',
      settings: 'Cookie-Einstellungen'
    },
    en: {
      title: 'Cookie Settings',
      text: 'We use cookies to optimize our website and offer you personalized services. Google Analytics is only activated if you consent. Without your consent, no analysis cookies are set.',
      necessary: 'Necessary',
      necessaryDesc: 'Technically required cookies',
      analytics: 'Analytics',
      analyticsDesc: 'Google Analytics 4',
      acceptAll: 'Accept All',
      acceptSelected: 'Save Selection',
      decline: 'Decline',
      moreInfo: 'More Information',
      settings: 'Cookie Settings'
    },
    es: {
      title: 'Configuración de Cookies',
      text: 'Utilizamos cookies para optimizar nuestro sitio web y ofrecerle servicios personalizados. Google Analytics solo se activa si usted da su consentimiento. Sin su consentimiento, no se establecen cookies de análisis.',
      necessary: 'Necesarias',
      necessaryDesc: 'Cookies técnicamente necesarias',
      analytics: 'Análisis',
      analyticsDesc: 'Google Analytics 4',
      acceptAll: 'Aceptar Todo',
      acceptSelected: 'Guardar Selección',
      decline: 'Rechazar',
      moreInfo: 'Más Información',
      settings: 'Configuración de Cookies'
    }
  };

  // Detect language from HTML lang attribute
  function getLang() {
    const lang = document.documentElement.lang || 'en';
    return translations[lang] || translations.en;
  }

  // Get privacy policy URL based on language
  function getPrivacyUrl() {
    const lang = document.documentElement.lang || 'en';
    const urls = {
      de: '/de/datenschutz.html',
      en: '/en/privacy.html',
      es: '/es/privacidad.html'
    };
    return urls[lang] || urls.en;
  }

  // Check if consent was already given
  function hasConsent() {
    return localStorage.getItem('cookie-consent') !== null;
  }

  // Get consent value
  function getConsent() {
    return localStorage.getItem('cookie-consent') === 'true';
  }

  // Get analytics consent
  function getAnalyticsConsent() {
    return localStorage.getItem('analytics-consent') === 'true';
  }

  // Save consent
  function saveConsent(analytics) {
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('analytics-consent', analytics ? 'true' : 'false');

    // Update Google Consent Mode
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'analytics_storage': analytics ? 'granted' : 'denied'
      });
    }
  }

  // Decline all
  function declineAll() {
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('analytics-consent', 'false');

    // Update Google Consent Mode
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  }

  // Create cookie banner HTML
  function createBanner() {
    const t = getLang();
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <h3>${t.title}</h3>
        <p>${t.text}</p>
        <div class="cookie-options">
          <label class="cookie-option">
            <input type="checkbox" checked disabled>
            <span class="cookie-label">
              <strong>${t.necessary}</strong>
              <span class="cookie-desc">${t.necessaryDesc}</span>
            </span>
          </label>
          <label class="cookie-option">
            <input type="checkbox" id="analytics-checkbox">
            <span class="cookie-label">
              <strong>${t.analytics}</strong>
              <span class="cookie-desc">${t.analyticsDesc}</span>
            </span>
          </label>
        </div>
        <div class="cookie-buttons">
          <button class="btn-decline">${t.decline}</button>
          <button class="btn-selected">${t.acceptSelected}</button>
          <button class="btn-accept">${t.acceptAll}</button>
        </div>
        <a href="${getPrivacyUrl()}" class="cookie-more-info">${t.moreInfo}</a>
      </div>
    `;
    document.body.appendChild(banner);

    // Add event listeners
    banner.querySelector('.btn-accept').addEventListener('click', function() {
      saveConsent(true);
      banner.remove();
    });

    banner.querySelector('.btn-selected').addEventListener('click', function() {
      const analyticsChecked = banner.querySelector('#analytics-checkbox').checked;
      saveConsent(analyticsChecked);
      banner.remove();
    });

    banner.querySelector('.btn-decline').addEventListener('click', function() {
      declineAll();
      banner.remove();
    });
  }

  // Show banner if no consent yet
  function init() {
    if (!hasConsent()) {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBanner);
      } else {
        createBanner();
      }
    } else if (getAnalyticsConsent()) {
      // User already consented to analytics, update consent mode
      if (typeof gtag === 'function') {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
  }

  // Expose function to reopen settings
  window.openCookieSettings = function() {
    createBanner();
  };

  // Initialize
  init();
})();
