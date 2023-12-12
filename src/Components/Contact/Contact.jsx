import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_22ad5nk",
        "template_eyldpss",
        form.current,
        "JVhyncGrc4nhrfzwk"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    alert("Email sent successfully");
  };
  document.title = "Taiful | Contact";
  return (
    <div id="contact">
      <h1 className="text-5xl my-24 text-center font-bold text-[#f72e05] hover:shadow-xl hover:shadow-white">
        _Contact Me
      </h1>
      <div className="lg:flex">
        <div className="w-1/2">
          <div className="card card-compact w-96 rounded-xl  shadow-[#f72e05]	shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">My Address</h2>
              <p>Joypurhat, Rajshahi, Bangladesh</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <br />
          <div className="card card-compact w-96 rounded-xl  shadow-[#f72e05]	shadow-2xl">
            <div className="card-body">
              <h2 className="card-title">Email Me</h2>
              <p>taifulpersonal@gmail.com</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <br />
          <div className="card card-compact w-96 rounded-xl  shadow-[#f72e05]	shadow-2xl">
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
        </div>
        <div className="w-1/2">
          <form ref={form} onSubmit={sendEmail} className="card-body">
            <div className="form-control">
              {" "}
              <label className="label">
                {" "}
                <span className="label-text text-white font-semibold">
                  Your Name
                </span>{" "}
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="your name"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-white font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="your email address"
                className="input input-bordered text-black"
                required
              />
            </div>
            <div className="form-control">
              {" "}
              <label className="label">
                {" "}
                <span className="label-text  text-white font-semibold">
                  Your message
                </span>{" "}
              </label>
              <textarea
                id="w3review"
                rows="4"
                cols="50"
                type="textarea"
                name="message"
                placeholder="your message"
                className="textarea textarea-bordered h-24 text-black"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <input
                className=" rounded-lg py-3 bg-[#f72e05] cursor-pointer"
                type="submit"
                name="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
