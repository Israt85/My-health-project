// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider/AuthProvider";


// const Registration = () => {
//     const {userSignUp} = useContext(AuthContext)
    

//     const handleSignUp =e =>{
//         e.preventDefault();
//         const form = new FormData(e.currentTarget);
//         const email = form.get('email')
//         const password = form.get('password')
//         const name= form.get('name')
//         const photo = form.get('photo')
//         const DOB = form. get("DOB")
//         console.log(email,password,name,photo,DOB)
//         userSignUp(email,password)
//         .then(result=>{
//             console.log(result.user)
//             result.target.reset()
//         })
//         .catch(error=>{
//             console.log(error)
//         })
        
        
//       }
//     return (
//         <div>
//             <div>
//            <div className="hero min-h-screen bg-sky-200">
//   <div className="hero-content flex-col">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold mb-6">Register now!</h1>
//     </div>
//     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form onSubmit={handleSignUp} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input type="text" placeholder="User name" name="name" className="input input-bordered" />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Photo Url</span>
//           </label>
//           <input type="text" placeholder="User name" name="photo" className="input input-bordered" />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Date of Birth</span>
//           </label>
//           <input type="Date" placeholder="DOB" name="DOB" className="input input-bordered" />
//         </div>

//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" placeholder="email" name="email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//         </div>
//         <p>Already have an account Please <Link className="text-blue-700 font-semibold underline" to="/login">Login</Link> </p>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Register</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//         </div>
//         </div>
//     );
// };

// export default Registration;

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
  const { userSignUp } = useContext(AuthContext);
  const [myError, setMyError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name"); // Assuming you have a name field in your form

    userSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        // Set the user's displayName after successful registration
        result.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            console.log(`Display Name set to ${name}`);
            e.target.reset();
          })
          .catch((error) => {
            console.error("Error setting displayName:", error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                  {myError && <p className="text-red-500">{myError}</p>}
                </div>
                <p>Already have an account? Please <Link className="text-blue-700 font-semibold underline" to="/login">Login</Link></p>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
