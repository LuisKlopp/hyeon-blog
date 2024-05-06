import Image from "next/image";
import AboutMeImage from "@/public/image/about-me-image.png";
import { ABOUT_ME_SUMMARY } from "./constants/about-me.constants";
import { Experience } from "@/components/aboutMe/experience/experience";
import { Stacks } from "@/components/aboutMe/stacks/stacks";
import { Career } from "@/components/aboutMe/career/career";
import { Activity } from "@/components/aboutMe/activity/activity";

const AboutMe = () => {
  return (
    <article className="prose relative mx-auto flex max-w-3xl flex-col gap-[30px] py-10 dark:prose-invert">
      <div>
        <h1 className="mb-3 text-xl font-medium leading-[43.2px]">
          류현
        </h1>
        <span className="text-base font-light leading-[21.48px] tracking-normal text-black dark:text-gray02">
          Front-End developer
        </span>
        <hr className="mb-0 mt-4 w-[60px] border border-black dark:border-gray03" />
      </div>
      <div className="flex gap-7">
        <Image
          src={AboutMeImage}
          alt="about-me-image"
          className="m-0 w-[268px]"
        />
        <div>
          <h1 className="mb-2 text-xl font-thin dark:text-gray02">
            빠르게,
          </h1>
          <h1 className="mb-2 text-xl font-thin dark:text-gray02">
            꾸준히 배우고
          </h1>
          <div className="flex gap-2">
            <h1 className="text-xl font-medium text-blogThickRed">
              잘 적응하는 개발자
            </h1>
            <h1 className="text-xl font-medium">
              류현입니다.
            </h1>
          </div>
          <div>
            <ul className="m-0 pl-5 marker:text-black dark:marker:text-white">
              {ABOUT_ME_SUMMARY.map((item) => (
                <li
                  key={item.content}
                  className="px-0"
                >
                  {item.content.slice(
                    0,
                    item.startBoldIndex,
                  )}
                  <strong>
                    {item.content.slice(
                      item.startBoldIndex,
                      item.endBoldIndex,
                    )}
                  </strong>
                  {item.content.slice(
                    item.endBoldIndex,
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Experience />
        <Stacks />
        <Career />
        <Activity />
      </div>
    </article>
  );
};

export default AboutMe;
