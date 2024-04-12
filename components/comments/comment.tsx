export const Comment = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="mb-1 flex h-8 w-full items-center justify-between">
        <span className="text-xs font-medium">
          닉네임
        </span>
        <span className="text-xs font-light text-gray02">
          2024년 3월 28일
        </span>
      </div>
      <div className="flex">
        <span className="font-light leading-5">
          지나가는 행인입니다. 잘 정리된 글에
          감탄하고 갑니다 감사합니다.(테스트용
          댓글입니다.)
        </span>
      </div>
      <hr className="my-5 h-[1px] border-none bg-gray02" />
    </div>
  );
};
