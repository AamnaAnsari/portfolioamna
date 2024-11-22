import Image from "next/image";


export default function Home() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-8 space-y-10 lg:space-y-0">
     
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-5xl font-extrabold text-purple-600">
          Hello, I'm Aamna Ansari 👋
        </h2>
        <p className="mt-4 text-lg text-green-400">
          I’m a web developer with a passion for crafting responsive and engaging
          web experiences using modern technologies like Next.js, Tailwind CSS, and TypeScript.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="/projects"
            className="bg-purple text-green-200 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
          </a>
          <a
            href="/about"
            className="border-2 border-green-500 text-purple px-6 py-3 rounded-lg shadow-lg hover:border-purple-600 hover:text-purple-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Learn About Me
          </a>
        </div>
      </div>

   
    </section>
  );
}



