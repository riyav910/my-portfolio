import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

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

        {/* Nav Links */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`cursor-pointer transition ${location.pathname === item.path
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;