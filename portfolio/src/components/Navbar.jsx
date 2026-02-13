import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `relative px-4 py-2 transition duration-300 ${
      isActive
        ? "text-blue-500"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1 className="text-white text-xl font-bold tracking-wide">
            MyPortfolio
          </h1>

          {/* Links */}
          <div className="flex space-x-6">
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
            <NavLink to="/projects" className={linkStyle}>
              Projects
            </NavLink>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

