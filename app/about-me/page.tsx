import Image from "next/image";
import AboutMeImage from "@/public/image/about-me-image.png";

const AboutMe = () => {
  return (
    <article className="prose relative mx-auto max-w-3xl py-10 dark:prose-invert">
      <div>
        <h1 className="mb-3 text-xl font-medium leading-[43.2px]">
          류현
        </h1>
        <span className="text-base font-light leading-[21.48px] tracking-normal text-black">
          Front-End developer
        </span>
        <hr className="mb-0 mt-4 w-[60px] border border-black" />
      </div>
      <div className="mt-8 flex gap-7">
        <Image
          src={AboutMeImage}
          alt="about-me-image"
          className="m-0"
        />
        <div>
          <h1 className="mb-2 text-xl font-thin">
            빠르게,
          </h1>
          <h1 className="mb-2 text-xl font-thin">
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
          <div></div>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
