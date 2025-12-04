import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd33cwljq9vvxen.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
