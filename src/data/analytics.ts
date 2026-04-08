declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const pageview = (url: string) => {
  if (window.gtag) {
    window.gtag("config", "G-4WZHW3SSRG", {
      page_path: url,
      page_title: document.title,
    });
  }
};
