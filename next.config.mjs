/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "destinationaustralia.blob.core.windows.net",

        port: "",
        pathname: "/images/",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        pathname: "/**",
      },
    ],
  },
  headers: { key: "Access-Control-Allow-Origin", value: "*" },
};

export default nextConfig;
