'use client'
import Link from 'next/link';
import { BarChart2, ChevronLeft, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col relative overflow-hidden">
      {/* Background Gradients to match the 'glow' effects often seen in dark mode fintech apps */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation Bar (simplified for 404) */}
      <nav className="w-full p-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
            <Image src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center z-10">
        <div className="max-w-md w-full space-y-8">
          
          {/* Visual Element: Empty/Error State */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-20 rounded-full"></div>
              <div className="relative bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl">
                <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
              Page Not Found
            </h1>
            
            {/* The requested message */}
            <p className="text-lg text-zinc-400">
              That feature is upcoming or unavailable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-black transition-all duration-200 bg-yellow-400 rounded-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-zinc-900"
            >
              Go to Dashboard
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-8 py-3 font-medium text-white transition-all duration-200 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-700 focus:ring-offset-zinc-900"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>

        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="p-6 text-center text-sm text-zinc-600 z-10">
        &copy; {new Date().getFullYear()} Signalist. All rights reserved.
      </footer>
    </div>
  );
}