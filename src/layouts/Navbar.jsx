import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Riya<span className="text-cyan-400">.</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`cursor-pointer transition ${
                location.pathname === item.path
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
  <div className="md:hidden bg-[#0f172a] border-t border-gray-800">
    <div className="flex flex-col py-2">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className={`w-full text-center py-3 text-lg transition ${
            location.pathname === item.path
              ? "text-cyan-400 bg-gray-800/40"
              : "text-gray-300 hover:text-white hover:bg-gray-800/40"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;