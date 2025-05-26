import { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Automatically run ESLint on production builds
    dirs: ['src', 'pages'],  // Specify the directories to lint
    ignoreDuringBuilds: false,  // Fail the build if linting errors are found
  },
  // other settings
}

export default config;
