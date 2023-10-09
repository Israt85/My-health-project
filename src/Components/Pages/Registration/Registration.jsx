import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Registration = () => {
    const {userSignUp} = useContext(AuthContext)
    const [checkpass,setCheckPass] = useState("")
    const location = useLocation();
    const navigate = useNavigate();
    
       

    const handleSignUp =e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        const name= form.get('name')
        const photo = form.get('photo')
        const DOB = form. get("DOB")
        console.log(email,password,name,photo,DOB)
        if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)){
          setCheckPass("Minimum six characters, at least one letter, one number and one special character")
          return;
         }
         else{
          toast("You successfully created account in this website!!");
         }
        userSignUp(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state? location.state : "/" )
            e.target.reset()
        })
        .catch(error=>{
            console.log(error)
           
        })
        
        
      }
    return (
        <div>
            <div>
           <div className="hero min-h-screen bg-sky-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-6">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="User name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="User name" name="photo" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input type="Date" placeholder="DOB" name="DOB" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        {
          checkpass && <p className="text-xl text-red-700 font-bold">{checkpass}</p>
        }
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <ToastContainer />
        </div>
        <p>Already have an account Please <Link className="text-blue-700 font-semibold underline" to="/login">Login</Link> </p>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Registration;

