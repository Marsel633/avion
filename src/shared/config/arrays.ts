import { IconType } from "react-icons";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";

export interface IAboutBrandItemProps {
    id: number,
    icon: IconType;
    title: string,
    description: string,
}

export const NavbarItems: string[] = [
  "Plant pots",
  "Ceramics",
  "Tables",
  "Chairs",
  "Crockery",
  "Tableware",
  "Cutlery"
];

export const FooterMenu: string[] = [
  "New arrivals",
  "Best sellers",
  "Recently veiwed",
  "Popular this week",
  "All products",
];

export const FooterOurCompany: string[] = [
  "About us",
  "Vacancies",
  "Contact us",
  "Privacy",
  "Return policy",
];

export const AboutBrandItems: IAboutBrandItemProps[] = [
    {
        id: 1,
        icon: TbTruckDelivery,
        title: "Next day as standard",
        description: "Order before 3pm and get your order the next day as standard"
    },
    {
        id: 2,
        icon: IoCheckmarkDoneCircleOutline,
        title: "Made by true artisans",
        description: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
        id: 3,
        icon: CiWallet,
        title: "Unbeatable prices",
        description: "For our materials and quality you won’t find better prices anywhere"
    },
    {
        id: 4,
        icon: PiPlantLight,
        title: "Recycled packaging",
        description: "We use 100% recycled to ensure our footprint is more manageable"
    },
]
