/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolio-JuanPe-a",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Portfolio-JuanPe-a",
  },
};

export default nextConfig;
