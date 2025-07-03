import { useState } from 'react';
import BidControls from '@/components/shared/BidControls';
import TimeCountdown from '@/components/shared/TimeCountdown';
import { Checkbox } from '@mantine/core';
import biddingImg from '@/assets/images/bidding-img.png';
import thumbnail1 from '@/assets/images/signin1.png';
import thumbnail2 from '@/assets/images/bidding-img.png';
import thumbnail3 from '@/assets/images/hero-img.png';
import { FaHeart } from 'react-icons/fa';
import { useTheme } from '@/ThemeContext';

const tabs = [
  { id: 'description', label: 'Description', content: 'This is the description of the auction item. It includes all relevant details.' },
  { id: 'bids', label: 'Bids', content: 'List of all bids placed by different users will be shown here.' },
  { id: 'reviews', label: 'Reviews (7)', content: 'See what other buyers are saying about this item. Read user reviews and ratings.' },
  { id: 'private_message', label: 'Private Message', content: 'Send a private message to the seller regarding this auction.' },
  { id: 'more_offers', label: 'More Offers', content: 'Check out similar items and more offers from this seller.' },
  { id: 'store_policies', label: 'Store Policies', content: 'Understand the store’s terms, return policy, and other guidelines.' },
  { id: 'enquiries', label: 'Enquiries', content: 'Have a question? Ask here and get answers from the seller or community.' },
];

const tags = ['Hand Craft', 'Doll', 'Mud Craft'];

const Sales = () => {
  const { darkMode } = useTheme();
  const [showDescription, setShowDescription] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [mainImage, setMainImage] = useState(biddingImg);

  return (
    <section className={`py-0 ${darkMode ? 'bg-[#141415]' : 'bg-white'} flex flex-col items-center`}>
      <div className="text-center mb-6">
        <h1 className={`text-3xl font-bold pt-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Live Bidding</h1>
        <p className="text-gray-500 mt-2">Join us for an exhilarating live auction experience where art meets excitement.</p>
      </div>

      {/* Auction Card */}
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 bg-white shadow-lg xl:p-6 rounded-2xl w-full max-w-4xl">
        <div className="lg:col-span-3 flex flex-col items-center">
          <img 
            loading="lazy" 
            src={mainImage} 
            alt="Live auction artwork" 
            className="rounded-xl max-h-[400px] w-[400px] border border-gray-400 cursor-pointer"
            onDoubleClick={() => setShowDescription(!showDescription)} 
          />

          {showDescription && (
            <div className="flex gap-2 mt-2">
              {[thumbnail1, thumbnail2, thumbnail3].map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 rounded-lg cursor-pointer border border-gray-400 hover:border-blue-500"
                  onClick={() => {
                 if (typeof thumb === 'string' && thumb.startsWith('data:image') || thumb.endsWith('.png') || thumb.endsWith('.jpg') || thumb.endsWith('.jpeg')) {
                 setMainImage(thumb);
                 } else {
                 console.warn('Invalid image source:', thumb);
                }
        }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="lg:col-span-5">
          <h2 className="text-xl font-bold text-blsvk-700">More than just art—it&apos;s a feeling</h2>
          <p className="text-sm mt-1 font-semibold text-gray-700">Artist: Ranky</p>
          <p className="text-sm mt-2"><span className="font-semibold text-gray-700">Starting bid: </span><span className="font-bold text-gray-700">$245.00</span></p>
          <hr className="border border-gray-300 my-0" />
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <hr className="border border-gray-300 my-0" />
          <p className="text-sm"><span className="font-semibold text-gray-700">Status: </span><span className="font-bold text-gray-600">NEW</span></p>
          <p className="text-sm font-semibold mt-3 text-gray-700">Auction will Be End:</p>
          <TimeCountdown date="2025-04-01T01:02:03" />
          <Checkbox label="Add to wishlist" icon={FaHeart} size="sm" classNames={{ root: 'my-3', icon: darkMode ? '' : 'text-red-500' }} />
          <BidControls />
          <p className="text-sm font-semibold mt-3 text-blue-600 cursor-pointer hover:underline">Have any question?</p>
          
          {showDescription && (
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-700">Tags:</h3>
              <div className="flex gap-2 mt-2">
                {tags.map((tag, index) => (
                  <span key={index} className="px-4 py-2 border border-black rounded-lg text-gray-700 bg-white">{tag}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Description Section */}
      {showDescription && (
        <div className="mt-8 w-full max-w-4xl">
          <div className="p-2 bg-white rounded-lg shadow-lg flex space-x-2 border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium rounded-md border border-black ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-4 mt-4">
            <h2 className="text-lg font-semibold text-blue-700">{tabs.find(tab => tab.id === activeTab).label}</h2>
            <p className="text-gray-600">{tabs.find(tab => tab.id === activeTab).content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Sales;
