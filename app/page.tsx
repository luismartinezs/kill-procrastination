import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-10rem)] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 capitalize">
          start focusing now!
        </h1>
        <p className="text-lg text-gray-300 mb-8">Overcome morning lack of focus, avoid randomly picking a task, start focusing on the right thing now</p>
        <Link
          href="/daily"
          className="inline-block text-white font-semibold py-4 px-10 rounded-lg text-lg shadow-lg relative overflow-hidden"
        >
          <span className="relative z-10">Start Your Productive Day</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-animated"></div>
        </Link>
        <p className="mt-4 text-sm text-gray-400">It&apos;s free!</p>
      </div>
    </div>
  );
}
