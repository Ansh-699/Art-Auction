import { Tabs } from "@mantine/core";

const ArtMoreDetails = () => {
  return (
    <div className="mt-16">
      <div className="">
        <Tabs
          variant="pills"
          defaultValue="description"
          classNames={{
            root: "mt-5",
            list: "flex justify-start items-center gap-2 xl:gap-3 px-6 lg:px-4 xl:px-8 py-5 lg:py-4 xl:py-6 bg-white/5 border border-cusOnyx rounded-md",
            tab: "text-cusGray bg-transparent hover:bg-white/5 aria-selected:!bg-cusGray-200 aria-selected:text-black rounded h-10 2xl:h-11 3xl:h-12 px-3 lg:px-2 xl:px-5 text-xs xsm:text-sm 2xl:text-base 3xl:text-lg",
            panel: "pt-6 xl:pt-8 mxl:pt-10",
          }}
        >~
          <Tabs.List>
            <Tabs.Tab value="description">Description</Tabs.Tab>
            <Tabs.Tab value="bids">Bids</Tabs.Tab>
            <Tabs.Tab value="reviews">Reviews (7)</Tabs.Tab>
            <Tabs.Tab value="pvMessage">Private message</Tabs.Tab>
            <Tabs.Tab value="moreOffers">More Offers</Tabs.Tab>
            <Tabs.Tab value="storePolicies">Store Policies</Tabs.Tab>
            <Tabs.Tab value="enquiries">Enquiries</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="description">
            <p aria-level={3} className="text-white font-semibold">
              Description
            </p>
            <p aria-level={4} className="mt-5 text-cusGray-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </Tabs.Panel>
          <Tabs.Panel value="bids">
            <p aria-level={3} className="text-white font-semibold">
              Bids
            </p>
          </Tabs.Panel>
          <Tabs.Panel value="reviews">
            <p aria-level={3} className="text-white font-semibold">
              Reviews
            </p>
          </Tabs.Panel>
          <Tabs.Panel value="pvMessage">
            <p aria-level={3} className="text-white font-semibold">
              Privat Message
            </p>
          </Tabs.Panel>
          <Tabs.Panel value="moreOffers">
            <p aria-level={3} className="text-white font-semibold">
              More Offers
            </p>
          </Tabs.Panel>
          <Tabs.Panel value="storePolicies">
            <p aria-level={3} className="text-white font-semibold">
              Store Policies
            </p>
          </Tabs.Panel>
          <Tabs.Panel value="enquiries">
            <p aria-level={3} className="text-white font-semibold">
              Enquireis
            </p>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default ArtMoreDetails;
