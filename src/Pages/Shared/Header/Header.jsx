import moment from "moment";
import logo from "../../../assets/logo.png"

const Header = () => {
    return (
        <div className="text-center py-6">
            <img className="mx-auto" src={logo} alt="" />
            <p className="text-[#706F6F] mt-5 mb-2">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium text-[#706F6F]"><span className="text-[#403F3F]">{moment().format("dddd")}</span>, {moment().format("MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;