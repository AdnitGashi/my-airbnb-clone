import React from "react";
import Image from "next/image";
type Props = {
  img: string;
  title: string;
};
const MediumCard = ({ img, title }: Props) => {
  console.log('hahahhahahha')
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image
          alt={title}
          src={img}
          fill
          style={{ objectFit: "fill" }}
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3" >{title}</h3>
    </div>
  );
};

export default MediumCard;
