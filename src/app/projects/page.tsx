export default function Projects() {
    return (
      <section className="container mx-auto p-8 animate-fadeIn">
        <h2 className="text-4xl font-bold text-purple text-center">
          My Projects
        </h2>
        <p className="text-lg text-green text-center mt-4">
          Here are some of the exciting projects I have worked on. Click on each
          project to learn more about it.
        </p>
  
        {/* Project Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          
            <div className="p-6">
              <h3 className="text-3xl font-bold text-purple mb-3">Project 1</h3>
             
              <p className="text-black mb-4">
              "I developed a fully responsive company portfolio website using HTML and CSS, designed to adapt seamlessly across various devices and screen sizes. The project showcases the company’s services, achievements, and team in an engaging layout, emphasizing user-friendly navigation and modern design principles."


              </p>
              <a
                href="https://companyportfoliobyamna.netlify.app/"
                className="text-green hover:text-purple font-semibold"
              >
                View My Project
              </a>
            </div>
          </div>
  
          {/* Project 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          
            <div className="p-6">
              <h3 className="text-3xl font-bold text-purple mb-3">Project 2</h3>
              <p className="text-black mb-4">
              "I developed a comprehensive Sales Data Analysis Report, leveraging advanced Excel techniques to analyze trends, visualize key metrics, and identify actionable insights. This project highlights my ability to work with large datasets and create user-friendly, data-driven solutions."
              </p>
              <a
                href="https://salesdataanalysisreport.netlify.app/"
                className="text-green hover:text-purple font-semibold"
              >
                View My Project
              </a>
            </div>
          </div>
  
          {/* Project 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
           
            <div className="p-6">
              <h3 className="text-3xl font-bold text-purple mb-3">Project 3</h3>
              <p className="text-black mb-4">
              "I developed a feature-rich Dynamic Resume Builder that enables users to create, edit, and customize professional resumes effortlessly. The application includes an intuitive interface for real-time editing, multiple formatting options, and a seamless PDF download feature."
              </p>
              <a
                href="https://hackathon-milestone-5-eight.vercel.app/"
                className="text-green hover:text-purple font-semibold"
              >
                View My Project
              </a>
            </div>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
           
           <div className="p-6">
             <h3 className="text-3xl font-bold text-purple mb-3">Project 4</h3>
             <p className="text-black mb-4">
             "My first project was a website named 'Beautiful Beaches,' showcasing stunning beaches with basic design and functionality and Sitemap. While it wasn't highly responsive due to my beginner-level skills, it was a valuable learning experience that marked the start of my web development journey."
             </p>
             <a
               href="https://beautiful-beaches-website-by-amna.vercel.app/"
               className="text-green hover:text-purple font-semibold"
             >
               View My Project
             </a>
           </div>
         </div>
 
         <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
           
           <div className="p-6">
             <h3 className="text-3xl font-bold text-purple mb-3">Project 5</h3>
             <p className="text-black mb-4">
             This project involved cloning a Quran-themed website, ensuring it is fully responsive and interactive. The website features a optimized design for various screen sizes. I focused on implementing animations for smooth transitions and engaging user experience. The project highlights my skills in HTML, CSS, and JavaScript, with a keen emphasis on responsiveness and visual appeal. This clone is designed to provide a seamless experience across devices, making the Quran accessible with elegant functionality.
             </p>
             <a
               href="https://quran-website-clone-by-amna.vercel.app/"
               className="text-green hover:text-purple font-semibold"
             >
               View My Project
             </a>
           </div>
         </div>

         <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
           
           <div className="p-6">
             <h3 className="text-3xl font-bold text-purple mb-3">Project 6</h3>
             <p className="text-black mb-4">
             This project is a Responsive Drawing App built using HTML, CSS, and JavaScript, offering an intuitive interface for creating art on a canvas. Users can draw with customizable brush sizes and colors, clear the canvas, and enjoy a sleek, modern design with a teal and black theme. With its user-friendly controls and elegant interface, this app is perfect for showcasing creativity or experimenting with digital drawing.
             </p>
             <a
               href="https://drawing-app-by-amna.vercel.app/"
               className="text-green hover:text-purple font-semibold"
             >
               View My Project
             </a>
           </div>
         </div>
          

        </div>
      </section>
    );
  }
  