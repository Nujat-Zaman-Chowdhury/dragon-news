import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import {useLoaderData} from "react-router-dom"
import NewsData from "./NewsData";

const Home = () => {

    const news = useLoaderData();
    console.log(news);
    return (
        <div className="">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold text-[#403F3F] mb-5">Dragon News Home</h2>
                    {
                        news.map(aNews=><NewsData aNews={aNews} key={aNews._id}></NewsData>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;