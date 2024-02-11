"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Input } from "../Components";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContent(e.target.value);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(title, content);

    try {
      await fetch("/api/create-post/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <main className="ml-10 mr-10 mt-5">
      <h1 className="font-semibold text-6xl mb-5">Create Post</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full p-5 outline outline-1 shadow-md shadow-slate-400 outline-slate-400 rounded-lg lg:w-[600px]"
      >
        <h2 className="font-semibold text-3xl">Form to Create Post</h2>
        <div className="flex flex-col gap-5">
          <div className="mt-5">
            <h3 className="font-semibold text-[22px] text-slate-800">Title</h3>
            <Input
              onChange={handleTitleChange}
              type="text"
              id="title"
              value={title}
              required
              isTextArea={false}
              placeholder="Enter your title..."
            />
          </div>
          <div>
            <h3 className="font-semibold text-[22px] text-slate-800">
              Content
            </h3>
            <Input
              type="text"
              onChange={handleContentChange}
              id="content"
              value={content}
              required
              isTextArea
              placeholder="Enter your content..."
            />
          </div>
        </div>

        <div className="flex justify-center pt-2 gap-10">
          <Button text="Create Post" type="submit" />
          <Link href="/">
            <Button text="Return to Home" type="button" />
          </Link>
        </div>
      </form>
    </main>
  );
};

export default CreatePost;
