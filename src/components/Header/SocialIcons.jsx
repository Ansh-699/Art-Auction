import { FaInstagram, FaDiscord, FaTiktok, FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { useTheme } from "../../ThemeContext"; // Import the useTheme hook

const SocialIcons = () => {
  const { darkMode } = useTheme(); // Access the current theme state

  // Dynamic classes for colors
  const iconColor = darkMode ? "text-white" : "text-blue-600";
  const bgColor = darkMode ? "bg-black" : "bg-paradisePink/80";

  return (
    <>
      {[
        { to: "https://instagram.com", Icon: FaInstagram },
        { to: "https://x.com", Icon: FaXTwitter },
        { to: "https://discord.com", Icon: FaDiscord },
        { to: "https://tiktok.com", Icon: FaTiktok },
        { to: "https://reddit.com", Icon: FaReddit },
      ].map(({ to, Icon }, index) => (
        <Link
          key={index}
          to={to}
          target="_blank"
          className={`${bgColor} lg:bg-cusBlue-100 rounded xsm:rounded-md lg:rounded-full size-7 xsm:size-8 sm:size-9 lg:size-7 mxl:size-8 3xl:size-9 flex justify-center items-center hover:scale-110 transition-transform duration-200`}
        >
          <Icon className={`text-base xsm:text-lg 3xl:text-xl ${iconColor}`} />
        </Link>
      ))}
    </>
  );
};

export default SocialIcons;
