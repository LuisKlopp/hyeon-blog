import Image from "next/image";
import MobileBanner from "@/public/image/mobile-banner.png";
import MainBannerWide from "@/public/image/main-banner-wide.png";
import MainBanner from "@/public/image/main-banner.png";
import { NavigationBottom } from "../navigation/navigation-bottom";

const ProfileBanner = () => {
  return (
    <div className="w-full">
      <Image
        alt="It's me"
        src={MobileBanner}
        className="m-auto w-full sm:hidden"
        priority
      />
      <Image
        alt="It's me"
        src={MainBanner}
        className="m-auto hidden sm:block xl:hidden"
        priority
      />
      <Image
        alt="It's me"
        src={MainBannerWide}
        className="m-auto hidden w-full xl:block"
        priority
      />
      <NavigationBottom />
    </div>
  );
};

export default ProfileBanner;
