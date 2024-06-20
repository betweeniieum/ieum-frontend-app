import { type NextRequest } from 'next/server';
import { firebaseAuth } from '@components/lib/firebase/server';

export async function POST(req: NextRequest) {
  const token = req.headers.get('authorization')?.split('Bearer ')[1];

  if (!token) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await firebaseAuth.verifyIdToken(token);
    Response.json({ success: true, error: 'authorized' }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }
}
