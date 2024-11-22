export default function About() {
    return (
      <section className="container mx-auto p-8 animate-fadeIn">
        <h2 className="text-4xl font-bold text-purple text-center">
          About Me
        </h2>
        <p className="mt-4 text-lg text-white">
  I’m a passionate developer skilled in modern web technologies like Next.js, TypeScript, and Tailwind CSS. I enjoy creating interactive and engaging web applications. Currently, I’m also learning ASP.NET and working with AI tools to enhance my development skills and explore new possibilities in the tech world.

</p>

  
        {/* Skills Section */}
        <div className="mt-10">
          <h3 className="text-3xl font-bold text-purple mb-6 text-center">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">Next.js</h4>
              <p className="text-gray-600 mt-2">
                Building fast and scalable server-rendered web applications.
              </p>
            </div>
            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">TypeScript</h4>
              <p className="text-gray-600 mt-2">
                Writing clean, scalable, and strongly typed code for better
                performance.
              </p>
            </div>
            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">Tailwind CSS</h4>
              <p className="text-gray-600 mt-2">
                Designing responsive and visually appealing UI components.
              </p>
            </div>
            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">ASP .NET</h4>
              <p className="text-gray-600 mt-2">
              ASP.NET is a robust framework by Microsoft for building high-performance, scalable web applications and APIs, widely used for creating secure enterprise solutions.


              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">CSS</h4>
              <p className="text-gray-600 mt-2">
              CSS (Cascading Style Sheets) brings life to web designs by controlling layout, colors, and typography, ensuring visually stunning and responsive user experiences."

              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">PHP</h4>
              <p className="text-gray-600 mt-2">
              "PHP (Hypertext Preprocessor) is a server-side scripting language used to build dynamic and interactive web applications. It integrates easily with databases, allowing for real-time data processing, content management, and user authentication in websites."

              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">SQL</h4>
              <p className="text-gray-600 mt-2">
              "SQL (Structured Query Language) is a powerful language used for managing and manipulating relational databases."
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">Microsoft Office</h4>
              <p className="text-gray-600 mt-2">
              "Microsoft Office is a suite of productivity software including Word, Excel, PowerPoint, and Outlook."
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">Bootstrap</h4>
              <p className="text-gray-600 mt-2">
              "Bootstrap is a popular front-end framework for building responsive, mobile-first websites quickly and efficiently."
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">Canva</h4>
              <p className="text-gray-600 mt-2">
              "Canva is a user-friendly graphic design tool that allows users to create visually appealing designs for social media, presentations, marketing materials, and more. Its drag-and-drop interface and extensive library of templates make design accessible to everyone."
              </p>
            </div>

            <div className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-bold text-green">AI Tools</h4>
              <p className="text-gray-600 mt-2">
              "AI tools leverage artificial intelligence to automate tasks, enhance decision-making, and provide intelligent"
              </p>
            </div>
          </div>
        </div>
  
        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-purple mb-4">
            Want to Collaborate?
          </h3>
          <p className="text-lg text-white mb-6">
            Feel free to reach out to me for collaborations or freelance work.
          </p>
          <a
            href="mailto:aamna.ansari.2023@gmail.com"
            className="bg-purple text-white px-6 py-3 rounded shadow hover:bg-green hover:shadow-lg transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }
  