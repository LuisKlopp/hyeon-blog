import Image from "next/image";
import MainBanner from "@/public/main-banner.png";
import NavigationBottom from "../navigation/navigation-bottom";

const ProfileBanner = () => {
  return (
    <div className="w-full">
      <Image
        alt="It's me"
        src={MainBanner}
        className="h-300 m-auto min-w-[800px]"
        priority
      />
      <NavigationBottom />
    </div>
  );
};

export default ProfileBanner;
