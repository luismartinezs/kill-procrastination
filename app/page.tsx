import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-10rem)] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
          No procrastination today!
        </h1>
        <Link
          href="/daily"
          className="inline-block bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Get started now
        </Link>
      </div>
    </div>
  );
}
