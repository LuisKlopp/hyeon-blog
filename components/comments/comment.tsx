interface CommentProps {
  id: number;
  post_id: number;
  nickname: string;
  content: string;
  created_at: string;
}

export const Comment = ({
  nickname,
  content,
  created_at,
}: CommentProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-1 flex h-8 w-full items-center justify-between">
        <span className="text-xs font-medium">
          {nickname}
        </span>
        <span className="text-xs font-light text-gray02">
          {created_at}
        </span>
      </div>
      <div className="flex">
        <span className="font-light leading-5">
          {content}
        </span>
      </div>
      <hr className="my-5 h-[1px] border-none bg-gray02" />
    </div>
  );
};
