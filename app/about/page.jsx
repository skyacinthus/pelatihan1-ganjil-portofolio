import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center mt-15 text-center justify-center">
      <Image
        src="/headshot_teal.png"  alt="Salma Kamal" width={200} height={200} className="object-cover rounded-full hover:shadow-2xl transition duration-300 mb-4"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-900 dark:text-pink-300">About Me!</h1>
      <p className="max-w-xl md:max-w-3xl text-lg mb-4 text-gray-600 dark:text-gray-300">
      Hi! I’m <span className="font-semibold">Salma Karimah Kamal</span>, an Information Engineering student at UGM, with a passion for design, technology, and creating practical solutions through both logic and creativity.
      </p>
      <p className="max-w-screen md:max-w-3xl text-lg mb-4 text-gray-600 dark:text-gray-300"> 
      I enjoy learning about how things are made — from small components in manufacturing to digital systems that improve everyday life. My background in robotics and my growing skills in programming have shape the way I approach problems: logically, creatively, and with curiosity.
      </p>
    </main>
  );
}