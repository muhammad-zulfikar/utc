/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        })
        return config
      }
};

export default nextConfig;  