import React from "react";
import SmallCard from "./SmallCard";

type Locations = {
  location: string;
  img: string;
  distance: string;
};
const Explore = (exploreData: any) => {
    console.log(exploreData)
  return (
    <div>
      <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4 "
      >
        {exploreData.exploreData?.map(({ img, distance, location }: Locations) => (
          <SmallCard
            key={img}
            img={img}
            distance={distance}
            location={location}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
