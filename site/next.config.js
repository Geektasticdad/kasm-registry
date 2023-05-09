/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Geektasticdad Kasm Registry',
    description: 'The Geektasticdad Kasm Registry',
    icon: '/img/logo.svg',
    listUrl: 'https://username.github.io/kasm-registry',
    contactUrl: 'https://github.com/geektasticdad/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
