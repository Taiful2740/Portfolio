import { Link } from "react-router-dom";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer items-center p-4  bg-black text-neutral-content  shadow-[#f72e05]	shadow-2xl">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2023 Taiful Islam - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div>
            <div className="card-body">
              <h2 className="card-title">Social Media</h2>
              <div className="flex gap-7 ">
                <Link to="https://github.com/Taiful2740">
                  {" "}
                  <img
                    className="h-[20px] w-[20px]  bg-white rounded-full hover:bg-[#f72e05] "
                    src={github}
                    alt="github"
                  />
                </Link>
                <Link to="https://www.linkedin.com/in/mdtaifulislam/2">
                  {" "}
                  <img
                    className="h-[20px] w-[20px]  rounded-xl hover:bg-[#f72e05] "
                    src={linkedin}
                    alt="linkedin"
                  />
                </Link>
                <Link to="https://www.facebook.com/taifulislam.shapon">
                  <img
                    className="h-[20px] w-[20px]  rounded-xl hover:bg-[#f72e05] "
                    src={facebook}
                    alt="facebook"
                  />
                </Link>
                <Link to="https://twitter.com/MarlaYockey">
                  <img
                    className="h-[20px] w-[20px] rounded-xl hover:bg-[#f72e05] "
                    src={twitter}
                    alt="twitter"
                  />
                </Link>
              </div>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
