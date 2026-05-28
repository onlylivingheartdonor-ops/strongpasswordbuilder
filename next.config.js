/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'strongpasswordbuilder.com' }],
        destination: 'https://www.strongpasswordbuilder.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig