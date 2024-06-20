/**
 * !!주의 미들웨어는 기본적으로 edge사이드 렌더링이 적용되어 있어 firebase-admin이 동작을 못함.
 * 이에 따라 API 라우트를 이용해 우회에서 firebase-admin을 사용할 수 있다.
 */

import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  console.log('middleware start');
  const token = req.headers.get('authorization')?.split('Bearer ')[1];

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const verifyTokenResponse = await fetch(new URL('/api/v1/auth/verifyToken', req.url), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ token })
  });

  if (verifyTokenResponse.status !== 200) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// 미들웨어를 적용할 경로를 설정합니다.
export const config = {
  matcher: ['/my/:path*']
};
