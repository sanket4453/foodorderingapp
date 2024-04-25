import React from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const QuickFoodsList = ({ data }) => {
  return (
    <>
      <div className="text-2xl font-semibold pl-4 pt-4 pb-1">
        What's on your mind?
      </div>
      <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
        <div className="inline-flex mt-4 pt-2">
          {data.map((item) => {
            return (
              <Link to={`collections/${item.id}`} key={item.id}>
                <div className="gap-2 mr-4 w-32">
                  <img src={CDN_URL + item.imageId} className="w-full" />
                  {/* <div className="font-semibold text-center">
                  {item?.action?.text}
                </div> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuickFoodsList;
