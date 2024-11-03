"use client";

import { useAuth } from '@/app/providers/AuthContext';
import Login from './components/login';


export default function Home() {
  const { user, logout } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Welcome!

      <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log Out</button>
    </div>
  );
}
