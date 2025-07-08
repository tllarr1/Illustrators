import { logout } from '@/actions/auth';
import { NextResponse } from 'next/server';

export async function POST() {
  await logout();
  return NextResponse.redirect('/');
}