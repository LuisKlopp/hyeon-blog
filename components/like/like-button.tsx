"use client";

import { cn } from "@/lib/utils";
import LikeThumbsUp from "@/public/like-button.svg";
import Image from "next/image";
import { useState } from "react";

interface LikeButtonProps {
  likes: number;
  postId: number;
}

const handleAddLikeCount = async (
  postId: number,
) => {
  await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts/like/${postId}`,
    {
      method: "POST",
    },
  );
};

const handleRemoveLikeCount = async (
  postId: number,
) => {
  await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts/like/${postId}`,
    {
      method: "DELETE",
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
    setIsLiked((prev) => !prev);

    if (isLiked) {
      setLikesCount((prev) => prev - 1);
      handleRemoveLikeCount(postId);
      return;
    }
    setLikesCount((prev) => prev + 1);
    handleAddLikeCount(postId);
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
          className="m-0 h-[14px]"
        />
        <span className="font-medium text-white">
          {likesCount}개
        </span>
      </button>
    </div>
  );
};
