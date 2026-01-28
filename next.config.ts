import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [{ hostname: '**' }], // Permite imagens de qualquer site para teste
  },
};

export default nextConfig;
