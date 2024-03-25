import Image from "next/image";
import Link from "next/link";

import {
  NAVIGATION_LEFT_BOTTOM_ITEMS,
  NAVIGATION_RIGHT_BOTTOM_ITEMS,
  type BottomLeftItems,
  type BottomRightItems,
} from "./constants/navigation.constants";

const LeftBottomItems = (
  item: BottomLeftItems,
) => {
  const { title, src } = item;
  return (
    <div
      key={title}
      className="flex gap-2 items-center"
    >
      <Image
        alt="icon-image"
        src={src}
        className="w-4 h-4"
      />
      <span className="text-white">{title}</span>
    </div>
  );
};

const RightBottomItems = (
  item: BottomRightItems,
) => {
  const { title, href, src } = item;
  return (
    <div
      key={title}
      className="flex gap-2 items-center"
    >
      <Link href={href} className="text-white">
        {title}
      </Link>
      <Image
        alt="arrow-icon"
        src={src}
        className="w-4 h-4"
      />
    </div>
  );
};

const NavigationBottom = () => {
  return (
    <div>
      <div className="w-[1440px] h-[60px] px-10 bg-blogAbsoluteBlack m-auto  flex justify-between">
        <div className="flex items-center gap-8">
          {NAVIGATION_LEFT_BOTTOM_ITEMS.map(
            LeftBottomItems,
          )}
        </div>
        <div className="flex items-center gap-8">
          {NAVIGATION_RIGHT_BOTTOM_ITEMS.map(
            RightBottomItems,
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBottom;
