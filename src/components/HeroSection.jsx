import Spline from '@splinetool/react-spline';
import { Wallet } from 'lucide-react';

export default function HeroSection() {
  return (
    <header className="relative w-full" style={{height: '38vh', minHeight: 260}}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/30 to-neutral-950" />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 text-center px-6">
        <div className="flex items-center gap-2 text-neutral-200">
          <Wallet className="w-5 h-5" />
          <span className="uppercase tracking-widest text-xs">Fintech</span>
        </div>
        <h1 className="mt-2 text-3xl font-semibold">FinTrack</h1>
        <p className="mt-1 text-neutral-300 text-sm">Track income, expenses, and stay on top of your day.</p>
      </div>
    </header>
  );
}
