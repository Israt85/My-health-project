import newBanner from "../../../assets/medicoBanner.jpg"


const Banner = () => {
    return (
        <div>
            <div className="hero h-96 bg-sky-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={newBanner} className="max-w-xs rounded-lg shadow-2xl" />
    <div className="w-96 mr-10">
      <h1 className="text-3xl italic text-sky-600 font-bold">Nutrition and Wellness: Building a Healthy Lifestyle!!</h1>
      <p className="py-6 text-blue-700">Building a healthy lifestyle through proper nutrition and wellness practices is a proactive way to invest in your health. By adopting a balanced diet, staying hydrated, exercising regularly, and prioritizing mental health, you can enjoy a vibrant and fulfilling life while reducing the risk of chronic diseases.</p>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;