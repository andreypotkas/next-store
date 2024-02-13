/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
  sassOptions: {
    additionalData: `@import "@/styles/utils/placeholders.scss"; @import "@/styles/utils/mixins.scss";`,
  },
};

export default nextConfig;
