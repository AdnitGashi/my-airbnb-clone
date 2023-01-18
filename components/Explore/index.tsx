import React from "react";
import SmallCard from "./Cards/SmallCard";
import MediumCard from "./Cards/MediumCard";
import LargeCard from "./Cards/LargeCard";

type Locations = {
  location: string;
  img: string;
  distance: string;
};
type MCardProps = {
  img: string;
  title: string;
};
const Explore = (exploreData: any, cardsData: any) => {
  return (
    <div>
      <h2 className="text-4xl font-semibold pb-5 ">Explore Nearby</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4 "
      >
        {exploreData.exploreData?.map(
          ({ img, distance, location }: Locations) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          )
        )}
      </div>
      <div>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
          {exploreData.cardsData?.map(({ img, title }: MCardProps) => {
            return <MediumCard key={img} img={img} title={title} />;
          })}
        </div>
      </div>
      <LargeCard
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired  "
      />
    </div>
  );
};

export default Explore;
