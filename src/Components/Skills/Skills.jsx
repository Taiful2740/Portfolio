import css from "../../assets/icons/CSS.svg";
import html from "../../assets/icons/HTML.svg";
import js from "../../assets/icons/JavaScript.svg";
import tailwind from "../../assets/icons/TailwindCSS-Dark.svg";
import ex from "../../assets/icons/ExpressJS-Dark.svg";
import figma from "../../assets/icons/Figma-Dark.svg";
import firebase from "../../assets/icons/Firebase-Dark.svg";
import git from "../../assets/icons/Git.svg";
import github from "../../assets/icons/Github-Dark.svg";
import material from "../../assets/icons/MaterialUI-Dark.svg";
import next from "../../assets/icons/NextJS-Dark.svg";
import node from "../../assets/icons/NodeJS-Dark.svg";
import react from "../../assets/icons/React-Dark.svg";
import vs from "../../assets/icons/VSCode-Dark.svg";
const Skills = () => {
  return (
    <div id="skills" className="pb-10">
      <h1 className="text-5xl my-24 text-center font-bold text-[#f72e05] hover:shadow-xl hover:shadow-white">
        _Skills
      </h1>
      <div className="grid grid-cols-2 ml-10 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {/* card-1 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={html} alt="html" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">HTML</h2>
          </div>
        </div>
        {/* card-2 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={css} alt="css" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">CSS</h2>
          </div>
        </div>
        {/* card-3 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={js} alt="js" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">JavaScript</h2>
          </div>
        </div>
        {/* card-4 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img
              className=" w-[100px] h-[100px]"
              src={tailwind}
              alt="tailwind"
            />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">Tailwind</h2>
          </div>
        </div>
        {/* card-5 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={ex} alt="ex" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">Express</h2>
          </div>
        </div>
        {/* card-6 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={node} alt="node" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">Node</h2>
          </div>
        </div>
        {/* card-7 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={react} alt="react" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">React</h2>
          </div>
        </div>
        {/* card-8 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={next} alt="next" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">Next</h2>
          </div>
        </div>
        {/* card-9 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img
              className=" w-[100px] h-[100px]"
              src={firebase}
              alt="firebase"
            />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">Firebase</h2>
          </div>
        </div>
        {/* card-10 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={figma} alt="figma" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">Figma</h2>
          </div>
        </div>
        {/* card-11 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img
              className=" w-[100px] h-[100px]"
              src={material}
              alt="material"
            />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">MaterialUI</h2>
          </div>
        </div>
        {/* card-12 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={git} alt="git" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">Git</h2>
          </div>
        </div>
        {/* card-13 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={github} alt="github" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">Github</h2>
          </div>
        </div>
        {/* card-14 */}
        <div className="rounded-xl w-[160px] h-[160px]  shadow-[#f72e05]	shadow-2xl ">
          <div className="flex justify-center pt-3">
            <img className=" w-[100px] h-[100px]" src={vs} alt="vs" />
          </div>
          <div className="">
            <h2 className=" text-center text-2xl mt-2 font-bold">VsCode</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
