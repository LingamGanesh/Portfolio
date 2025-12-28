import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      

<nav
  className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center
    ${scrolled
      ? "backdrop-blur-xl bg-[#0D1B2A]/60 shadow-lg"
      : "bg-transparent"
    }
    px-6 md:px-12 py-4 transition-all duration-500`}
  style={{
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    WebkitBackdropFilter: "blur(12px)",
    backdropFilter: "blur(12px)",
  }}
>
  {/* Logo */}
  <Link
    to="/"
    className="flex items-center gap-4"
    onClick={() => {
      setActive("");
      window.scrollTo(0, 0);
    }}
  >
    <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
    <h1 className="text-white text-2xl font-bold tracking-wide">
      Ganesh 
      <span className="hidden sm:inline text-lg font-normal text-[#FCA311]">
        {" "} | MERN Developer
      </span>
    </h1>
  </Link>

  {/* Desktop Menu */}
  <ul className="hidden sm:flex gap-12 items-center text-lg font-medium">
    {navLinks.map((nav) => (
      <li
        key={nav.id}
        onClick={() => setActive(nav.title)}
        className={`cursor-pointer relative group transition-all
          ${
            active === nav.title
              ? "text-[#FCA311]"
              : "text-[#E5E5E5]"
          }`}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>

        {/* Gold Hover Underline */}
        <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] rounded-full 
          bg-[#FCA311] transition-all duration-300 group-hover:w-full" />
      </li>
    ))}
  </ul>

  {/* Mobile Menu */}
  <div className="sm:hidden flex items-center">
    <img
      src={toggle ? close : menu}
      alt="menu"
      className="w-8 h-8 cursor-pointer"
      onClick={() => setToggle(!toggle)}
    />

    {toggle && (
      <ul className="absolute top-16 right-4 bg-[#0D1B2A]/95 p-6 rounded-2xl 
        flex flex-col gap-5 shadow-lg min-w-[150px] border border-[#ffffff20]">

        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="text-[#E5E5E5] hover:text-[#FCA311] text-base transition"
            onClick={() => setToggle(false)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    )}
  </div>
</nav>


  );
};

export default Navbar;
