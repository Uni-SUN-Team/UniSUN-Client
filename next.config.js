/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "TH"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "localhost",
        defaultLocale: "en-US",
        http: true,
      },
      {
        domain: "localhost.th",
        defaultLocale: "TH",
        http: true,
      },
    ],
  },
  images: { domains: ["lh3.googleusercontent.com"], formats: ["image/avif", "image/webp"] },
};
