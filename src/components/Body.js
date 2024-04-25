import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurntCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import QuickFoodsList from "./QuickFoodsList";
import TopRestaurant from "./TopRestaurant";
import RestaurantsList from "./RestaurantsList";
import { addCollection, addRestaurants } from "../utils/foodSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const [topRestarants, setTopRestarants] = useState([]);
  const [showQuickFood, setShowQuickFood] = useState([]);
  const [filterRetaurant, setFilterRestaurant] = useState([]);
  const [retaurants, setRestaurants] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();

      setShowQuickFood(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      dispatch(
        addCollection(data?.data?.cards[0]?.card?.card?.imageGridCards?.info)
      );
      setTopRestarants(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurant(data.data.cards[3].card.card);
      setRestaurants(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      dispatch(
        addRestaurants(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        )
      );
    };
    getData();
  }, []);

  return showQuickFood.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="items-center mx-2 md:mx-24 ">
      <QuickFoodsList data={showQuickFood} />
      <hr className="my-8 border" />
      <TopRestaurant data={topRestarants} />
      <hr className="my-8 border" />
      <RestaurantsList
        filterData={filterRetaurant}
        restaurantsList={retaurants}
      />
    </div>
  );
};

export default Body;

// 0 : What is in your mind
// 1 : Top restaurant in Pune
// 3 : Filters
// 4 : Restaurants
// 6 title : "Best Places to Eat Across Cities"
//7 = title : "Best Cuisines Near Me"
