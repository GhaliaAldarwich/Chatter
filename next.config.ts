import { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src', 'pages'], // Specify the directories to lint
    ignoreDuringBuilds: false, // Fail the build if linting errors are found
    // Add any other custom ESLint configuration options here as needed
  },
  // other settings
}

export default config;
