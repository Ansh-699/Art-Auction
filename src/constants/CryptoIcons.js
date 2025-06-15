export const Cryptocurrencies = [
  {
    label: "USDT",
    value: "USDT",
    icon: "/crypto/usdt.png",
  },
  {
    label: "USDC",
    value: "USDC",
    icon: "/crypto/usdc.png",
  },
  {
    label: "DAI",
    value: "DAI",
    icon: "/crypto/dai.png",
  },
];

export const cryptoLogos = Cryptocurrencies.reduce((acc, crypto) => {
  acc[crypto.value] = crypto.icon;
  return acc;
}, {});
