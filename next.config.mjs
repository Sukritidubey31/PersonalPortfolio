/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Allow local assets and Google Drive-hosted images.
    localPatterns: [
      { pathname: "/photo-output.jpeg" },
      { pathname: "/profile.jpg" },
      { pathname: "/extracurriculars/**" },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc",
      },
    ],
  },
  serverExternalPackages: ["resend"],
};

export default nextConfig;
