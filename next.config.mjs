/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Allow cache-busted hero URLs like /photo-output.jpeg?v=<mtime> (Next 16 requires this)
    localPatterns: [
      { pathname: "/photo-output.jpeg" },
      { pathname: "/profile.jpg" },
      { pathname: "/extracurriculars/**" },
    ],
  },
  serverExternalPackages: ["resend"],
};

export default nextConfig;
