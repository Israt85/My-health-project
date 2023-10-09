import { useContext, } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const {userLogin, googleLogin} = useContext(AuthContext)
   
    const location = useLocation();
    const navigate = useNavigate();

      const handleLogin =e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        if(email,password){
         toast("Email password does not match")
         return
        }
        else{
          toast("You successfully login");
          userLogin(email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state? location.state : "/" )
           return;
        })
        .catch(error =>{
            console.log(error)
        })
        }

        
       
        
        
      }
      const HandleUser=()=>{
        googleLogin()
        .then(result=>{
          console.log(result.user);
          navigate(location?.state? location.state : "/" )
        })
          .catch(err=>{
            console.log(
              err
            );
          })
      }

    return (
        <div>
           <div className="hero min-h-screen bg-sky-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-6">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
       


        <p>New to this website? Please <Link className="text-blue-700 font-semibold underline" to="/registration">Register</Link> </p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <ToastContainer/>
        </div>
        <button className="bg-sky-700 p-2 text-white rounded-xl" onClick={()=>HandleUser()}>Google Login</button>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;