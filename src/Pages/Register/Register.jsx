import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = e=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photoUrl,email,password)

        createUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="w-2/4 mx-auto rounded-md px-16 py-10">
                <h2 className="text-3xl font-semibold text-[#403F3F] text-center">Register your account</h2>
                <hr className="my-6" />
                <form onSubmit={handleRegister} className="">
                    <label htmlFor="name" className="text-semibold text-xl text-[#403F3F]">Your Name</label><br />
                    <input type="text" name="name" placeholder="Enter your name" className="input w-full bg-[#F3F3F3] text-[#9F9F9F] border-none hover:focus:outline-none outline-none hover:border-none mt-2 mb-2" />
                    <label htmlFor="photoUrl" className="text-semibold text-xl text-[#403F3F]">Photo URL</label><br />
                    <input type="text" name="photoUrl" placeholder="Enter your photo" className="input w-full bg-[#F3F3F3] text-[#9F9F9F] border-none hover:focus:outline-none outline-none hover:border-none mt-2 mb-2" />
                    <label htmlFor="email" className="text-semibold text-xl text-[#403F3F]">Email</label><br />
                    <input type="text" name="email" placeholder="Enter your email address" className="input w-full bg-[#F3F3F3] text-[#9F9F9F] border-none hover:focus:outline-none outline-none hover:border-none mt-2 mb-2" />
                    <label htmlFor="password" className="text-semibold text-xl text-[#403F3F]">Password</label><br />
                    <input type="text" name="password" placeholder="Enter your password" className="input w-full bg-[#F3F3F3] text-[#9F9F9F] border-none hover:focus:outline-none outline-none hover:border-none mt-2" />
                    <input type="checkbox" name="" id="" className="mt-5"/> <span>Accept Term & Conditions</span>
                    <button className="btn w-full bg-[#403F3F] text-white font-semibold my-8">Register</button>
                </form>
                <p className="font-medium text-[#706F6F] text-center">Already Have An Account ? <Link className="text-red-500" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;