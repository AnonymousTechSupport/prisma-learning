"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Input } from "../Components";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const router = useRouter();

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
      const response = await fetch("/api/create-post/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        router.refresh();
        return setSuccess(true);
      } else {
        return setFail(true);
      }
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

        {/* TODO Make these components */}
        {success && (
          <div className="mt-5 p-5 bg-green-500 rounded-xl shadow-lg shadow-slate-600 outline outline-1 outline-green-900 w-full slide-in-bck-left">
            <h1 className="font-bold text-white text-[30px]">
              Post created successfully!
            </h1>
            <p className=" from-neutral-500 text-slate-200 text-[20px]">
              You may return to the Home page to view your new feed!
            </p>
          </div>
        )}
        {fail && (
          <div className="mt-5 p-5 bg-red-500 rounded-xl shadow-lg shadow-slate-600 outline outline-1 outline-red-900 w-full slide-in-bck-left">
            <h1 className="font-bold text-white text-[30px]">
              Unfortunately the post was not created!
            </h1>
            <p className=" from-neutral-500 text-slate-200 text-[20px]">
              There may be some database issues!
            </p>
          </div>
        )}
      </form>
    </main>
  );
};

export default CreatePost;
