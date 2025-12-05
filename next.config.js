/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: './assets/videos', // Where the files will be served from
          outputPath: './static/videos/', // Where the files will be output in the build folder
          name: '[name].[ext]', // Naming convention of the output files
        },
      },
    })
    return config
  },
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN domain here
  },
}

module.exports = nextConfig
