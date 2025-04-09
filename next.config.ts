import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['melivecode.com'],  // เปลี่ยนเป็นโดเมนที่คุณใช้
  },
  eslint: {
    ignoreDuringBuilds: true, // ข้ามการตรวจสอบ ESLint ในระหว่างการ build
  },
};

export default nextConfig;
