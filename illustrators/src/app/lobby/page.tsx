'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LobbyPage() {
  const [code, setCode] = useState('');
  const [nickname, setNickname] = useState('');
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  

  // Session check with guest fallback
  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await fetch('/api/session');
        if (res.ok) {
          const user = await res.json();
          setNickname(user.name);
          setUserId(user.id);
        } else {
          fallbackToGuest();
        }
      } catch (err) {
        console.error('Session check failed:', err);
        fallbackToGuest();
      } finally {
        setLoading(false);
      }
    }

    function fallbackToGuest() {
      let guestName = localStorage.getItem('guestName') || '';
      let guestId = localStorage.getItem('guestId');
      if (!guestId) {
        guestId = `guest-${crypto.randomUUID()}`;
        localStorage.setItem('guestId', guestId);
      }
      if (!guestName) {
        guestName = 'Guest';
        localStorage.setItem('guestName', guestName);
      }
      setNickname(guestName);
      setUserId(guestId);
    }

    fetchSession();
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) {
      alert('Please enter a nickname');
      return;
    }

    localStorage.setItem('guestName', nickname.trim());
    localStorage.setItem('guestId', userId);
    router.push(`/game/${code}`);
  };
  const handleClick = () => {
    const audio = new Audio('/sounds/click.wav');
    audio.volume = 0.5;
    audio.play().catch((e) => console.warn('Audio play failed:', e));
  };
  const handleCreate = async () => {
    if (!nickname.trim()) {
      alert('Please enter a nickname');
      return;
    }
    /*Used to add the click sound with create*/
  const handleClickCreate = () => {
    handleClick();
    handleCreate();
     };
    localStorage.setItem('guestName', nickname.trim());
    localStorage.setItem('guestId', userId);

    const res = await fetch('/api/lobby', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Untitled Lobby',
        players: [{ id: userId, name: nickname.trim() }],
        createdAt: new Date().toISOString(),
        gameStarted: false,
        hostId: userId,
      }),
    });

    const data = await res.json();
    if (res.ok && data._id) {
      router.push(`/game/${data._id}`);
    } else {
      alert('Failed to create lobby. Try again.');
      console.error('Create lobby error:', data);
    }
  };

  if (loading) return <p className="text-center p-8">Checking session...</p>;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Join or Create a Lobby</h1>

      <div className="flex flex-col gap-2 w-full max-w-sm mb-6">
        <input
          type="text"
          placeholder="Enter Your Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="border px-4 py-2 rounded"
        />

        <form onSubmit={handleJoin} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter Lobby Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" onClick={handleClick}
          >
            Join Lobby
          </button>
        </form>
      </div>

      <button
      /*Get handleCreateClick to work here*/
        onClick={handleCreate}
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700" 
      >
        Create New Lobby
      </button>
    </main>
  );
}
