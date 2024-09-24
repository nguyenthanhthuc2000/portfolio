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
    ]
  }
};

export default nextConfig;
