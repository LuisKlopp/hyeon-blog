import Image from "next/image";
import MainBanner from "@/public/main-banner-wide.png";
import NavigationBottom from "../navigation/navigation-bottom";

const ProfileBanner = () => {
  return (
    <div className="w-full">
      <Image
        alt="It's me"
        src={MainBanner}
        className="m-auto min-w-[800px]"
        priority
      />
      <NavigationBottom />
    </div>
  );
};

export default ProfileBanner;
