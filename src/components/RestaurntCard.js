import { CDN_URL } from "../utils/constants";
import vegIcon from "../assets/veg-icon.png";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restarants }) => {
  return (
    <Link to={`/menu/restaurant/${restarants?.info?.id}`}>
      <div className="flex flex-col p-4 m-4 w-40 md:w-96 ">
        <img
          className="rounded-lg"
          alt="restaturt"
          src={CDN_URL + restarants?.info?.cloudinaryImageId}
        />
        <h3 className="font-bold md:text-xl text-base text-slate-800 mt-2">
          {restarants?.info?.name}
        </h3>
        <div className="flex flex-wrap text-gray-600 md:font-semibold font-light ">
          {restarants?.info?.cuisines.slice(0, 3).join()},...
        </div>
        <div className="flex gap-1 md:font-semibold font-normal">
          <img src={vegIcon} className="m-1 w-6 h-6 md:w-8 md:h-8" />
          <span>{restarants?.info?.avgRatingString}</span>
          <span className="text-center border rounded-full h-2 mx-1">.</span>
          <span>{restarants?.info?.sla.slaString}</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
