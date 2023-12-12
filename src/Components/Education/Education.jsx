import education from "../../assets/graduation-cap.png";
import edu from "../../assets/edu.svg";
const Education = () => {
  document.title = "Taiful | Education";
  return (
    <div id="education">
      <div>
        <h1 className="text-5xl my-24 text-center font-bold text-[#f72e05] hover:shadow-xl hover:shadow-white">
          _Education
        </h1>
      </div>
      <div className="lg:flex gap-5">
        <div className="ml-5">
          <img src={edu} alt="img" />
        </div>
        <div>
          <div className="card card-compact w-[450px] rounded-xl p-5 shadow-[#f72e05]	shadow-2xl">
            <div className="card-body">
              <p className="text-center">2012-2013 (SSC)</p>
              <h2 className="font-bold  text-2xl">
                Molamgarihat B.L High School
              </h2>
              <p className="text-xl">Science Department</p>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <br />
          <div className="card card-compact w-[450px] rounded-xl p-5 shadow-[#f72e05]	shadow-2xl">
            <div className="card-body">
              <p className="text-center">2014-2015 (HSC)</p>
              <h2 className="font-bold  text-2xl">
                Khetlal S.A Degree College
              </h2>
              <p className="text-xl">Science Department</p>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <br />
          <div className="card card-compact w-[450px] rounded-xl p-5 shadow-[#f72e05]	shadow-2xl">
            <div className="card-body">
              <p className="text-center">2016-2019 (Honours)</p>
              <h2 className="font-bold  text-2xl">
                Joypurhat Govt. College, Joypurhat
              </h2>
              <p className="text-xl">B.Sc Honours (Mathematics)</p>

              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
