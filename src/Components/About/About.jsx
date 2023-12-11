import banner from "../../assets/about.svg";
const About = () => {
  return (
    <div id="about">
      <h1 className="text-5xl mb-24 text-center font-bold text-[#f72e05] hover:shadow-xl hover:shadow-white">
        _About
      </h1>
      <div className="flex">
        <div className="w-1/2">
          <h1 className="text-5xl mb-5 text-center font-bold text-[#f72e05]">
            Who I am
          </h1>
          <h2 className="text-2xl  text-start font-medium text-white">
            → Hi There! I'm
          </h2>
          <h1 className="text-5xl my-5 text-start font-bold text-white">
            Front-End Developer !
          </h1>
          <p className="flex mx-auto">
            My name's Md Taiful Islam. I'm a front-end web designer and
            developer from Bangladesh.
          </p>
          <p className="text-justify mt-5">
            I'm a seasoned front-end developer with a strong foundation in
            programming and a sincere desire to provide organized, effective
            solutions. My fascination with technology and my experience learning
            to code. I commit myself to staying up to date with new and
            developing technologies and procedures so that I may continuously
            improve my skills and deliver high-caliber solutions that meet user
            needs and business objectives.
          </p>
        </div>
        <div className="w-1/2">
          <img className="w-[550px] ml-10 mt-20 pt-10" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
