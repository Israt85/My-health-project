import { Link } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";

const Service = ({data}) => {
    const {id,name,image,price,description} = data;
    return (
        <div>
            <div className="card glass bg-slate-300 w-80 my-6"
          >
  <div data-aos="zoom-in-right"
    data-aos-duration="2000"><figure><img className="w-72 h-40 mt-2 rounded" src={image}alt="car!"/></figure></div>
  <div className="card-body">
    <h2 className="card-title text-blue-800">{name}</h2>
   <div className="text-blue-500">
   {description.length >200? <p>{description.slice(0,150)}</p>: <p>{description}</p> }
   <p className="pt-4 text-left flex gap-1 items-center">Price: <AiOutlineDollar></AiOutlineDollar> {price}</p>
   </div>
    <div className="card-actions justify-end"
    data-aos="zoom-in-right"
    data-aos-duration="2000"
    >
      <Link to={`/service/${id}`} ><button className="btn btn-primary" >Show Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;