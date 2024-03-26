import Image from "next/image";
import MainBannerWide from "@/public/main-banner-wide.png";
import MainBanner from "@/public/main-banner.png";
import NavigationBottom from "../navigation/navigation-bottom";

const ProfileBanner = () => {
  return (
    <div className="w-full">
      <Image
        alt="It's me"
        src={MainBannerWide}
        className="m-auto hidden w-full xl:block"
        priority
      />
      <Image
        alt="It's me"
        src={MainBanner}
        className="m-auto min-w-[800px] xl:hidden"
        priority
      />
      <NavigationBottom />
    </div>
  );
};

export default ProfileBanner;
