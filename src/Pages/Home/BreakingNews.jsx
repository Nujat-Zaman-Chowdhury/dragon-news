import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-5 bg-[#F3F3F3] p-4 mb-8">
      <button className="btn bg-[#D72050] text-white text-xl font-medium rounded-none">
        Latest
      </button>
      <Marquee pauseOnHover={true} className="">
        <Link className="mr-5 text-[#403F3F] font-semibold" to="/">Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="mr-5 text-[#403F3F] font-semibold" to="/">Match Highlights: Germany vs Spain — as it happened !</Link>
        <Link className="mr-5 text-[#403F3F] font-semibold" to="/">Match Highlights: Germany vs Spain — as it happened !</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
