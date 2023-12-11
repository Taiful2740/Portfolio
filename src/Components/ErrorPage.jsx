import { Link } from "react-router-dom";
import error from "../assets/404.gif";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold pt-3">Sorry!</h1>
      <h2 className="text-center text-2xl font-bold">
        This page is not found.
      </h2>
      <div className="flex justify-center mt-3 ">
        <Link to="/">
          <button className="btn mr-3 mb-3 bg-transparent border-[#FF3811] text-[#FF3811] font-bold hover:bg-[#FF3811]  hover:text-white">
            Go to homepage
          </button>
        </Link>
      </div>
      <div className="flex justify-center  mx-auto w-[620px]">
        <img src={error} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
