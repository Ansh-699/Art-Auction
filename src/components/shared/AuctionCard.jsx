import { Link } from "react-router";
import { Button } from "../UI/button";
import HeartButton from "../UI/heart-button";

const AuctionCard = ({ data: { id, title, arts, imgSrc, price } }) => {
  return (
    <div className="bg-cusGray-200">
      <Link to={`/works/${id}`}>
        <div className="w-full overflow-hidden">
          <img
            src={imgSrc}
            alt=""
            className="w-full object-cover object-center"
          />
        </div>
      </Link>

      <div className="pb-5 mxl:pb-8 px-4 md:px-5 mxl:px-8 pt-3 md:pt-5">
        <h4 className="font-medium">{title}</h4>
        <p aria-level={4} className="mt-3.5">
          <span className="text-cusOnyx">Arts: </span>
          <span className="font-bold text-black">{arts}</span>
        </p>
        <p aria-level={1} className="mt-3.5">
          <span className="text-cusOnyx">Price: </span>
          <span className="font-bold text-black">${price.toFixed(2)}</span>
        </p>
        <div className="flex justify-between items-center mt-6">
          <Link to={`/works/${id}`}>
            <Button
              variant="outline"
              className="text-cusEerieBlack hover:text-cusEerieBlack px-8"
            >
              Buy Now
            </Button>
          </Link>
          <HeartButton />
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
