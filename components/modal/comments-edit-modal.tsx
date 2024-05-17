"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CommentPasswordInput } from "@/components/comments/comment-password-input";
import { CommentButton } from "@/components/comments/comment-button";
import Portal from "./portal";
import { CommentTextarea } from "@/components/comments/comment-textarea";
import { CommentInput } from "@/components/comments/comment-input";
import { CommentType } from "@/types/comment.types";

interface CommentEditModalProps {
  nickname: string;
  content: string;
  commentId: number;
  setIsVerifiedPassword: Dispatch<
    SetStateAction<boolean>
  >;
  commentList: CommentType[];
  setCommentList: Dispatch<
    SetStateAction<CommentType[]>
  >;
}

const CommentEditModal = ({
  nickname,
  content,
  commentId,
  commentList,
  setCommentList,
  setIsVerifiedPassword,
}: CommentEditModalProps) => {
  const [editNickname, setEditNickname] =
    useState(nickname);
  const [editContent, setEditContent] =
    useState(content);
  const [password, setPassword] = useState("");

  const handleCloseModal = () =>
    setIsVerifiedPassword(false);

  const isAbledClick =
    !!editNickname &&
    !!editContent &&
    password.length === 4;

  const handleEditComment = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/comments/${commentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname: editNickname,
          password,
          content: editContent,
        }),
      },
    );
    const updatedCommentList = commentList.map(
      (comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            nickname: editNickname,
            content: editContent,
          };
        }
        return comment;
      },
    );
    setCommentList(updatedCommentList);
    const data = await response.json();
    if (response.ok) {
      handleCloseModal();
      return data;
    } else {
      return false;
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Portal elementId="modal-root">
      <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center">
        <div
          onClick={handleCloseModal}
          className="modal-background fixed left-0 top-0 z-30 flex h-full w-screen items-center justify-center"
        />
        <div className="fixed z-40 flex w-[90%] max-w-[600px] flex-col gap-4 rounded-lg border bg-white p-4 dark:bg-gray07">
          <div className="absolute right-3 top-2">
            <button onClick={handleCloseModal}>
              X
            </button>
          </div>
          <span className="dark:text-gray02">
            댓글 수정
          </span>
          <div className="h-10">
            <CommentInput
              nickname={editNickname}
              setNickname={setEditNickname}
            />
          </div>
          <div className="h-10">
            <CommentPasswordInput
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div className="h-24">
            <CommentTextarea
              content={editContent}
              setContent={setEditContent}
            />
          </div>
          <div className="text-right">
            <CommentButton
              label="입력"
              isAbledClick={isAbledClick}
              handleClick={handleEditComment}
            />
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { CommentEditModal };
