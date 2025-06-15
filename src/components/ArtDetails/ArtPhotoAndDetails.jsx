import biddingImg from "@/assets/images/bidding-img.png";
import { Checkbox, Rating } from "@mantine/core";
import TimeCountdown from "@/components/shared/TimeCountdown";
import BidControls from "@/components/shared/BidControls";
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/UI/button";
import ImageGallery from "react-image-gallery";

const ArtPhotoAndDetails = () => {
  const tags = ["Hand Craft", "Doll", "Mud Craft"];

  const images = [
    {
      original: biddingImg,
      thumbnail: biddingImg,
    },
    {
      original: biddingImg,
      thumbnail: biddingImg,
    },
    {
      original: biddingImg,
      thumbnail: biddingImg,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 xl:gap-12 2xl:gap-14 3xl:gap-16 rounded-2xl w-full">
      <div className="">
        <ImageGallery
          items={images}
          autoPlay={false}
          showPlayButton={false}
          showNav={false}
          showBullets={false}
          slideDuration={200}
          thumbnailPosition="bottom"
        />
      </div>

      <div className="">
        <h2 className="font-bold text-white">
          More than just art—it&apos;s a feeling
        </h2>

        <div className="flex justify-start items-center gap-3 my-3">
          <Rating defaultValue={4.5} fractions={2} readOnly />
          <p aria-level={4} className="text-cusGray">
            3 Reviews
          </p>
        </div>

        <p aria-level={4} className="text-cusGray">
          Artist : Ranky
        </p>

        <p aria-level={3} className="py-3.5">
          <span className="text-cusGray-100">Starting bid: </span>
          <span className="font-bold text-white">$245.00</span>
        </p>

        <hr className="border border-cusOnyx my-4" />

        <p aria-level={4} className="mr-4 text-cusGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <hr className="border border-cusOnyx my-4" />

        <p aria-level={1} className="pt-4">
          <span className="text-cusGray">Status: </span>
          <span className="font-bold text-white">New</span>
        </p>

        <div className="text-cusGray">
          <p aria-level={1} className="mt-3.5 mb-1">
            Auction will Be End:
          </p>
          <TimeCountdown date="2025-04-01T01:02:03" className="text-white" />
        </div>

        <div className="my-8">
          <BidControls
            classNames={{
              inDeButtons: "text-white hover:text-white",
              input: "text-white",
              placeBid: "bg-white hover:bg-white text-black hover:text-black",
            }}
          />

          <p aria-level={5} className="mt-2.5 text-cusGray">
            (Enter more than or equal to :{" "}
            <span className="text-white font-bold">$246.0</span>)
          </p>
        </div>

        <Checkbox
          label="Add to wishlist"
          icon={FaHeart}
          size="lg"
          classNames={{
            root: "my-3",
            label: "text-cusGray",
            input:
              "bg-transparent border-2 border-cusOnyx checked:bg-red-600 checked:border-red-600",
          }}
        />

        <p aria-level={4} className="mt-2 font-semibold text-white">
          Have any question?
        </p>

        <p aria-level={1} className="py-4">
          <span className="text-cusGray">Category: </span>
          <span className="font-bold text-white">Hand Craft</span>
        </p>

        <p aria-level={1} className="text-cusGray">
          Tag:
        </p>

        <div className="flex flex-wrap gap-3 mt-2">
          {tags.map((tag, index) => {
            return (
              <Button key={index} variant="outline">
                {tag}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtPhotoAndDetails;
