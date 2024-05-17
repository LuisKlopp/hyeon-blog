"use client";

import { formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import useModal from "@/hooks/useModal";
import { CommentPasswordModal } from "@/components/modal/comments-password-modal";
import { CommentEditModal } from "@/components/modal/comments-edit-modal";

interface CommentProps {
  nickname: string;
  content: string;
  created_at: string;
  commentId: number;
}

export const CommentItem = ({
  nickname,
  content,
  created_at,
  commentId,
}: CommentProps) => {
  const [date, setDate] = useState<string>("");
  const [
    isVerifiedPassword,
    setIsVerifiedPassword,
  ] = useState(false);
  const { isModal, openModal, closeModal } =
    useModal();

  useEffect(() => {
    setDate(formatDate(created_at));
  }, [created_at, date]);

  return (
    <div className="flex flex-col">
      <div className="mb-1 flex h-8 w-full items-center justify-between">
        <div>
          <span className="text-xs font-medium">
            {nickname}{" "}
          </span>
          <span className="text-xs font-light text-gray04 dark:text-gray02">
            &middot; {date}
          </span>
        </div>
        <div className="text-xs text-gray02">
          <span
            className="cursor-pointer hover:underline"
            onClick={openModal}
          >
            수정
          </span>
          <span> | </span>
          <span className="cursor-pointer hover:underline">
            삭제
          </span>
        </div>
      </div>
      <div className="flex">
        <span className="font-light leading-5">
          {content}
        </span>
      </div>
      <hr className="my-5 h-[1px] border-none bg-gray02" />
      {isModal && (
        <CommentPasswordModal
          closeModal={closeModal}
          commentId={commentId}
          setIsVerifiedPassword={
            setIsVerifiedPassword
          }
        />
      )}
      {isVerifiedPassword && (
        <CommentEditModal
          nickname={nickname}
          content={content}
          commentId={commentId}
          setIsVerifiedPassword={
            setIsVerifiedPassword
          }
        />
      )}
    </div>
  );
};
