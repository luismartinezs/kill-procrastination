"use client"
import Script from "next/script";
import { Brainstorm } from "./components/brainstorm";
import { useRef } from "react";

export default function DailyLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);
  const asideRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <head>
      {process.env.NODE_ENV === "production" && (
          <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="8452a44f-1b47-43dd-9d6c-1521e23a7a05"
          />
        )}      </head>
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 p-3 z-10 shadow-lg">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => scrollTo(mainRef)}
            className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg p-2"
          >
            <svg className="size-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="font-medium">Daily</span>
          </button>
          <button
            onClick={() => scrollTo(asideRef)}
            className="flex flex-col items-center text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg p-2"
          >
            <svg className="size-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="font-medium">Brainstorm</span>
          </button>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row mb-12 md:mb-0">
        <main ref={mainRef} className="flex-grow">{children}</main>
        <aside ref={asideRef} className="w-full md:w-1/3 border-t md:border-t-0 md:border-l border-gray-700 p-4 overflow-y-auto h-auto md:h-screen md:sticky md:top-0">
          <Brainstorm />
        </aside>
      </div>
    </>
  );
}