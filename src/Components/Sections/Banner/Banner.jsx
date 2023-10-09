import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  useEffect(() => {
    AOS.init(); 
  }, []); 

  return (
    <div>
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${banner})` }}
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-[#75C2F6] text-5xl font-bold">
              Your Health is,<br /> Our Priority
            </h1>
            <p className="mb-5" >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
