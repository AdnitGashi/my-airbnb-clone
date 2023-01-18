import React from "react";
import Image from "next/image";
type Props = {
  title: string;
  description: string;
  buttonText: string;
};

const img = "/../../../public/LargeCardImg.png";
const LargeCard = ({  title, description, buttonText }: Props) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src="https://links.papareact.com/4cj"

          style={{ objectFit: "cover" }}
          alt={img}
          fill
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
