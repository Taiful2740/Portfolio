import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import banner from "../assets/banner2.svg";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import cv from "../assets/cv.pdf";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <div id="home" className="flex items-center w-full min-h-screen">
        <div className="flex-1">
          <div className="">
            <h1 className="text-5xl font-bold ">Md Taiful Islam</h1>
            <h2 className="text-3xl font-semibold mt-5">
              <TypeAnimation
                sequence={[
                  "I'm a front-end web developer from Bangladesh",
                  500,
                  "",
                ]}
                repeat={Infinity}
              />
            </h2>
          </div>
          <div className="mt-5">
            <Link to="/contact">
              <button className="btn mr-5 bg-[#FF3811] border-[#FF3811] text-white font-bold hover:bg-transparent  hover:text-[#FF3811] hover:border-[#FF3811]">
                Hire Me
              </button>
            </Link>
            <a href={cv} download="resume">
              <button className="btn mr-5 bg-transparent border-[#FF3811] text-[#FF3811] font-bold hover:bg-[#FF3811]  hover:text-white">
                Download CV
              </button>
            </a>
          </div>
          <div className="flex gap-7 mt-8 ">
            <Link to="https://github.com/Taiful2740">
              {" "}
              <img
                className="h-[60px] w-[60px] bg-white rounded-full hover:bg-[#f72e05] "
                src={github}
                alt="github"
              />
            </Link>
            <Link to="https://www.linkedin.com/in/mdtaifulislam/2">
              {" "}
              <img
                className="h-[60px] w-[60px] rounded-xl hover:bg-[#f72e05] "
                src={linkedin}
                alt="linkedin"
              />
            </Link>
            <Link to="https://www.facebook.com/taifulislam.shapon">
              <img
                className="h-[60px] w-[60px] rounded-xl hover:bg-[#f72e05] "
                src={facebook}
                alt="facebook"
              />
            </Link>
            <Link to="https://twitter.com/MarlaYockey">
              <img
                className="h-[60px] w-[60px] rounded-xl hover:bg-[#f72e05] "
                src={twitter}
                alt="twitter"
              />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-96 " src={banner} alt="" />
        </div>
      </div>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
