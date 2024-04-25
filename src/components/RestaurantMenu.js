import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import vegIcon from "../assets/veg-icon.png";
import { OFFER_LOGO } from "../utils/constants";
import { addRestaurantMenu } from "../utils/foodSlice";
import ItemList from "./ItemList";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedDishes, setSearchDishes] = useState([]);

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers(
      resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  }, [resInfo]);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    totalRatingsString,
    avgRating,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  dispatch(addRestaurantMenu(categories));

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchText(e.target.value);
    let data = categories.map((item) => {
      return item?.card?.card?.itemCards.filter((item) =>
        item.card.info.category
          .toLowerCase()
          .includes(searchText.toLocaleLowerCase())
      );
    });

    setSearchDishes(data?.flat());
  };

  return (
    <>
      {showSearch ? (
        <div className="w-full md:w-7/12 px-4 relative mx-auto mt-4">
          <span
            className="absolute -left-2 mt-4 flex items-center justify-center hover:cursor-pointer"
            onClick={() => setShowSearch(false)}
          >
            ⬅
          </span>
          <input
            className="flex items-center w-full h-12  rounded-3xl justify-center bg-slate-100"
            type="text"
            placeholder={`Search in ${name}`}
            value={searchText}
            onChange={(e) => handleSearch(e)}
          />
          {searchedDishes ? <ItemList items={searchedDishes} /> : null}
        </div>
      ) : (
        <div className="">
          <h1 className="text-3xl font-bold ml-32 mt-4 mb-4">{name}</h1>
          <div className="w-full mx-1 md:w-7/12 md:m-auto p-4 flex justify-between border shadow-xl rounded-xl">
            <div className="mt-2">
              <div className="flex my-2">
                <img src={vegIcon} className="m-1" width={18} height={18} />
                <p className="text-lg font-semibold px-2">
                  {avgRating} ({totalRatingsString}) - {costForTwoMessage}
                </p>
              </div>
              <p className="text-orange-500 mx-1">{cuisines.join(", ")}</p>
              <div>
                <span>Outlet</span> - <span>{areaName}</span>
              </div>
            </div>

            <button className="border-2 text-center p-2 max-w-xs ml-auto mt-2 float-right">
              <span className="color:#3d9b6d pb-2 border-b-2 f">
                <span>⭐</span>
                <span>3.5</span>
              </span>
            </button>
            <div>
              <br />
            </div>
          </div>
          <div className="flex w-11/12 md:w-10/12 mt-8 overflow-auto mx-auto justify-center items-center ">
            {offers?.map((item) => {
              return (
                <div
                  key={item.info.offerIds[0]}
                  className="border w-full p-2 rounded-xl flex mx-1"
                >
                  <div className="px-2">
                    <img
                      src={`${OFFER_LOGO}/${item.info.offerLogo}`}
                      width={36}
                      height={36}
                    />
                  </div>
                  <div>
                    <p>{item.info.header}</p>
                    <p className="text-sm ">{item.info.couponCode}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h2 className="text-3xl font-bold mx-auto mt-4 mb-4 flex justify-center items-center">
              Menu
            </h2>
            <div className="w-full md:w-6/12 px-4 relative mx-auto ">
              <span className="absolute right-7 mt-4 flex items-center justify-center">
                🔍
              </span>
              <button
                className="flex items-center w-full h-12 rounded-xl justify-center bg-slate-200"
                onClick={() => setShowSearch(true)}
              >
                Search for dishes
              </button>
            </div>

            {/* filter component */}
          </div>

          <div>
            {categories.map((category, index) => (
              // controlled component
              <RestaurantCategory
                key={category?.card?.card.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
