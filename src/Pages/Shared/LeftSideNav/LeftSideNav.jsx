import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import picture1 from "../../../assets/1.png"
import picture2 from "../../../assets/2.png"
import picture3 from "../../../assets/3.png"
import { CiCalendarDate } from "react-icons/ci";
import moment from "moment";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // className={`block text-lg font-semibold text-[#9F9F9F]`}
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-[#403F3F] mb-5">
          All Caterogy
        </h2>
        <div className="space-y-4">
          {categories.map((category) => (
            <NavLink
              to={`category/${category.id}`}
              className={(isActive) =>
                isActive
                  ? ` font-semibold block text-[#9F9F9F]`
                  : `text-[#9F9F9F] block bg-[#E7E7E7] p-4`
              }
              key={category.id}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <div className="card bg-base-100">
          <figure>
            <img
              src={picture1}
              alt=""
            />
          </figure>
          <div className="w-full">
            <h2 className="card-title my-5 text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            
            <div className="card-actions flex gap-4">
              <p className="font-medium text-[#403F3F]">Sports</p>
              <span className="flex items-center gap-2 text-[#9F9F9F]"><CiCalendarDate />{moment().format("MMM D, YYYY")}</span>
            </div>
          </div>
        </div>
        <div className="card bg-base-100">
          <figure>
            <img
              src={picture2}
              alt=""
            />
          </figure>
          <div className="w-full">
            <h2 className="card-title my-5 text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            
            <div className="card-actions flex gap-4">
              <p className="font-medium text-[#403F3F]">Sports</p>
              <span className="flex items-center gap-2 text-[#9F9F9F]"><CiCalendarDate />{moment().format("MMM D, YYYY")}</span>
            </div>
          </div>
        </div>
        <div className="card bg-base-100">
          <figure>
            <img
              src={picture3}
              alt=""
            />
          </figure>
          <div className="w-full">
            <h2 className="card-title my-5 text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            
            <div className="card-actions flex gap-4">
              <p className="font-medium text-[#403F3F]">Sports</p>
              <span className="flex items-center gap-2 text-[#9F9F9F]"><CiCalendarDate />{moment().format("MMM D, YYYY")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
