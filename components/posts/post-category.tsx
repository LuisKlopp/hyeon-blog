import { Tag } from "@/components/tag";

export const PostCategory = () => {
  return (
    <div className="absolute left-[-196px] top-[40px] hidden flex-col gap-[10px] lgx:flex">
      <span className="font-medium leading-5">
        카테고리
      </span>
      <div className="flex flex-col gap-[14px]">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  );
};
