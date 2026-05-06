/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ngrzf4k9ko.ufs.sh',
        port: '',
        pathname: '/f/**',
      },
    ],
  },
}

module.exports = nextConfig