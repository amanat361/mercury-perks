/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      }
    ],
    dangerouslyAllowSVG: true,
  }
};

module.exports = nextConfig;
