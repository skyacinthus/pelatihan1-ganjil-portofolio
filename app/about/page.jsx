import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center mt-20 text-center justify-center">
      <Image
        src="/headshot_teal.png"  alt="Salma Kamal" width={200} height={200} className="object-cover rounded-full shadow-lg mb-4"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-900 dark:text-pink-200">About Me!</h1>
      <p className="max-w-screen md:max-w-xl text-gray-600">
        kjsdfkjadfjhaksdfha sdfhaksd fkjahsdfkjha sfahsdfjhsdhf ahdfkafda sfhskjdhfkha dkhajf ahsdfhkahsdfkhajsdhf asfdsdfadjkahjkhdfa sffa sdhfhakdfhkah dahdfkjh adjfhak
        hdhfkjajfh ashakfh dshhasdf  kafhasf 
      </p>
    </main>
  );
}