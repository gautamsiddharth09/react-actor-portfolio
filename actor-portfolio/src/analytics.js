const GA_ID = import.meta.env.VITE_GA_ID;

export const initializeAnalytics = () => {
  if (
    !GA_ID ||
    typeof window === "undefined" ||
    typeof document === "undefined"
  ) {
    return;
  }

  if (document.querySelector(`script[data-ga-id="${GA_ID}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.setAttribute("data-ga-id", GA_ID);
  document.head.appendChild(script);

  const inlineScript = document.createElement("script");
  inlineScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date());
    gtag('config', '${GA_ID}', {
      anonymize_ip: true,
      send_page_view: true
    });
  `;
  document.head.appendChild(inlineScript);
};

export const trackEvent = (action, params = {}) => {
  if (!GA_ID || typeof window === "undefined") {
    return;
  }

  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag("event", action, params);
};
