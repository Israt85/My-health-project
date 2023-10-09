import { Link } from "react-router-dom";
import Doctors from "../../../assets/All Doctors.jpg"

const ExtraCare = () => {
    return (
        <div>
            <div className="card bg-base-300 flex flex-col lg:flex-row px-5 mx-auto card-side  shadow-xl pt-4">
  <div data-aos="fade-down"
        data-aos-duration="1000"
        
        data-aos-anchor-placement="top-center">
  <figure><img className=" border-4 border-sky-700 w-auto h-80 mr-10" src={Doctors}alt="Movie"/></figure>
  <div className="sm:hidden hover:bg-sky-200 bg-white px-4 left-4 lg:h-16 rounded-lg ml-80 w-40  text-sky-400 shadow-2xl font-bold text-center lg:py-2"><p>10+ Years <br /> <span className="text-blue-500">Experience</span> </p></div>
  </div>
  <div className="card-body pt-0">
    <h2 className="italic text-blue-800 lg:font-semibold">Exceptional Medical Care: Going the Extra Mile</h2>
    <p className="text-sky-900 text-lg">Extra care encompasses the small but meaningful gestures that make a world of difference. It is the reassuring smile from a nurse, the additional time a physician dedicates to explaining a diagnosis, or the comforting presence of a healthcare professional during moments of vulnerability.</p>
    <div className="card-actions mx-auto"data-aos="zoom-in">
      <Link to="/about"><button className="btn btn-primary">About</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ExtraCare;