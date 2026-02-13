import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            Frontend Developer | Student | Creative Builder
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            I build modern, responsive web applications with React and Tailwind. 
            Passionate about clean UI, smooth user experience, and turning ideas 
            into interactive digital products.
          </p>

          <div className="flex gap-4">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition duration-300"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg" 
            alt="Profile"
            className="w-72 h-72 object-cover rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
