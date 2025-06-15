export const NetworksIcon = [
  {
    label: "Ethereum",
    value: "Ethereum",
    icon: "/network/ethereum.png",
  },
  {
    label: "Polygon",
    value: "Polygon",
    icon: "/network/polygon.png",
  },
  {
    label: "Tron",
    value: "Tron",
    icon: "/network/tron.png",
  },
];

export const networkLogos = NetworksIcon.reduce((acc, network) => {
  console.log(network.value);
  acc[network.value] = network.icon;
  return acc;
}, {});
