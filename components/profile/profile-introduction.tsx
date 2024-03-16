import LucideIcon from "@/components/lucide-icon";
import { INFORMATION_ITEMS } from "./constants/Information.constants";
import Link from "next/link";

const ProfileIntroduction = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="text-xl font-medium ">
        안녕하세요! 👋
        <div className="pt-2">
          프론트엔드 개발자{" "}
          <span className="text-2xl font-dovemayou">
            류현
          </span>
          입니다.
          <br />
          블로그에 방문해주셔서 감사합니다.
          <br />
          유익한 정보를 공유하고 싶습니다.
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {INFORMATION_ITEMS.map((item) => {
          const { iconName, label, isLinked } =
            item;
          return (
            <div
              className="flex gap-2 font-medium"
              key={iconName}
            >
              <LucideIcon name={iconName} />
              {isLinked ? (
                <Link
                  className="cursor-pointer hover:underline"
                  href={label}
                  target="_blank"
                >
                  {label}
                </Link>
              ) : (
                <span>{label}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileIntroduction;
