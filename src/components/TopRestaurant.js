import React from "react";
import RestaurantCard from "./RestaurntCard";

const TopRestaurant = ({ data }) => {
  return (
    <>
      <div className="text-2xl font-semibold pl-4 pt-4 pb-1 mt-12 sticky">
        Top restaurant chains in Pune
      </div>
      <div className="overflow-x-auto whitespace-nowrap mt-2 no-scrollbar">
        <div className="inline-flex mt-4">
          {data.map((item) => {
            return <RestaurantCard key={item.info.id} restarants={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TopRestaurant;
