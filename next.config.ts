import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  eslint: { ignoreDuringBuilds: true },
  output: "export", // ⬅️ generate /out for static hosting
  images: { unoptimized: true },
}

export default nextConfig
