"use client";

import LikeThumbsUp from "@/public/like-button.svg";
import Image from "next/image";

interface LikeButtonProps {
  likes: number;
}

export const LikeButton = ({
  likes,
}: LikeButtonProps) => {
  return (
    <div className="my-[50px] flex items-center gap-3">
      <button
        className={
          "flex h-10 w-[93px] items-center justify-center gap-2 rounded-lg bg-gray01 hover:bg-blogThickRed dark:bg-gray06 dark:hover:bg-blogThickRed"
        }
      >
        <Image
          src={LikeThumbsUp}
          alt="thumbs-up"
        />
        <span className="text-center font-medium leading-8 text-white">
          공감
        </span>
      </button>
      <span className=" text-base font-medium">
        {likes}개
      </span>
    </div>
  );
};
