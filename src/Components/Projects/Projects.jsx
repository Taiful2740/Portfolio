import { Link } from "react-router-dom";
import marriage from "../../assets/marrage.png";
import brand from "../../assets/brand.png";
import donation from "../../assets/donation.png";
const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-5xl my-24 text-center font-bold text-[#f72e05] hover:shadow-xl hover:shadow-white">
        _Projects
      </h1>
      <div className="grid grid-cols-3 gap-5">
        <Link to="https://extraordinary-croissant-55d465.netlify.app/">
          <div>
            <div className="card card-compact w-96 bg-base-100 rounded-xl  shadow-[#f72e05]	shadow-2xl">
              <figure>
                <img src={marriage} alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> Matrimony Website</h2>
                <p>
                  First there are 6 profiles with home page banner. If someone
                  likes it, he can create an account himself. And can choose the
                  life partner of their choice.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="https://whimsical-fairy-1a7af3.netlify.app/">
          <div>
            <div className="card card-compact w-96 bg-base-100 rounded-xl  shadow-[#f72e05]	shadow-2xl">
              <figure>
                <img src={donation} alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> Donation-Campaign Website</h2>
                <p>
                  After going to the home page, who will donate how much money
                  and in which case the money will be donated will be added to
                  the cart.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="https://super-alpaca-3c5fcb.netlify.app/">
          <div>
            <div className="card card-compact w-96 bg-base-100 rounded-xl  shadow-[#f72e05]	shadow-2xl">
              <figure>
                <img src={brand} alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> Brand-Shop Website</h2>
                <p>
                  Online fashion retailer Brand-shop operates.On the home page
                  are six brands, including Adidas, Nike, and Zara. The user can
                  change a specific product and add it to their cart after
                  authenticating. The user's profile in the profile route and
                  own cart merchandise in the my cart route are visible.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
