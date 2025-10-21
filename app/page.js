import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-30 md:mt-50 text-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-2xs">Hi, I’m Salma!🦈</h1>
      <p className="text-lg text-gray-600 max-w-xl p-3">
        A passionate developer who loves creating clean, efficient, and creative digital solutions.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="/about" 
        className="bg-teal-800 font-bold text-white 
        px-6 py-3 rounded-lg mt-5 mx-2
        hover:bg-pink-300 hover:text-gray-800 focus:outline-2 focus:outline-pink-300 focus:outline-offset-2 transition">
          Get To Know Me
        </a>
        <a href="/projects" 
        className="bg-teal-800 font-bold text-white 
        px-6 py-3 rounded-lg mt-5 mx-2
        hover:bg-pink-300 hover:text-gray-900 focus:outline-2 focus:outline-pink-300 focus:outline-offset-2 transition">
          View My Projects
        </a>
      </div>
    </main>
  );
}
