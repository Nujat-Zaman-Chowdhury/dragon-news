import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import {useParams} from "react-router-dom"

const NewsDetail = () => {
    const {id}= useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-3">
                <h2 className="text-xl font-semibold text-[#403F3F] mb-5">Dragon news</h2>
                <div className="p-4">
        <h3 className="mt-3 mb-4">{id}</h3>

        {/* <img
          className="w-[518px] h-[262px] rounded-md object-cover"
          src=
          alt=""
        /> */}
        
     
        
      </div>
                </div>
                <div>
                <RightSideNav></RightSideNav>

                </div>
            </div>
        </div>
    );
};

export default NewsDetail;