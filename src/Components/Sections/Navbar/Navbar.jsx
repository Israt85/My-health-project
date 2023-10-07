import { NavLink } from "react-router-dom";
import logo from "../../../assets/My medico.jpg"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
       const {user, UserLogOut} = useContext(AuthContext)

       const handleLogOut=()=>{
        UserLogOut()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
       }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
        

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                <img className="h-16 w-32 px-" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <a onClick={handleLogOut} className="btn">Signout</a> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;