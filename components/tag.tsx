interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
  className?: string;
}

export const Tag = ({
  tag,
  current,
  count,
}: TagProps) => {
  return (
    <div className="w-fit rounded-lg border border-gray05 px-4 py-1 tracking-normal text-gray05  hover:cursor-pointer hover:bg-blogThickRed  hover:text-white dark:border-gray03 dark:text-gray03 hover:dark:text-white">
      <span className="text-xs font-light">
        {tag}
        {count ? `(${count})` : null}
      </span>
    </div>
  );
};
