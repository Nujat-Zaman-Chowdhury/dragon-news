import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-3 border border-dotted border-gray-300 p-4 mb-5">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">Login With</h2>
        <button className="btn w-full text-blue-500 bg-transparent border border-blue-400">
        <FaGoogle />
          Login with Google
        </button>
        <button className="btn w-full bg-transparent border border-black">
        <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">Find Us On</h2>
        <a href=""  className="flex items-center border border-[#E7E7E7] rounded-t-lg p-5">
            <div className="bg-[#F3F3F3] rounded-full w-8 h-8 p-2 flex items-center justify-center">
            <FaFacebook className="text-blue-600"></FaFacebook>
            </div>
            <span className="ml-3 text-[#706F6F] font-medium">Facebook</span>
        </a>
        <a href=""  className="flex items-center border-x border-[#E7E7E7] p-5">
            <div className="bg-[#F3F3F3] rounded-full  w-8 h-8 p-2 flex items-center justify-center">
            <FaTwitter className="text-blue-400"></FaTwitter>
            </div>
            <span className="ml-3 text-[#706F6F] font-medium">Twitter</span>
        </a>
        <a href=""  className="flex items-center border border-[#E7E7E7] rounded-b-lg p-5">
            <div className="bg-[#F3F3F3] rounded-full w-8 h-8 p-2 flex items-center justify-center">
            <FaInstagram className="text-purple-500"></FaInstagram>
            </div>
            <span className="ml-3 text-[#706F6F] font-medium">Instagram</span>
        </a>
      </div>
      <div className="p-4 bg-[#F3F3F3] mt-5 space-y-5">
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
