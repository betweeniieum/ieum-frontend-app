/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  }
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     // 서버 전용 모듈을 클라이언트 번들에서 제외
  //     config.externals.push({
  //       'firebase-admin': 'commonjs2 firebase-admin'
  //     });
  //   }
  //   return config;
  // }
};

export default nextConfig;
