import React from "react";
interface Props  {
    label:string
}

const MyButton = ({label}:Props) => {
  return (
    <div>
      <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-2xl active:scale-90 transition duration-150 ">
        {label}
      </button>
    </div>
  );
};

export default MyButton;
