import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RestaurantCard from "./RestaurntCard";

const Collections = () => {
  const collectionsList = useSelector((store) => store.food.collections);
  const [relatedRestaurants, setRelatedRestaurants] = useState([]);
  const [currentFoodInfo, setCurrentFoodInfo] = useState([]);
  const [foodFilterData, setFoodFilterData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const filterData = collectionsList?.filter(
        (data) => data.id === params.collectionId
      );

      let splitedData = filterData[0]?.action?.link?.split("/");
      const result = splitedData[4]?.split("?");

      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=${result[0]}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
      );
      const data = await response.json();

      setCurrentFoodInfo(data.data.cards[0]);

      setFoodFilterData(data.data.cards[1]);
      let restaurants = data.data.cards.slice(2);

      setRelatedRestaurants(restaurants);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-16">
      <div>
        <h1 className="text-3xl font-extrabold m-2 p-2">
          {currentFoodInfo?.card?.card?.title}
        </h1>
        <h3 className="text-lg font-light my-2 ml-4">
          {currentFoodInfo?.card?.card?.description}
        </h3>
      </div>

      <div className="flex flex-wrap items-center justify-center">
        {relatedRestaurants.map((item) => {
          return (
            <RestaurantCard
              key={item.card.card.info.id}
              restarants={item.card.card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
