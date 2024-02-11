"use client";

import { Button } from "./";

interface PostsProps {
  id: string | null | undefined;
  title: string;
  content: string | null;
  authorName: string | null | undefined;
}

export const Posts = ({ id, title, content, authorName }: PostsProps) => {
  return (
    <>
      <div className="">
        <h1 className="font-bold text-2xl mb-2">Created By: {authorName}</h1>
        <h2 className="font-semibold text-xl mb-1">Title: {title.slice(0)}</h2>
        <p className="text-[20px] text-slate-500">{content}</p>
      </div>
      <Button text="Delete Post" type="button" isDelete postId={id} />
    </>
  );
};
