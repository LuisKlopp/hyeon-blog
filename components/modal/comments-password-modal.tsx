"use client";

import React, {
  useEffect,
  useState,
} from "react";
import { CommentPasswordInput } from "@/components/comments/comment-password-input";
import { CommentButton } from "../comments/comment-button";
import Portal from "./portal";

interface CommentsPasswordModal {
  commentId: number;
  closeModal: () => void;
}

const CommentsPasswordModal = ({
  closeModal,
  commentId,
}: CommentsPasswordModal) => {
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
      return data;
    } else {
      setErrorMessage("비밀번호가 틀렸습니다");
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
      <div
        className="modal-background fixed left-0 top-0 z-30 flex h-full w-screen items-center justify-center"
        onClick={closeModal}
      >
        <div
          className="fixed flex w-[90%] max-w-[600px] flex-col gap-4 rounded-lg border bg-white p-4 dark:bg-gray07"
          onClick={(e) => e.stopPropagation()}
        >
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
              handleClick={handleVerifyPassword}
            />
          </div>
        </div>
      </div>
    </Portal>
  );
};

export { CommentsPasswordModal };
