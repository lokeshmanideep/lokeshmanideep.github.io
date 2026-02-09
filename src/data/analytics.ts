export const pageview = (url: string) => {
  if ((window as any).gtag) {
    (window as any).gtag("config", "G-4WZHW3SSRG", {
      page_path: url,
    });
  }
};
