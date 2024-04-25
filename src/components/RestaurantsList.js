import React, { useState } from "react";
import FilterRestaurant from "./FilterRestaurant";
import RestaurantCard from "./RestaurntCard";

const RestaurantsList = ({ filterData, restaurantsList }) => {
  const [filterArray, setFilterArray] = useState([]);
  const [resList, setResList] = useState(restaurantsList);
  const [filteredResList, setFilteredResList] = useState([]);

  const handlefilter = (e) => {
    e.preventDefault();

    setFilterArray([...filterArray, e.target.innerText]);
    let deliveryResult,
      ratingResult,
      vegResult,
      priceFilter,
      priceFilter2 = [];

    // filterArray.forEach((element) => {
    //   if (element === "Fast Delivery") {
    //     deliveryResult = restaurantsList.filter(
    //       (item) => item?.info?.sla?.deliveryTime <= 35
    //     );
    //     setFilteredResList(deliveryResult);
    //   } else if (element === "Ratings 4.0+") {
    //     ratingResult = restaurantsList.filter(
    //       (item) => item?.info?.avgRating >= 4.0
    //     );
    //     setFilteredResList(ratingResult);
    //   } else if (element === "Pure Veg") {
    //     vegResult = restaurantsList.filter((item) => item?.info?.veg === true);
    //     setFilteredResList(vegResult);
    //   } else if (element === "Rs. 300-Rs. 600") {
    //     priceFilter = restaurantsList.filter((item) => {
    //       let data = item.info.costForTwo;
    //       const arrayData = data.split(" ");
    //       if (parseInt(arrayData[0]) >= 300 || parseInt(arrayData[0]) <= 600) {
    //         return item;
    //       }
    //     });
    //     setFilteredResList([...filteredResList, priceFilter]);
    //   } else if (element === "Less than Rs. 300") {
    //     priceFilter2 = restaurantsList.filter((item) => {
    //       let data = item.info.costForTwo;
    //       const arrayData = data.split(" ");
    //       if (parseInt(arrayData[0]) < 300) {
    //         return item;
    //       }
    //     });
    //     setFilteredResList([...filteredResList, priceFilter2]);
    //   }
    // });
  };

  return (
    <div>
      {/* <FilterRestaurant  /> */}
      <div className="flex w-7/12 ">
        {/* <div
          className="p-2 border rounded-2xl mx-2 cursor-pointer"
          onClick={(e) => handleDeliveryfilter(e)}
        >
          {filterData?.facetList[0]?.facetInfo[0]?.label}
        </div> */}
        {/* <div
          className="p-2 border rounded-2xl mx-2 cursor-pointer"
          onClick={(e) => handleRatingfilter(e)}
        >
          {filterData?.facetList[3]?.facetInfo[1]?.label}
        </div> */}
        {/* <div
          className="p-2 border rounded-2xl mx-2 cursor-pointer"
          onClick={(e) => handleVegfilter(e)}
        >
          {filterData?.facetList[4]?.facetInfo[0]?.label}
        </div>
        <div
          className="p-2 border rounded-2xl mx-2 cursor-pointer"
          onClick={(e) => handlePricefilter(e)}
        >
          {filterData?.facetList[6]?.facetInfo[0]?.label}
        </div>
        <div
          className="p-2 border rounded-2xl mx-2 cursor-pointer"
          onClick={(e) => handleSecondPricefilter(e)}
        >
          {filterData?.facetList[6]?.facetInfo[2]?.label}
        </div> */}
      </div>
      <div className="flex flex-wrap">
        {filteredResList.length > 0
          ? filteredResList.map((item) => {
              return <RestaurantCard key={item.info.id} restarants={item} />;
            })
          : restaurantsList.map((item) => {
              return <RestaurantCard key={item.info.id} restarants={item} />;
            })}
      </div>
    </div>
  );
};

export default RestaurantsList;
