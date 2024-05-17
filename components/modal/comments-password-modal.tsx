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

interface CommentPasswordModalProps {
  commentId: number;
  closeModal: () => void;
  setIsVerifiedPassword: Dispatch<
    SetStateAction<boolean>
  >;
  type: "Edit" | "Delete";
}

const CommentPasswordModal = ({
  closeModal,
  commentId,
  setIsVerifiedPassword,
  type,
}: CommentPasswordModalProps) => {
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  const isAbledClick = password.length === 4;

  const handleVerifyPassword = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/comments/check-password/${commentId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      },
    );
    const data = await response.json();
    if (response.ok) {
      setIsVerifiedPassword(true);
      closeModal();
      return data;
    }
    setErrorMessage("비밀번호가 틀렸습니다");
    return false;
  };

  const handleDeleteComment = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/comments/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      },
    );
    if (response.ok) return closeModal();
    setErrorMessage("비밀번호가 틀렸습니다.");
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
          onClick={closeModal}
          className="modal-background fixed left-0 top-0 z-30 flex h-full w-screen items-center justify-center"
        />
        <div className="fixed z-40 flex w-[90%] max-w-[600px] flex-col gap-4 rounded-lg border bg-white p-4 dark:bg-gray07">
          <div className="absolute right-3 top-2">
            <button onClick={closeModal}>
              X
            </button>
          </div>
          <span className="dark:text-gray02">
            댓글 비밀번호를 입력해주세요
          </span>
          <div className="h-10">
            <CommentPasswordInput
              password={password}
              setPassword={setPassword}
            />
          </div>
          <div className="text-right">
            {errorMessage && (
              <div className="flex">
                <span className="text-blogThickRed dark:text-red-500">
                  비밀번호가 틀렸습니다.
                </span>
              </div>
            )}
            <CommentButton
              label="입력"
              isAbledClick={isAbledClick}
              handleClick={
                type === "Edit"
                  ? handleVerifyPassword
                  : handleDeleteComment
              }
            />
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { CommentPasswordModal };
