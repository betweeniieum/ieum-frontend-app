/**
 * 최상의 Root Layout이고 필수이다.
 */
import type { Metadata } from 'next';
import '@app/globals.css';
import '@app/reset.css';
import StyledComponentsRegistry from '@lib/styledComponents/registry';
import { FirebaseProvider } from '@components/provider/FirebaseProvider';
import { FirebaseOptions } from 'firebase/app';

// SSR 친화적 메타데이터
export const metadata: Metadata = {
  title: 'ieum | 사람과 사람을 잇다',
  description: '사람과 사람을 잇다'
};

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <FirebaseProvider firebaseConfig={firebaseConfig}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </FirebaseProvider>
      </body>
    </html>
  );
}
