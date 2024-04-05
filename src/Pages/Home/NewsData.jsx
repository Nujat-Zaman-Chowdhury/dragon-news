import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsData = ({ aNews }) => {
  const { title, image_url, details, rating, total_view, author, _id } = aNews;
  return (
    <div>
      <div className="bg-[rgb(243,243,243)] rounded-lg flex justify-between items-center p-5">
        <div className="flex items-center gap-4">
          <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
          <div className="">
            <h4>{author.name}</h4>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <CiBookmark></CiBookmark>
          <CiShare2></CiShare2>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mt-3 mb-4">{title}</h3>

        <img
          className="w-[518px] h-[262px] rounded-md object-cover"
          src={image_url}
          alt=""
        />
        {
            details.length>200? <p className="mt-4">{details.slice(0, 300)} <Link to={`/news/${_id}`} className="text-orange-500">Read more</Link></p> 
            :
            <p>{details}</p>
        }
        
        <hr className="my-5" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-lg">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span>{rating.number}</span>
          </div>
          <div  className="flex items-center gap-2">
            <FaEye></FaEye>
            <span>{total_view}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsData;
