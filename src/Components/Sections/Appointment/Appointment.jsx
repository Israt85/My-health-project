import { BiPhoneCall } from "react-icons/bi";

const Appointment = () => {
    return (
        <div>
            <div className=" border mx-auto mt-10 h-auto">
  <div>
    <div className=" flex justify-between w-full h-32 px-4 pt-4 text-white bg-blue-800 text-left">
      <div>
      <h1 className="text-3xl font-bold">Book An Appointment</h1>
      <p className="py-3">Please Call Us To Ensure...</p>
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000" className="text-7xl hover:bg-sky-950 bg-sky-400 h-24 rounded-full p-4">
         <BiPhoneCall></BiPhoneCall>
      </div>
    </div>
   
      <form className=" bg-sky-100 card-body grid grid-cols-1 lg:grid-cols-2 gap-6 mx-10">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service name</span>
          </label>
          <input type="text" placeholder="Services" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Doctor name</span>
          </label>
          <input type="text" placeholder="Doctor name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="text" placeholder="Phone" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input type="date" placeholder="DOB" className="input input-bordered" required />
        </div>
      </form>
      <div className="w-32 border mx-auto"data-aos="zoom-in">
      <button className="btn btn-primary">Appointment</button>
      </div>
    </div>
    </div>
  </div>

    );
};

export default Appointment;
