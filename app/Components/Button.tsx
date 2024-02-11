"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  isDelete?: boolean;
  postId?: string | null | undefined;
  onClick?: () => void;
}

export const Button = ({
  text,
  type,
  isDelete,
  postId,
  onClick,
}: ButtonProps) => {
  const router = useRouter();
  async function handleDelete() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error(err);
    }

    router.refresh();
  }
  return (
    <>
      {isDelete ? (
        <button
          onClick={handleDelete}
          type={type}
          className="mt-4 p-1 outline outline-1 outline-red-600 hover:bg-red-200 transition-all shadow-md shadow-slate-700 text-black text-[24px] font-semibold rounded-sm"
        >
          {text}
        </button>
      ) : (
        <button
          onClick={onClick}
          type={type}
          className="mt-5 p-3 bg-blue-500 hover:bg-blue-600 transition-all shadow-md shadow-slate-700 text-white text-[24px] font-semibold rounded-lg"
        >
          {text}
        </button>
      )}
    </>
  );
};
