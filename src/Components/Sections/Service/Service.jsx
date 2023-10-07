const Service = ({data}) => {
    const {id,name,image,price,description} = data;
    return (
        <div>
            <div className="card glass bg-slate-300 w-80 my-6">
  <figure><img className="w-72 h-40 mt-2 rounded" src={image}alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-800">{name}</h2>
   <div className="text-blue-500">
   {description.length >200? <p>{description.slice(0,150)}</p>: <p>{description}</p> }
   </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;