import { ChangeEvent } from "react";

interface InputProps {
  type: "text";
  id: string;
  value: string;
  placeholder: string;
  required?: boolean;
  isTextArea?: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const Input = ({
  type,
  id,
  value,
  placeholder,
  required,
  isTextArea,
  onChange,
}: InputProps) => {
  return (
    <>
      {isTextArea ? (
        <textarea
          onChange={
            onChange as (event: ChangeEvent<HTMLTextAreaElement>) => void
          }
          id={id}
          value={value}
          required={required}
          placeholder={placeholder}
          className="bg-gray-300 shadow-lg shadow-slate-300 outline outline-1 outline-slate-500 rounded-sm p-2 w-full font-semibold text-[18px]"
        />
      ) : (
        <input
          onChange={onChange as (event: ChangeEvent<HTMLInputElement>) => void}
          type={type}
          id={id}
          value={value}
          required={required}
          placeholder={placeholder}
          className="bg-gray-300 shadow-lg shadow-slate-300 outline outline-1 outline-slate-500 rounded-sm p-2 w-full font-semibold text-[18px]"
        />
      )}
    </>
  );
};
