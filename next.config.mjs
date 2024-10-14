import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: 'public, max-age=31536000, immutable', // 1Y
          },
        ],
      },
    ];
  },
};

// Gọi withPWA với nextConfig
export default withPWA({
  dest: 'public', // Đường dẫn chứa service worker và manifest
  register: true,
  skipWaiting: true,
  disable: false, // Cho phép PWA trong môi trường production
})(nextConfig);
