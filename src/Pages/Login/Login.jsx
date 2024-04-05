import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(e.currentTarget)
        // const email = e.target.email.value;
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(form.get('email'))

        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state? location.state : '/')
            
        })
        .catch(error=>console.log(error))

    }
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="md:w-3/4 lg:w-1/2 mx-auto rounded-md px-16 my-10">
                <h2 className="text-3xl font-semibold text-[#403F3F] text-center">Login your account</h2>
                <hr className="my-9" />
                <form className="" onSubmit={handleLogin}>
                    <label htmlFor="name" className="text-semibold text-xl text-[#403F3F]">Email address</label><br />
                    <input type="email" name="email" placeholder="Enter your email address" className="input w-full bg-[#F3F3F3] text-[#9F9F9F] border-none hover:focus:outline-none outline-none hover:border-none mt-2 mb-2" />
                    <label htmlFor="password" className="text-semibold text-xl text-[#403F3F]">Password</label><br />
                    <input type="password" name="password" placeholder="Enter your password" className="input w-full bg-[#F3F3F3] text-[#9F9F9F] border-none hover:focus:outline-none outline-none hover:border-none mt-2" />
                    <button className="btn w-full bg-[#403F3F] text-white font-semibold my-8">Login</button>
                </form>
                    <p className="font-medium text-[#706F6F] text-center">Don’t Have An Account ? <Link className="text-red-500" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;