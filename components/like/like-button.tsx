import LikeThumbsUp from "@/public/like-button.svg";
import Image from "next/image";

export const LikeButton = ({
  likes,
}: {
  likes: number;
}) => {
  return (
    <div className="my-[50px] flex items-center gap-3">
      <button className="flex h-10 w-[93px] items-center justify-center gap-2 rounded-lg bg-gray01 hover:bg-blogThickRed dark:bg-gray06 dark:hover:bg-blogThickRed">
        <Image
          src={LikeThumbsUp}
          alt="thumbs-up"
          className="my-0 h-4 w-4"
        />
        <span className="text-center font-medium leading-8 text-white">
          공감
        </span>
      </button>
      <span className=" text-base font-medium">
        {likes}
      </span>
    </div>
  );
};