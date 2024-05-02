import Image from "next/image";
import AboutMeImage from "@/public/image/about-me-image.png";

const AboutMe = () => {
  return (
    <article className="container prose relative mx-auto max-w-3xl py-10 dark:prose-invert">
      <div>
        <h1 className="mb-3 text-xl font-medium leading-[43.2px]">
          류현
        </h1>
        <span className="text-base font-light leading-[21.48px] tracking-normal text-black">
          Front-End developer
        </span>
        <hr className="mb-0 mt-4 w-[60px] border border-black" />
      </div>
    </article>
  );
};

export default AboutMe;
