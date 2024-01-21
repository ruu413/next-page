/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  reactStrictMode: true,
  distDir: "out",
  images: { domains: ["raw.githubusercontent.com"], unoptimized: true },
}
