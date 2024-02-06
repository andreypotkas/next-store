/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "primefaces.org",
      },
    ],
  },
  sassOptions: {
    additionalData: `@import "@/styles/placeholders.scss"; @import "@/styles/mixins.scss";`,
  },
};

export default nextConfig;
