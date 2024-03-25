import Image from "next/image";
import mainBanner from "@/public/main-banner.png";

const ProfileBanner = () => {
  return (
    <div className="w-full">
      <Image
        alt="It's me"
        src={mainBanner}
        className="h-300 m-auto"
        priority
      />
    </div>
  );
};

export default ProfileBanner;
