import banner from "../../assets/about.svg";
const About = () => {
  return (
    <div id="about">
      <h1 className="text-5xl mb-24 text-center font-bold text-[#f72e05] hover:shadow-xl hover:shadow-white">
        _About
      </h1>
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <h1 className="text-center text-5xl mb-5  font-bold text-[#f72e05] lg:text-center">
            Who I am
          </h1>
          <h2 className="text-2xl text-center lg:text-start font-medium text-white">
            → Hi There! I'm
          </h2>
          <h1 className="text-5xl text-center my-5 lg:text-start font-bold text-white">
            Front-End Developer !
          </h1>
          <p className="flex mx-auto p-5">
            My name's Md Taiful Islam. I'm a front-end web designer and
            developer from Bangladesh.
          </p>
          <p className="text-justify mt-5 p-5">
            I'm a seasoned front-end developer with a strong foundation in
            programming and a sincere desire to provide organized, effective
            solutions. My fascination with technology and my experience learning
            to code. I commit myself to staying up to date with new and
            developing technologies and procedures so that I may continuously
            improve my skills and deliver high-caliber solutions that meet user
            needs and business objectives.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img className="w-[550px] lg:ml-10 mt-20 pt-10" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
