"use client";

import { cn } from "@/lib/utils";
import LikeThumbsUp from "@/public/like-button.svg";
import Image from "next/image";
import { useState } from "react";

interface LikeButtonProps {
  likes: number;
  postId: number;
}

const handleAddLikecount = async (
  postId: number,
) => {
  await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts/like/${postId}`,
    {
      method: "POST",
    },
  );
};

export const LikeButton = ({
  likes,
  postId,
}: LikeButtonProps) => {
  const [likesCount, setLikesCount] =
    useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddLike = () => {
    setLikesCount((prev) => prev + 1);
    setIsLiked((prev) => !prev);
    handleAddLikecount(postId);
  };

  return (
    <div className="my-[50px] flex items-center gap-3">
      <button
        className={cn(
          "flex h-10 w-[93px] items-center justify-center gap-2 rounded-lg bg-gray01 hover:bg-blogThickRed dark:bg-gray06 dark:hover:bg-blogThickRed",
          {
            "bg-blogThickRed dark:bg-blogThickRed":
              isLiked,
          },
        )}
        onClick={handleAddLike}
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
        {likesCount}개
      </span>
    </div>
  );
};
