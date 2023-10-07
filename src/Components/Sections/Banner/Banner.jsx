import banner from "../../../assets/banner.jpg"

const Banner = () => {
    return (
        <div>
           <div className="hero h-96" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-[#75C2F6] text-5xl font-bold">Your Health is,<br /> Our Priority</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;