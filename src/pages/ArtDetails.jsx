import ArtMoreDetails from "@/components/ArtDetails/ArtMoreDetails";
import ArtPhotoAndDetails from "@/components/ArtDetails/ArtPhotoAndDetails";

const ArtDetails = () => {
  // const { auctionArtID } = useParams();

  return (
    <section className="py-10 lg:py-12 xl:py-14 mxl:py-16 2xl:py-20 lg:-mt-8 mxl:-mt-10">
      <ArtPhotoAndDetails />
      <ArtMoreDetails />
    </section>
  );
};

export default ArtDetails;
