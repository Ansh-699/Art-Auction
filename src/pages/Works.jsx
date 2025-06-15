import ThreeDCard from '@/components/ThreeDCard'
import { useTheme } from '@/ThemeContext'
import AuctionCard from '@/components/shared/AuctionCard'
import auctionCardImg from '@/assets/images/auction-card-img.png'

const Works = () => {
  const { darkMode } = useTheme()
  const sectionBg = darkMode ? 'bg-[#191920]' : 'bg-gray-100'
  const textColor = darkMode ? 'text-white' : 'text-gray-900'

  return (
    <div className={sectionBg}>
      <section className="h-screen relative overflow-hidden max-w-screen">
        {' '}
        <ThreeDCard />
      </section>

      <section className="py-12 lg:py-16 xl:py-20 mxl:py-24 3xl:py-28 relative z-10">
        {' '}
        <div className="container mx-auto px-4">
          <h1 className={`font-semibold text-center ${textColor}`}>Past Auctions</h1>
          <p aria-level={4} className="mt-2 mxl:mt-3 2xl:mt-4 text-center text-cusGray">
            Join us for an exhilarating live auction experience where art meets excitement.
          </p>

          <div className="grid grid-cols-1 xsm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-9 mxl:gap-14 mt-8 lg:mt-10 2xl:mt-14">
            {[1, 2, 3, 4].map((item) => {
              const data = {
                id: item,
                imgSrc: auctionCardImg,
                title: "More than just art—it's a feeling",
                arts: 'Ranky',
                price: 245
              }
              return <AuctionCard key={item} data={data} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Works