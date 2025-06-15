import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

const HeartButton = () => {
  const [isActive, setActive] = useState(false);

  return (
    <button onClick={() => setActive(!isActive)} className="">
      {isActive ? (
        <FaHeart className="text-red-600 size-7 mxl:size-8 2xl:size-9" />
      ) : (
        <FaRegHeart className="text-cusOnyx size-7 mxl:size-8 2xl:size-9" />
      )}
    </button>
  );
};

export default HeartButton;
