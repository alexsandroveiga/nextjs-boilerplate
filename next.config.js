// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true
} */

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
  }
})
