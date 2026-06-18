import type { NextConfig } from 'next';

module.exports = {
  allowedDevOrigins: ['127.0.0.1'],
  typescript: {
    ignoreBuildErrors: true,
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;