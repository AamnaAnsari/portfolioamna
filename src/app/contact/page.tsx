export default function Contact() {
    return (
        <section className="container mx-auto p-8 mt-16">
        <h2 className="text-4xl font-bold text-purple text-center">Contact Me</h2>
        <p className="text-lg text-white text-center mt-4">
            I'd love to hear from you! Please fill out the form below to get in touch with me.
        </p>

        <div className="mt-10 flex justify-center">
            <form 
                action="https://formspree.io/f/xeoqjgdv" // Replace with your Formspree URL
                method="POST"
                className="w-full sm:w-3/4 lg:w-1/2 p-6 bg-purple shadow-lg rounded-lg"
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-xl text-purple-600 mb-2">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-xl text-purple-600 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-xl text-purple-600 mb-2">Your Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        required
                        rows={6}
                        className="w-full p-4 border border-gray-300 rounded-lg"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <button 
                        type="submit"
                        className="w-full p-4 bg-purple-600 text-black rounded-lg hover:bg-green-500"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
         <br />
      <center>   <p>We can also connect on Linkedin and also checkout my Github</p>
  <a href="https://github.com/AamnaAnsari" target="_blank">My GitHub</a> | <a href="https://www.linkedin.com/in/aamna-ansari-57660a254/" target="_blank">My LinkedIn</a> </center>
    </section>
    
);
};

   
  