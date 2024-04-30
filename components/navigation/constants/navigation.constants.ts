import CallIcon from "@/public/icon/call-icon.svg";
import MailIcon from "@/public/icon/mail-icon.svg";
import DiagonalArrowIcon from "@/public/icon/diagonal-arrow-icon.svg";

export interface BottomLeftItems {
  title: string;
  src: string;
}

export interface BottomRightItems {
  title: string;
  href: string;
  src: string;
}

export const NAVIGATION_TOP_ITEMS: {
  href: string;
  title: string;
}[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/about-me",
    title: "About-Me",
  },
];

export const NAVIGATION_LEFT_BOTTOM_ITEMS: {
  title: string;
  src: string;
}[] = [
  {
    title: "fbgus333@gmail.com",
    src: MailIcon,
  },
  {
    title: "010-9975-5904",
    src: CallIcon,
  },
];

export const NAVIGATION_RIGHT_BOTTOM_ITEMS: {
  title: string;
  href: string;
  src: string;
}[] = [
  {
    title: "About Me",
    href: "/about-me",
    src: DiagonalArrowIcon,
  },
  {
    title: "GitHub",
    href: "https://github.com/LuisKlopp",
    src: DiagonalArrowIcon,
  },
];
