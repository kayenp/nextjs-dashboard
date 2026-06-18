import type { NextConfig } from 'next';

module.exports = {
  allowedDevOrigins: ['127.0.0.1']
}

const nextConfig: NextConfig = {
  /* config options here */
    typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;