import React from "react";
import Image from "next/image";
import MyButton from "../Shared/MyButton";

const Banner = () => {
  const buttonLabel:string = "I'm flexible"
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-700px">
      <Image
        src="https://links.papareact.com/0fm"

        fill
        style={{ objectFit: "cover" }}
        alt="airbnb banner"
      />
      <div className="absolute top-1/2 w-full text-center" >
        <p className="text:sm sm:text-lg" >Not sure where to go? Perfect</p>
        <MyButton label={buttonLabel} />
      </div>
    </div>
  );
};

export default Banner;
