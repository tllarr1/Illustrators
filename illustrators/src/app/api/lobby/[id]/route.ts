import connectDB from '@/lib/mongo';
import Lobby from '@/models/Lobby';
import { NextRequest, NextResponse } from 'next/server';

// Get lobby by ID
export async function GET(_: NextRequest, contextPromise: Promise<{ params: { id: string } }>) {
  await connectDB();
  const { params } = await contextPromise;

  const lobby = await Lobby.findById(params.id);
  if (!lobby) return NextResponse.json({ error: 'Lobby not found' }, { status: 404 });

  return NextResponse.json(lobby);
}

// Update lobby (e.g. join a lobby)
export async function PUT(req: NextRequest, contextPromise: Promise<{ params: { id: string } }>) {
  await connectDB();
  const { params } = await contextPromise;

  try {
    const data = await req.json();
    const updated = await Lobby.findByIdAndUpdate(params.id, data, { new: true });

    if (!updated) {
      return NextResponse.json({ error: 'Lobby not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update lobby' }, { status: 400 });
  }
}

// Delete lobby by ID
export async function DELETE(_: NextRequest, contextPromise: Promise<{ params: { id: string } }>) {
  await connectDB();
  const { params } = await contextPromise;

  const deleted = await Lobby.findByIdAndDelete(params.id);
  if (!deleted) {
    return NextResponse.json({ error: 'Lobby not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
