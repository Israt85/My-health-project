import { Link } from "react-router-dom";
import Doctors from "../../../assets/All Doctors.jpg"

const ExtraCare = () => {
    return (
        <div>
            <div className="card bg-base-300 flex h-96 px-20 mx-auto card-side  shadow-xl">
  <figure><img className=" border-4 border-sky-700 w-96 h-80 mr-10" src={Doctors}alt="Movie"/></figure>
  <div className="hover:bg-sky-200 bg-white px-4 left-4 h-16 rounded-lg -ml-32 mt-72 text-sky-400 shadow-2xl font-bold text-center py-2"><p>10+ Years <br /> <span className="text-blue-500">Experience</span> </p></div>
  <div className="card-body w-20">
    <h2 className="card-title italic text-blue-800 font-semibold">Exceptional Medical Care: Going the Extra Mile</h2>
    <p className="text-sky-900 text-lg">Extra care encompasses the small but meaningful gestures that make a world of difference. It is the reassuring smile from a nurse, the additional time a physician dedicates to explaining a diagnosis, or the comforting presence of a healthcare professional during moments of vulnerability.</p>
    <div className="card-actions mx-auto">
      <Link to="/about"><button className="btn btn-primary">About</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ExtraCare;