import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <!-- Navbar --> */}
      <div className="bg-gray-900 text-white px-3 py-3 m-0 border-b-2 border-gray-9 flex justify-between items-center fixed top-0 w-full">
        <span className="text-white text-2xl font-bold tracking-widest">NEPCODER</span>
        <button title="hello" id="navbar-toggler" className="navbar-toggler py-0 hover:bg-gray-700 hover:text-orange-300 block md:hidden text-2xl p-2 rounded focus:outline-none">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div className="hidden md:flex flex-col md:flex-row justify-end w-1/2">
          <a href="#home" className="nav-link active mr-10 hover:text-orange-300 ">Home</a>
          <a href="#blogs" className="nav-link mr-10 hover:text-orange-300">Blogs</a>
          <a href="#projects" className="nav-link mr-10 hover:text-orange-300">Projects</a>
          <a href="#about" className="nav-link mr-10 hover:text-orange-300">About Me</a>
          <a href="#contact" className="nav-link mr-20 hover:text-orange-300">Contact</a>
        </div>
      </div>


      <div id="navbar-links" className="hidden fixed z-50 top-14 left-1 right-1  bg-gray-800 text-white md:hidden flex-col">
        <a href="#home" className="border-y-2 hover:bg-gray-300 border-gray-2 nav-link active mr-10 pl-3 py-2 hover:text-orange-300 w-full ">Home</a>
        <a href="#blogs" className="border-b-2 hover:bg-gray-300 border-gray-2 nav-link mr-10 pl-3 py-2  hover:text-orange-300 w-full">Blogs</a>
        <a href="#projects" className="border-b-2 hover:bg-gray-300 border-gray-2 nav-link mr-10 pl-3 py-2 hover:text-orange-300 w-full">Projects</a>
        <a href="#about" className="border-b-2 hover:bg-gray-300 border-gray-2 nav-link mr-10 pl-3 py-2 hover:text-orange-300 w-full">About Me</a>
        <a href="#contact" className="border-b-2 hover:bg-gray-300 border-gray-2 nav-link mr-20 pl-3 py-2 hover:text-orange-300 w-full">Contact</a>
      </div>
      {/* <!-- ---------------- --> */}

      {/* <!-- Banner Section --> */}
      <section id="home" className="py-20 w-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold mb-6 text-center tracking-widest">NEPCODER</h1>
            <p id="typing-text" className="text-2xl text-gray-300 mb-8"></p>
            <a href="#contact" className="nav-link bg-white text-gray-900 hover:bg-gray-200 py-3 px-6 rounded-full font-medium transition-colors duration-300">Contact Me</a>
          </div>
        </div>
      </section>


      {/* <!-- Banner Section --> */}
      {/* <!-- <section id="home" className="py-20 bg-gray-200 h-screen"> -->
    <!-- <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to nepcoder!</h1>
      <p class="text-gray-600">This is the banner section of the portfolio site.</p>
    </div> -->
    <!-- <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-center h-screen">
          <h1 class="text-4xl font-bold mb-4">NEPCODER</h1>
          <p class="text-xl text-gray-300 mb-8">Building innovative solutions for the digital world</p>
          <a href="#contact" class="bg-white text-gray-900 hover:bg-gray-200 py-3 px-6 rounded-full font-medium transition-colors duration-300">Contact Me</a>
        </div>
  </section>
   --> */}

      {/* <!-- Blogs Section --> */}
      <section id="blogs" className="py-20 w-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Blogs</h2>
          <h3>Blogs coming soon...</h3>
        </div>
      </section>


      {/* <!-- Projects Section --> */}
      <section id="projects" className="py-20 w-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Projects</h2>
          <h3>Projects coming soon...</h3>
        </div>
      </section>



      {/* <!-- About Me Section --> */}
      <section id="about" className="py-20 w-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Image src="https://randomuser.me/api/portraits/men/86.jpg" height={64} width={64} alt="Your Photo" className="w-64 h-64 rounded-full mb-6 md:mb-0" />
              <div className="md:ml-8">
                <p className="text-xl text-gray-700 mb-4">Hello! I am Bikash Khanal,</p>
                <p className="text-lg text-justify text-gray-600">I am a passionate and experienced full-stack software developer with expertise in <strong>.NET</strong>, <strong>Angular</strong>, and <strong>MS-SQL</strong>. I love creating efficient, scalable, and user-friendly applications. With an experience of developing ERP software solutions for Staffing Companies and strong academic background in Computer Science and Information Technology, I strive to deliver innovative solutions that meet the needs of clients and end-users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Contact Section --> */}
      {/* <!-- <section id="contact" className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-900 mb-8">Interested in collaborating or have a question? Feel free to reach out to me.</p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:mr-8 mb-6 md:mb-0">
            <p className="text-xl text-gray-500 mb-2">Email:</p>
            <a href="mailto:your-email@example.com" className="text-lg hover:text-gray-900 transition-colors duration-300">iambkhanal@gmail.com</a>
          </div>
          <div>
            <p className="text-xl text-gray-500 mb-2">Phone:</p>
            <a href="tel:+123456789" className="text-lg hover:text-gray-900 transition-colors duration-300">+977-9867754744</a>
          </div>
        </div>
      </div>
    </div>
  </section>
   --> */}
      {/* <!-- Contact Me Section --> */}
      <section id="contact" className="py-20 w-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
            <p className="text-lg text-center text-gray-300 mb-8">Interested in collaborating or have a question? Feel free to reach out to me.</p>
            <div className="flex flex-col md:flex-row md:justify-evenly">
              <div className="flex flex-col items-center md:items-start md:flex-row md:mr-10">
                <p className="text-xl text-gray-300 mb-2 mr-2">Email:</p>
                <a href="mailto:your-email@example.com" className="text-lg hover:text-gray-400 transition-colors duration-300">iambkhanal@gmail.com</a>
              </div>
              <div className="flex flex-col items-center md:items-start md:flex-row mt-5 md:mt-0">
                <p className="text-xl text-gray-300 mb-2 mr-2">Phone:</p>
                <a href="tel:+123456789" className="text-lg hover:text-gray-400 transition-colors duration-300">+977-9867754744</a>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xl text-gray-300 mb-2">Follow Me:</p>
              <div className="flex items-center justify-between">
                <a href="https://twitter.com/biku_b" target="_blank" rel="noopener noreferrer" className="text-xl  text-gray-300 hover:text-gray-400 transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/bikashkhanal/" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-gray-400 transition-colors duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/nepCoder" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-gray-400 transition-colors duration-300">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer Section --> */}
      <footer className="bg-gray-900 w-screen text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">© 2023 nepcoder. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
