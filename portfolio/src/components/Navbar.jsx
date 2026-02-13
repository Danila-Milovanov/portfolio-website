import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex gap-6 justify-center">
        <li>
          <Link className="hover:text-blue-400 transition" to="/">Home</Link>
        </li>
        <li>
          <Link className="hover:text-blue-400 transition" to="/projects">Projects</Link>
        </li>
        <li>
          <Link className="hover:text-blue-400 transition" to="/about">About</Link>
        </li>
        <li>
          <Link className="hover:text-blue-400 transition" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
