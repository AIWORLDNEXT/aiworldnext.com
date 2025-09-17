/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'via.placeholder.com',
      'ui-avatars.com',
      'logo.clearbit.com',
      'images-na.ssl-images-amazon.com',
      'cdn.pixabay.com',
      'pbs.twimg.com',
      'cdn.dribbble.com',
      'raw.githubusercontent.com',
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'res.cloudinary.com'
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig