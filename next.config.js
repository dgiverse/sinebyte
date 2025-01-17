/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    experimental: {
      reactRefresh: false,
    },
    
    experimental: {
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
          },
        },
      },
    },
}


module.exports = nextConfig

