import { FaDownload } from "react-icons/fa6";
import { Link } from "react-scroll";
import cv from "../../assets/cv.pdf";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:bg-[#f72e05]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:bg-[#f72e05]"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:bg-[#f72e05]"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:bg-[#f72e05]"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:bg-[#f72e05]"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="hover:bg-[#f72e05]"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link className=" text-2xl font-bold">Taiful Islam</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href={cv} download="resume">
          <button className="btn mr-5 bg-transparent border-[#FF3811] text-[#FF3811] font-bold hover:bg-[#FF3811]  hover:text-white">
            <FaDownload className="text-[#FF3811] font-bold hover:bg-[#FF3811]  hover:text-white"></FaDownload>{" "}
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
