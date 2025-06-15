import { cn } from "@/utils/function";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { Burger, Drawer } from "@mantine/core";
import SocialIcons from "./SocialIcons";
import { Button } from "../UI/button";
import { FaRegUser } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";

import logo from "@/assets/images/HandCraft.png";
import blacklogo from "@/assets/images/HandCraft_blue_logo.png";

export const links = [
  { link: "/works", label: "Works" },
  { link: "/sales", label: "Sales" },
  { link: "/contact", label: "Contact" },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { darkMode, toggleTheme } = useTheme();

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={({ isActive }) =>
        cn(
          "block py-2 lg:py-0 px-4 lg:px-2 mxl:px-5 3xl:px-6 w-full lg:w-fit rounded-md mxl:rounded-lg font-medium transition-all duration-300",
          isActive
            ? darkMode
              ? "text-white font-bold text-lg"
              : "text-black font-bold text-lg"
            : darkMode
            ? "text-gray-400 hover:text-white"
            : "text-gray-700 hover:text-black"
        )
      }
    >
      {link.label}
    </NavLink>
  ));

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 flex items-center w-full h-15 md:h-20 mxl:h-22 px-4 transition-all duration-500 border-b",
          darkMode ? "bg-black border-gray-800 text-white" : "bg-white border-gray-200 text-black"
        )}
      >
        <section className="flex h-full items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src={darkMode ? logo : blacklogo}
                alt="HandCraft Logo"
                className="h-10 mxl:h-11 2xl:h-13 w-auto"
              />
            </a>
            <div className="hidden lg:flex items-center gap-6">
              {items}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <SocialIcons />

            {/* Login & Register (Matching Screenshot Layout) */}
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FaRegUser className={cn(darkMode ? "text-white" : "text-blue-700")} />
              <NavLink to="/Login" className={cn("ml-1", darkMode ? "text-white" : "text-gray-900")}>
                Login
              </NavLink>
              <span className="mx-2 text-gray-400">|</span>
              <NavLink to="/Signup" className="text-blue-700">
                Register
              </NavLink>
            </div>

            {/* Connect Wallet Button */}
            <Button
              multiChild
              className={cn(
                darkMode
                  ? "bg-blue-700 hover:bg-blue-500"
                  : "border border-black bg-blue-700 text-white"
              )}>
              <LuWallet className="text-lg 2xl:text-xl 3xl:text-2xl" />
              <span className="inline-block ml-2">Connect Wallet</span>
            </Button>

            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {darkMode ? <MdDarkMode /> : <FaSun className="text-yellow-500" />}
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <Burger size="md" color="#707070" opened={opened} onClick={toggle} />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
