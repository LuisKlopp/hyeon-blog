"use client";

import { CommentInput } from "@/components/comments/comment-input";
import { CommentTextarea } from "@/components/comments/comment-textarea";
import { CommentButton } from "@/components/comments/comment-button";
import { CommentItem } from "@/components/comments/comment-item";
import { CommentPasswordInput } from "@/components/comments/comment-password-input";
import { CommentType } from "@/types/comment.types";
import { useState } from "react";

interface CommentsProps {
  comments: CommentType[];
  postId: number;
}

export const CommentBundle = ({
  comments,
  postId,
}: CommentsProps) => {
  const [commentList, setCommentList] =
    useState(comments);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  const isAbledClick =
    !!nickname &&
    !!content &&
    password.length === 4;

  const handleAddComment = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/comments/posts/${postId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname,
          password,
          content,
        }),
      },
    );

    const newComment = {
      id: commentList.length
        ? commentList[commentList.length - 1].id +
          1
        : 1,
      post_id: postId,
      nickname,
      content,
      password,
      created_at: new Date().toISOString(),
    };

    const newCommentList = [
      ...commentList,
      newComment,
    ];
    setCommentList(newCommentList);
    setNickname("");
    setContent("");
    setPassword("");
  };

  return (
    <>
      <span className="mt-[10px] text-base font-medium leading-8 text-blogAbsoluteBlack dark:text-white">
        {commentList.length}개의 댓글
      </span>
      <div className="mt-5 flex flex-col items-end gap-[14px]">
        <CommentInput
          nickname={nickname}
          setNickname={setNickname}
        />
        <CommentPasswordInput
          password={password}
          setPassword={setPassword}
        />
        <CommentTextarea
          content={content}
          setContent={setContent}
        />
        <CommentButton
          handleClick={handleAddComment}
          isAbledClick={isAbledClick}
        />
        {!!commentList && (
          <div className="mt-10 w-full">
            {commentList.map((comment) => (
              <CommentItem
                key={comment.id}
                nickname={comment.nickname}
                content={comment.content}
                created_at={comment.created_at}
                commentId={comment.id}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
