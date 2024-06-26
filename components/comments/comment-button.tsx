"use client";

interface CommentButtonProps {
  label: string;
  handleClick: () => Promise<void>;
  isAbledClick?: boolean;
}

export const CommentButton = ({
  label,
  handleClick,
  isAbledClick,
}: CommentButtonProps) => {
  return (
    <button
      disabled={!isAbledClick}
      onClick={() => handleClick()}
      className="h-10 w-24 rounded-lg bg-gray07 px-5 py-1 text-sm tracking-[-1px] text-white dark:bg-gray06"
    >
      {label}
    </button>
  );
};
